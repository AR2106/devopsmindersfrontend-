import nodemailer from "nodemailer";

async function verifySmtp(host, port, secure, user, pass) {
  console.log(`\n======================================================`);
  console.log(`TESTING SMTP: ${host}:${port} (SSL: ${secure})`);
  console.log(`Username: ${user || "(none)"}`);
  console.log(`Password: ${pass ? "******** [Configured]" : "(none provided - testing socket only)"}`);
  console.log(`======================================================`);

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: pass
      ? {
          user,
          pass,
        }
      : undefined,
    connectionTimeout: 8000,
    greetingTimeout: 8000,
    socketTimeout: 10000,
  });

  const start = Date.now();
  try {
    await transporter.verify();
    const elapsed = ((Date.now() - start) / 1000).toFixed(2);
    console.log(`✓ SUCCESS: Connected and verified with ${host}:${port} in ${elapsed}s!`);
    return true;
  } catch (error) {
    const elapsed = ((Date.now() - start) / 1000).toFixed(2);
    console.log(`✗ FAILED with ${host}:${port} in ${elapsed}s`);
    console.log(`  Error Code: ${error.code || error.syscall || "UNKNOWN"}`);
    console.log(`  Error Message: ${error.message}`);
    return false;
  }
}

async function run() {
  const user = process.env.TITAN_SMTP_USER || "info@devopsminders.com";
  const pass = process.env.TITAN_SMTP_PASS;

  console.log("Starting SMTP Compatibility & Verification Audit...\n");

  // 1. Test requested GoDaddy legacy host: smtpout.secureserver.net:465
  await verifySmtp("smtpout.secureserver.net", 465, true, user, pass);

  // 2. Test official Titan Email host for GoDaddy Pro Light: smtp.titan.email:465
  await verifySmtp("smtp.titan.email", 465, true, user, pass);

  // 3. Test Titan Email TLS: smtp.titan.email:587
  await verifySmtp("smtp.titan.email", 587, false, user, pass);
}

run().catch((err) => {
  console.error("Test runner failed:", err);
  process.exit(1);
});

