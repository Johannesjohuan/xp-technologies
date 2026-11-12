import nodemailer from "nodemailer";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { consultationEmailTemplate } from "../templates/consultationEmailTemplate.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logoPath = path.resolve(
  __dirname,
  "../../../web/src/assets/logos/xp-logo-white.png"
);

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: false,
  requireTLS: true,
  family: 4,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_APP_PASSWORD
  }
});

const validateMeetingUrl = (meetingUrl) => {
  if (
    typeof meetingUrl !== "string" ||
    !/^https:\/\/meet\.google\.com\/[a-z0-9-]+\/?$/i.test(meetingUrl)
  ) {
    throw new Error("Invalid Google Meet URL");
  }
};

const escapeHtml = (value) =>
  String(value ?? "").replace(/[&<>"']/g, (character) => {
    const replacements = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };

    return replacements[character];
  });

const sender = () => ({
  name: process.env.EMAIL_FROM_NAME || "XP Technologies",
  address: process.env.SMTP_USER
});

const logoAttachment = () => ({
  filename: "xp-logo-white.png",
  path: logoPath,
  cid: "xp-logo",
  contentDisposition: "inline"
});

export const sendConsultationConfirmationEmail = async ({
  customerName,
  customerEmail,
  meetingDate,
  startTime,
  endTime,
  meetingUrl
}) => {
  validateMeetingUrl(meetingUrl);

  const html = consultationEmailTemplate({
    customerName,
    meetingDate,
    startTime,
    endTime,
    meetingUrl
  });

  const result = await transporter.sendMail({
    from: sender(),
    to: customerEmail,
    replyTo: process.env.SMTP_USER,
    subject: "Your Consultation with XP Technologies Is Confirmed",
    text: `Hello ${customerName},

Your consultation with XP Technologies has been confirmed.

Date: ${meetingDate}
Time: ${startTime} - ${endTime} (Europe/Lisbon)
Platform: Google Meet

Join your meeting:
${meetingUrl}

Please join a few minutes early.

Best regards,
XP Technologies Team`,
    html,
    attachments: [logoAttachment()]
  });

  return result.messageId;
};

export const sendConsultationReminderEmail = async ({
  customerName,
  customerEmail,
  meetingDate,
  startTime,
  endTime,
  meetingUrl
}) => {
  validateMeetingUrl(meetingUrl);

  const name = escapeHtml(customerName);
  const date = escapeHtml(meetingDate);
  const start = escapeHtml(startTime);
  const end = escapeHtml(endTime);
  const url = escapeHtml(meetingUrl);

  const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body style="margin:0;padding:24px 12px;background:#f0f4fa;font-family:Arial,sans-serif;color:#e7edf7;">
        <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:620px;margin:auto;background:#1d2025;border-radius:12px;overflow:hidden;">
          <tr>
            <td align="center" style="background:#dce7fb;padding:18px;">
              <img src="cid:xp-logo" alt="XP Technologies" width="110" style="display:block;max-width:110px;height:auto;" />
            </td>
          </tr>
          <tr>
            <td style="padding:36px 30px;">
              <p style="color:#63c9a4;font-size:14px;font-weight:bold;letter-spacing:1px;">
                ✓ MEETING REMINDER
              </p>
              <h1 style="font-size:28px;line-height:1.3;color:#ffffff;">
                Your consultation starts in approximately 2 hours.
              </h1>
              <p style="font-size:16px;line-height:1.7;">
                Hello ${name},
              </p>
              <p style="font-size:16px;line-height:1.7;">
                This is a friendly reminder about your upcoming consultation with XP Technologies.
              </p>
              <table role="presentation" cellpadding="12" cellspacing="0" width="100%" style="background:#272b30;border:1px solid #343c47;border-radius:10px;margin:24px 0;color:#e7edf7;">
                <tr>
                  <td style="color:#aebbd0;">Date</td>
                  <td><strong>${date}</strong></td>
                </tr>
                <tr>
                  <td style="color:#aebbd0;">Time</td>
                  <td><strong>${start} – ${end}</strong></td>
                </tr>
                <tr>
                  <td style="color:#aebbd0;">Timezone</td>
                  <td>Europe/Lisbon</td>
                </tr>
                <tr>
                  <td style="color:#aebbd0;">Platform</td>
                  <td>Google Meet</td>
                </tr>
              </table>
              <table role="presentation" cellpadding="0" cellspacing="0" align="center">
                <tr>
                  <td align="center" bgcolor="#42a6cc" style="border-radius:9px;">
                    <a href="${url}" style="display:inline-block;padding:16px 28px;color:#10202c;text-decoration:none;font-size:16px;font-weight:bold;">
                      Join Google Meet →
                    </a>
                  </td>
                </tr>
              </table>
              <p style="font-size:14px;line-height:1.7;color:#aebbd0;margin-top:30px;">
                Please join a few minutes before your scheduled time.
              </p>
              <p style="font-size:15px;line-height:1.7;">
                Best regards,<br />
                <strong>XP Technologies Team</strong>
              </p>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;

  const result = await transporter.sendMail({
    from: sender(),
    to: customerEmail,
    replyTo: process.env.SMTP_USER,
    subject: "Reminder: Your XP Technologies Consultation Is in 2 Hours",
    text: `Hello ${customerName},

This is a friendly reminder that your consultation with XP Technologies begins in approximately 2 hours.

Date: ${meetingDate}
Time: ${startTime} - ${endTime} (Europe/Lisbon)
Platform: Google Meet

Join your meeting:
${meetingUrl}

Please join a few minutes early.

Best regards,
XP Technologies Team`,
    html,
    attachments: [logoAttachment()]
  });

  return result.messageId;
};