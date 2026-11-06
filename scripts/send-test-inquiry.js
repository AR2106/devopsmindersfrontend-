import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import handler from "../api/contact.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const envPath = path.resolve(__dirname, "../.env");

// 1. Load .env file
if (fs.existsSync(envPath)) {
  const content = fs.readFileSync(envPath, "utf-8");
  for (const line of content.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const [key, ...values] = trimmed.split("=");
    if (key && values.length > 0) {
      process.env[key.trim()] = values.join("=").trim().replace(/^["']|["']$/g, "");
    }
  }
}

// 2. Temporarily set test recipient to hamanthapa00000@gmail.com
const originalReceiver = process.env.CONTACT_RECEIVER_EMAIL;
const testRecipient = "hamanthapa00000@gmail.com";
process.env.CONTACT_RECEIVER_EMAIL = testRecipient;

async function run() {
  const host = process.env.SMTP_HOST || process.env.TITAN_SMTP_HOST || "smtpout.secureserver.net";
  const port = process.env.SMTP_PORT || process.env.TITAN_SMTP_PORT || "465";
  const secure = (process.env.SMTP_SECURE || process.env.TITAN_SMTP_SECURE) !== "false";
  const user = process.env.SMTP_USER || process.env.TITAN_SMTP_USER || "info@devopsminders.com";
  const pass = process.env.SMTP_PASS || process.env.TITAN_SMTP_PASS;

  console.log("===================================================================");
  console.log("REAL LIVE INQUIRY EMAIL DELIVERY TEST");
  console.log("===================================================================");
  console.log(`Sender Mailbox   : ${user}`);
  console.log(`Test Recipient   : ${testRecipient} (Temporary test recipient)`);
  console.log(`Production Target: ${originalReceiver || "info@devopsminders.com"} (Will be preserved)`);
  console.log(`SMTP Host        : ${host}`);
  console.log(`Port / Security  : ${port} (SSL: ${secure})`);
  console.log(`Password Config  : ${pass ? "Configured in .env" : "NOT FOUND IN .env"}`);
  console.log("===================================================================\n");

  if (!pass) {
    console.error("ERROR: .env file is missing or SMTP_PASS is not set!");
    console.error("\nPlease create a .env file in devops_websit/ with your mailbox password:");
    console.error("  SMTP_HOST=smtpout.secureserver.net");
    console.error("  SMTP_PORT=465");
    console.error("  SMTP_SECURE=true");
    console.error("  SMTP_USER=info@devopsminders.com");
    console.error("  SMTP_PASS=your_actual_mailbox_password\n");
    process.exit(1);
  }

  const mockReq = {
    method: "POST",
    headers: {},
    body: {
      name: "Haman Thapa (Verification Test)",
      email: "test.visitor@devopsminders.com",
      phone: "+91 88727 81496",
      company: "DevOps Minders QA",
      service: "DevOps Consulting & AI Development",
      budget: "$5,000 - $10,000",
      timeline: "Immediate",
      source: "Live Delivery Verification",
      message:
        "Hello Haman, this is a real verification inquiry sent via GoDaddy Titan SMTP (smtp.titan.email:465 SSL) to confirm actual end-to-end delivery to your Gmail inbox.",
    },
  };

  let responseStatus = 200;
  let responseData = null;

  const mockRes = {
    statusCode: 200,
    setHeader() {},
    status(code) {
      responseStatus = code;
      this.statusCode = code;
      return this;
    },
    json(data) {
      responseData = data;
      return this;
    },
    end(str) {
      if (str && !responseData) {
        try {
          responseData = JSON.parse(str);
        } catch {
          responseData = str;
        }
      }
    },
  };

  try {
    console.log(`Sending inquiry to ${testRecipient} via Nodemailer...`);
    const startTime = Date.now();
    await handler(mockReq, mockRes);
    const elapsed = ((Date.now() - startTime) / 1000).toFixed(2);

    console.log(`\nHTTP Response Code : ${responseStatus}`);
    console.log(`Elapsed Time       : ${elapsed}s`);

    if (responseStatus === 200 && responseData?.success) {
      console.log("\n===================================================================");
      console.log("✓ SUCCESS: Inquiry accepted by GoDaddy Titan SMTP!");
      console.log(`MessageId : ${responseData.messageId || "(Acknowledged by SMTP)"}`);
      console.log(`Recipient : ${testRecipient}`);
      console.log("Please check your Gmail inbox (and Spam/Updates tab) for the test email.");
      console.log("===================================================================");
    } else {
      console.error("\n===================================================================");
      console.error("✗ DELIVERY FAILED");
      console.error("Error Message:", responseData?.message || "Unknown error");
      console.error("===================================================================");
      process.exit(1);
    }
  } finally {
    // Restore original recipient configuration
    if (originalReceiver) {
      process.env.CONTACT_RECEIVER_EMAIL = originalReceiver;
    } else {
      delete process.env.CONTACT_RECEIVER_EMAIL;
    }
    console.log(`\n[Restored] Production recipient preserved: ${process.env.CONTACT_RECEIVER_EMAIL || "info@devopsminders.com"}`);
  }
}

run().catch((err) => {
  console.error("Runner crashed:", err);
  process.exit(1);
});
