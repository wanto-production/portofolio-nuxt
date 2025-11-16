import { useContactTemplate } from "~/composables/contactTemplate"

export default defineEventHandler(async (event) => {
  try {
    // readBody() sudah return object, langsung destructure saja
    const { name, email, subject, message } = await readBody(event) as {
      name: string,
      email: string,
      subject: string,
      message: string
    }

    const resend = useResend();
    const emailHtml = useContactTemplate()

    // Kirim email ke penerima (Anda)
    await resend.emails.send({
      from: `${name} <onboarding@resend.dev>`,
      to: 'ikwansatria3974@gmail.com',
      subject: `Pesan Baru: ${subject}`,
      html: emailHtml.renderContactEmail({ email, name, subject, message }),
    });

    return { success: true };
  } catch (err) {
    console.log(err)
    return { success: false, error: 'Failed to send email. Please try again.' };
  }
})
