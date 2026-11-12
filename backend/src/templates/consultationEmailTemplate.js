const escapeHtml = (value) =>
  String(value ?? "").replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };

    return entities[character];
  });

const formatTime = (time) => {
  const [hours, minutes] = time.split(":").map(Number);
  const period = hours >= 12 ? "PM" : "AM";
  const hour = hours % 12 || 12;

  return `${hour}:${String(minutes).padStart(2, "0")} ${period}`;
};

export const consultationEmailTemplate = ({
  customerName,
  meetingDate,
  startTime,
  endTime,
  meetingUrl
}) => {
  const date = new Intl.DateTimeFormat("en-GB", {
    timeZone: "UTC",
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(new Date(`${meetingDate}T12:00:00Z`));

  const name = escapeHtml(customerName);
  const safeDate = escapeHtml(date);
  const safeTime = escapeHtml(
    `${formatTime(startTime)} – ${formatTime(endTime)}`
  );
  const safeUrl = escapeHtml(meetingUrl);

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Consultation Confirmed | XP Technologies</title>
</head>
<body style="margin:0;padding:0;background-color:#f3f6fa;font-family:Arial,Helvetica,sans-serif;color:#26364d;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f3f6fa;">
    <tr>
      <td align="center" style="padding:28px 12px;">
        <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="width:100%;max-width:560px;background-color:#ffffff;border-radius:12px;overflow:hidden;">
          <tr>
            <td align="center" bgcolor="#071b34" style="background-color:#071b34;padding:25px 24px;">
              <img src="cid:xp-logo" alt="XP Technologies" width="170" style="display:block;width:180px;max-width:100%;height:auto;border:0;">
            </td>
          </tr>
          <tr>
            <td style="padding:30px 28px 26px;">
              <p style="margin:0 0 10px;color:#16845f;font-size:12px;font-weight:bold;letter-spacing:1px;text-align:center;">
                ✓ CONSULTATION CONFIRMED
              </p>
              <h1 style="margin:0 0 26px;color:#0d2948;font-size:24px;line-height:1.3;text-align:center;">
                Your consultation is booked.
              </h1>
              <p style="margin:0 0 14px;color:#26364d;font-size:14px;line-height:1.7;">
                Hello ${name},
              </p>
              <p style="margin:0 0 22px;color:#43556d;font-size:14px;line-height:1.4;">
                Thank you for scheduling a consultation with XP Technologies. We're looking forward to discussing your business goals and exploring how our solutions can support your growth.
              </p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f7fb;border:1px solid #e3eaf2;border-radius:8px;">
                <tr>
                  <td style="padding:21px 22px;">
                    <p style="margin:0 0 17px;color:#0d2948;font-size:15px;font-weight:bold;">
                      Meeting details
                    </p>
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="90" valign="top" style="padding:0 8px 12px 0;color:#718198;font-size:13px;">Date</td>
                        <td valign="top" style="padding:0 0 12px;color:#1a304a;font-size:13px;font-weight:bold;">${safeDate}</td>
                      </tr>
                      <tr>
                        <td valign="top" style="padding:0 8px 12px 0;color:#718198;font-size:13px;">Time</td>
                        <td valign="top" style="padding:0 0 12px;color:#1a304a;font-size:13px;font-weight:bold;">${safeTime}</td>
                      </tr>
                      <tr>
                        <td valign="top" style="padding:0 8px 12px 0;color:#718198;font-size:13px;">Timezone</td>
                        <td valign="top" style="padding:0 0 12px;color:#1a304a;font-size:13px;">Europe/Lisbon</td>
                      </tr>
                      <tr>
                        <td valign="top" style="padding:0 8px 0 0;color:#718198;font-size:13px;">Platform</td>
                        <td valign="top" style="color:#1a304a;font-size:13px;">Google Meet</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <table role="presentation" align="center" cellpadding="0" cellspacing="0" style="margin:25px auto 15px;">
                <tr>
                  <td align="center" bgcolor="#087ea4" style="background-color:#087ea4;border-radius:7px;">
                    <a href="${safeUrl}" style="display:inline-block;padding:14px 25px;color:#ffffff;font-size:14px;font-weight:bold;text-decoration:none;">
                      Join Google Meet →
                    </a>
                  </td>
                </tr>
              </table>
              <p style="margin:0 0 24px;text-align:center;color:#8190a3;font-size:12px;line-height:1.6;">
                Please join a few minutes before your scheduled time.
              </p>
              <p style="margin:0;color:#43556d;font-size:13px;line-height:1.8;">
                Need assistance or want to make changes? Simply reply to this email.
              </p>
              <p style="margin:18px 0 0;color:#26364d;font-size:13px;line-height:1.7;">
                Best regards,<br>
                <strong>XP Technologies Team</strong>
              </p>
            </td>
          </tr>
          <tr>
            <td align="center" bgcolor="#071b34" style="background-color:#071b34;padding:20px 24px;">
              <p style="margin:0 0 6px;color:#b7cadf;font-size:12px;">
                Technology. Innovation. Business Growth.
              </p>
              <p style="margin:0;color:#819ab6;font-size:11px;">
                © ${new Date().getFullYear()} XP Technologies. All rights reserved.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;
};