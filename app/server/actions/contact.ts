import { useContactTemplate } from "~/composables/contactTemplate"

export default defineFormActions({
  default: async (event) => {
    try {
      const formData = await readFormData(event)
      const { name, email, subject, message } = Object.fromEntries(formData) as {
        name: string,
        email: string,
        subject: string,
        message: string
      }

      const resend = useResend();
      const emailHtml = useContactTemplate()


      //Kirim email ke penerima(Anda)
      await resend.emails.send({
        from: `${name} <onboarding@resend.dev>`,
        to: 'ikwansatria3974@gmail.com',
        subject: `Pesan Baru: ${subject}`,
        html: emailHtml.renderContactEmail({ email, name, subject, message }),
      });

      return actionResponse(event, { success: true });
    } catch (err) {
      console.log(err)
      return actionResponse(event, { success: false, error: 'Failed to send email. Please try again.' });
    }
  }
})
