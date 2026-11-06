import http from "node:http";
import handler from "../api/contact.js";

async function runTests() {
  console.log("=== TESTING /api/contact SERVERLESS HANDLER ===\n");
  let passed = 0;
  let failed = 0;

  // Mock response object
  function createMockRes() {
    return {
      statusCode: 200,
      headers: {},
      body: null,
      setHeader(k, v) {
        this.headers[k] = v;
      },
      status(code) {
        this.statusCode = code;
        return this;
      },
      json(data) {
        this.body = data;
        return this;
      },
      end(str) {
        if (str && !this.body) {
          try {
            this.body = JSON.parse(str);
          } catch {
            this.body = str;
          }
        }
      },
    };
  }

  // Test 1: Reject GET method
  {
    const req = { method: "GET" };
    const res = createMockRes();
    await handler(req, res);
    if (res.statusCode === 405 && res.body?.success === false) {
      console.log("✓ Test 1: Method rejection (GET -> 405 Method Not Allowed)");
      passed++;
    } else {
      console.error("✗ Test 1 Failed:", res.statusCode, res.body);
      failed++;
    }
  }

  // Test 2: Reject invalid/missing payload
  {
    const req = { method: "POST", body: { name: "A" } };
    const res = createMockRes();
    await handler(req, res);
    if (res.statusCode === 400 && res.body?.success === false) {
      console.log("✓ Test 2: Input validation (Invalid name -> 400 Bad Request)");
      passed++;
    } else {
      console.error("✗ Test 2 Failed:", res.statusCode, res.body);
      failed++;
    }
  }

  // Test 3: Reject invalid email
  {
    const req = {
      method: "POST",
      body: {
        name: "John Doe",
        email: "not-an-email",
        phone: "+91 9999999999",
        message: "Hello DevOps Minders",
      },
    };
    const res = createMockRes();
    await handler(req, res);
    if (res.statusCode === 400 && res.body?.message?.includes("valid email")) {
      console.log("✓ Test 3: Email regex validation (Invalid email format -> 400 Bad Request)");
      passed++;
    } else {
      console.error("✗ Test 3 Failed:", res.statusCode, res.body);
      failed++;
    }
  }

  // Test 4: Honeypot spam drop
  {
    const req = {
      method: "POST",
      body: {
        name: "Bot Spammer",
        email: "bot@spam.com",
        phone: "1234567890",
        message: "Buy cheap crypto",
        website: "http://spam.org", // Honeypot field
      },
    };
    const res = createMockRes();
    await handler(req, res);
    if (res.statusCode === 200 && res.body?.success === true) {
      console.log("✓ Test 4: Honeypot spam defense (Bot trapped -> 200 Silent Drop)");
      passed++;
    } else {
      console.error("✗ Test 4 Failed:", res.statusCode, res.body);
      failed++;
    }
  }

  // Test 5: Safe handling when SMTP_PASS is not configured
  {
    const oldPass = process.env.SMTP_PASS || process.env.TITAN_SMTP_PASS;
    delete process.env.SMTP_PASS;
    delete process.env.TITAN_SMTP_PASS;

    const req = {
      method: "POST",
      body: {
        name: "Valid User",
        email: "user@example.com",
        phone: "+91 8872781496",
        service: "DevOps Consulting",
        message: "Need migration assistance",
      },
    };
    const res = createMockRes();
    await handler(req, res);

    if (res.statusCode === 500 && res.body?.message?.includes("misconfigured")) {
      console.log("✓ Test 5: Missing password protection (Safe 500 response without crashing)");
      passed++;
    } else {
      console.error("✗ Test 5 Failed:", res.statusCode, res.body);
      failed++;
    }

    if (oldPass) {
      process.env.SMTP_PASS = oldPass;
      process.env.TITAN_SMTP_PASS = oldPass;
    }
  }

  console.log(`\nTests Completed: ${passed} Passed, ${failed} Failed\n`);
  if (failed > 0) process.exit(1);
}

runTests().catch((err) => {
  console.error("Test runner error:", err);
  process.exit(1);
});
