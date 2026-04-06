'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(formData: FormData) {
  const firstName = formData.get('firstName') as string;
  const lastName = formData.get('lastName') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const service = formData.get('service') as string;
  const details = formData.get('details') as string;

  if (!firstName || !email || !phone || !service) {
    return { error: 'Required fields are missing.' };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Lilli Palmer <onboarding@resend.dev>', // You can update this to your verified domain later
      to: ['lillipalmer.ae@gmail.com'],
      subject: `New Lead: ${firstName} ${lastName} - ${service}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px; border-radius: 5px;">
          <h2 style="color: #333; border-bottom: 1px solid #eee; padding-bottom: 10px;">New Website Enquiry</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Service Requested:</strong> ${service}</p>
          <div style="margin-top: 20px; padding: 15px; background: #f9f9f9; border-radius: 5px;">
            <p><strong>Project Details:</strong></p>
            <p>${details}</p>
          </div>
          <p style="font-size: 10px; color: #999; margin-top: 30px; text-align: center;">Sent from Lilli Palmer Website Contact Form</p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return { error: 'Failed to send enquiry. Please try again later.' };
    }

    return { success: true };
  } catch (err) {
    console.error('Submission Error:', err);
    return { error: 'An unexpected error occurred.' };
  }
}
