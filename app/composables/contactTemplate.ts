
export function useContactTemplate() {
  const renderContactEmail = ({
    name,
    email,
    subject,
    message,
  }: {
    name: string
    email: string
    subject: string
    message: string
  }): string => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Contact Message</title>
</head>
<body style="background:#f6f9fc; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Ubuntu,sans-serif; line-height:1.6; color:#333; margin:0; padding:0;">
  <div style="max-width:600px; margin:40px auto; background:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 10px 30px rgba(0,0,0,0.08);">
    <!-- Header -->
    <div style="background:linear-gradient(135deg, #6b9cff, #ff6bcb); padding:24px 32px; text-align:center;">
      <h1 style="color:white; margin:0; font-size:24px; font-weight:700; letter-spacing:-0.5px;">
        📧 Pesan Baru dari Portofolio
      </h1>
    </div>

    <!-- Content -->
    <div style="padding:32px;">
      <h2 style="font-size:20px; margin-top:0; color:#1e293b; font-weight:700;">Detail Pesan</h2>

      <p style="margin:12px 0; color:#475569;">
        <strong style="color:#0f172a;">Nama:</strong> ${name}
      </p>

      <p style="margin:12px 0; color:#475569;">
        <strong style="color:#0f172a;">Email:</strong>
        <a href="mailto:${email}" style="color:#6b9cff; text-decoration:underline;">${email}</a>
      </p>

      <p style="margin:12px 0; color:#475569;">
        <strong style="color:#0f172a;">Subjek:</strong> ${subject}
      </p>

      <p style="margin:20px 0 8px; color:#0f172a; font-weight:600;">Pesan:</p>
      <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:16px; font-family:monospace; white-space:pre-wrap; font-size:14px; color:#334155;">
${message.trim()}
      </div>
    </div>

    <!-- Footer -->
    <div style="text-align:center; padding:20px; color:#94a3b8; font-size:12px; border-top:1px solid #f1f5f9; background:#fafafa;">
      Dikirim otomatis dari portofolio Ikhwan Satrio — Frontend Developer
      <br />
      <em>"Code is my canvas, and ambition is my fuel."</em>
    </div>
  </div>
</body>
</html>
    `.trim()
  }

  return {
    renderContactEmail,
  }
}
