import nodemailer from "nodemailer";

/**
 * Helper for sending JSON responses compatible with Vercel and Node http.ServerResponse
 */
function sendJson(res, statusCode, data) {
  if (typeof res.status === "function" && typeof res.json === "function") {
    return res.status(statusCode).json(data);
  }
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(data));
}

/**
 * Helper to parse request body if not pre-parsed
 */
async function parseBody(req) {
  if (req.body && typeof req.body === "object") {
    return req.body;
  }
  if (typeof req.body === "string") {
    try {
      return JSON.parse(req.body);
    } catch {
      return {};
    }
  }
  return new Promise((resolve) => {
    let raw = "";
    req.on("data", (chunk) => {
      raw += chunk;
    });
    req.on("end", () => {
      try {
        resolve(JSON.parse(raw));
      } catch {
        resolve({});
      }
    });
    req.on("error", () => resolve({}));
  });
}

/**
 * Sanitize HTML inputs to prevent injection in email clients
 */
function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export default async function handler(req, res) {
  // Only accept POST requests
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return sendJson(res, 405, {
      success: false,
      message: "Method Not Allowed. Use POST.",
    });
  }

  try {
    const body = await parseBody(req);

    // Spam Protection: Honeypot field (hidden field filled by automated bots)
    if (body.website || body._hp) {
      console.warn("[Spam Filter] Honeypot triggered, silently dropping bot inquiry.");
      return sendJson(res, 200, {
        success: true,
        message: "Your inquiry has been received.",
      });
    }

    const name = (body.name || "").trim();
    const email = (body.email || "").trim();
    const phone = (body.phone || "").trim();
    const company = (body.company || "").trim();
    const service = (body.service || "").trim();
    const budget = (body.budget || "").trim();
    const timeline = (body.timeline || "").trim();
    const source = (body.source || "").trim();
    const message = (body.message || "").trim();

    // Basic Validation
    if (!name || name.length < 2) {
      return sendJson(res, 400, {
        success: false,
        message: "Please provide a valid full name.",
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return sendJson(res, 400, {
        success: false,
        message: "Please provide a valid email address.",
      });
    }

    if (!phone || phone.length < 6) {
      return sendJson(res, 400, {
        success: false,
        message: "Please provide a valid phone number.",
      });
    }

    if (!message || message.length < 5) {
      return sendJson(res, 400, {
        success: false,
        message: "Please describe your project requirements in the message field.",
      });
    }

    // GoDaddy SMTP Configuration via Environment Variables (Supports SMTP_* and TITAN_SMTP_*)
    const smtpHost = process.env.SMTP_HOST || process.env.TITAN_SMTP_HOST || "smtpout.secureserver.net";
    const smtpPort = parseInt(process.env.SMTP_PORT || process.env.TITAN_SMTP_PORT || "465", 10);
    const smtpSecure = (process.env.SMTP_SECURE || process.env.TITAN_SMTP_SECURE) !== "false"; // true for port 465 (SSL)
    const smtpUser = process.env.SMTP_USER || process.env.TITAN_SMTP_USER || "info@devopsminders.com";
    const smtpPass = process.env.SMTP_PASS || process.env.TITAN_SMTP_PASS;
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "info@devopsminders.com";

    if (!smtpPass) {
      console.error("[Configuration Error] SMTP_PASS / TITAN_SMTP_PASS environment variable is not set.");
      return sendJson(res, 500, {
        success: false,
        message: "Email service is temporarily misconfigured. Please contact info@devopsminders.com directly.",
      });
    }

    // Create Nodemailer Transporter with GoDaddy SMTP (Timeouts set to 8s to stay within Vercel 10s ceiling)
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      connectionTimeout: 8000,
      greetingTimeout: 8000,
      socketTimeout: 8000,
    });

    const formattedDate = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "medium",
    });

    // Branded responsive HTML template
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b; line-height: 1.6; margin: 0; padding: 0; background-color: #f8fafc; }
            .container { max-width: 620px; margin: 30px auto; background-color: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); }
            .header { background-color: #0b0b0d; color: #ffffff; padding: 24px 32px; border-bottom: 3px solid #E80112; }
            .header h1 { margin: 0; font-size: 20px; font-weight: 700; letter-spacing: -0.02em; }
            .header p { margin: 4px 0 0; font-size: 13px; color: #94a3b8; }
            .content { padding: 32px; }
            .badge { display: inline-block; background-color: #fef2f2; color: #b91c1c; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; padding: 4px 10px; border-radius: 9999px; margin-bottom: 20px; border: 1px solid #fee2e2; }
            .message-box { margin-top: 24px; padding: 20px; background-color: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0; }
            .message-title { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #64748b; margin-bottom: 8px; }
            .message-text { font-size: 14px; color: #1e293b; white-space: pre-wrap; line-height: 1.6; margin: 0; }
            .footer { padding: 20px 32px; background-color: #f1f5f9; font-size: 12px; color: #64748b; text-align: center; border-top: 1px solid #e2e8f0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>DevOps Minders • New Inquiry</h1>
              <p>Submitted via Website Contact Form</p>
            </div>
            <div class="content">
              <span class="badge">Inquiry Details</span>
              
              <table style="width: 100%; border-collapse: collapse;">
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; font-size: 13px; font-weight: 600; color: #64748b; width: 140px;">Client Name</td>
                  <td style="padding: 10px 0; font-size: 14px; font-weight: 600; color: #0f172a;">${escapeHtml(name)}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; font-size: 13px; font-weight: 600; color: #64748b;">Email Address</td>
                  <td style="padding: 10px 0; font-size: 14px; color: #0284c7;"><a href="mailto:${escapeHtml(email)}" style="color: #0284c7; text-decoration: none;">${escapeHtml(email)}</a></td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; font-size: 13px; font-weight: 600; color: #64748b;">Phone Number</td>
                  <td style="padding: 10px 0; font-size: 14px; color: #0f172a;"><a href="tel:${escapeHtml(phone)}" style="color: #0f172a; text-decoration: none;">${escapeHtml(phone)}</a></td>
                </tr>
                ${company ? `
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; font-size: 13px; font-weight: 600; color: #64748b;">Company</td>
                  <td style="padding: 10px 0; font-size: 14px; color: #0f172a;">${escapeHtml(company)}</td>
                </tr>` : ""}
                ${service ? `
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; font-size: 13px; font-weight: 600; color: #64748b;">Service Required</td>
                  <td style="padding: 10px 0; font-size: 14px; color: #b91c1c; font-weight: 600;">${escapeHtml(service)}</td>
                </tr>` : ""}
                ${budget ? `
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; font-size: 13px; font-weight: 600; color: #64748b;">Budget Range</td>
                  <td style="padding: 10px 0; font-size: 14px; color: #0f172a;">${escapeHtml(budget)}</td>
                </tr>` : ""}
                ${timeline ? `
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; font-size: 13px; font-weight: 600; color: #64748b;">Target Timeline</td>
                  <td style="padding: 10px 0; font-size: 14px; color: #0f172a;">${escapeHtml(timeline)}</td>
                </tr>` : ""}
                ${source ? `
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; font-size: 13px; font-weight: 600; color: #64748b;">Referral Source</td>
                  <td style="padding: 10px 0; font-size: 14px; color: #0f172a;">${escapeHtml(source)}</td>
                </tr>` : ""}
              </table>

              <div class="message-box">
                <div class="message-title">Project Requirements &amp; Message</div>
                <p class="message-text">${escapeHtml(message)}</p>
              </div>
            </div>
            <div class="footer">
              Received on ${formattedDate} (IST) • Direct Reply-To configured for ${escapeHtml(email)}
            </div>
          </div>
        </body>
      </html>
    `;

    // Plain text alternative
    const textContent = `
NEW CLIENT INQUIRY - DEVOPS MINDERS
====================================
Timestamp: ${formattedDate}

Client Details:
- Name: ${name}
- Email: ${email}
- Phone: ${phone}
- Company: ${company || "Not provided"}

Project Details:
- Service Required: ${service || "General Inquiry"}
- Budget Range: ${budget || "Not specified"}
- Target Timeline: ${timeline || "Not specified"}
- Referral Source: ${source || "Direct"}

Message:
------------------------------------
${message}
------------------------------------

Direct reply to this email will respond to ${email}.
    `.trim();

    // Deliver email via GoDaddy Titan SMTP
    const info = await transporter.sendMail({
      from: `"DevOps Minders Website" <${smtpUser}>`,
      to: receiverEmail,
      replyTo: email,
      subject: `New Inquiry: ${name} — ${service || "IT Services"}`,
      text: textContent,
      html: htmlContent,
    });

    console.log("[SMTP Success] Inquiry delivered via Titan SMTP. MessageId:", info.messageId);

    return sendJson(res, 200, {
      success: true,
      messageId: info.messageId,
      message: "Your inquiry has been sent successfully. We will get back to you within 24 hours.",
    });
  } catch (error) {
    console.error("[SMTP Delivery Error]:", error);
    return sendJson(res, 500, {
      success: false,
      message: error.message || "Failed to deliver your inquiry. Please try again or email info@devopsminders.com directly.",
    });
  }
}
