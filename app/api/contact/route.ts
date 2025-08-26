// This is the final, branded version of your backend API route.
// File location: /app/api/contact/route.ts

import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.EMAIL_TO;
const logoUrl = `${process.env.NEXT_PUBLIC_WEBSITE_URL}/Domus-logo.png`; // Construct the full logo URL

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    // --- Validation (no changes) ---
    if (!name || !email || !message) {
      return NextResponse.json({ message: 'All fields are required.' }, { status: 400 });
    }
    if (!toEmail) {
      console.error('EMAIL_TO environment variable is not set.');
      return NextResponse.json({ message: 'Server configuration error.' }, { status: 500 });
    }

    // --- Send the Branded Email ---
    const { data, error } = await resend.emails.send({
      from: 'Domus Contact Form <onboarding@resend.dev>',
      to: [toEmail],
      replyTo: email,
      subject: `New Website Enquiry | Domus Residential`,

      // --- NEW, BRANDED HTML TEMPLATE ---
      html: `
        <div style="background-color: #f4f4f4; padding: 20px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #e2e8f0;">
            
            <!-- Header with Logo -->
            <div style="background-color: #1a202c; padding: 20px; text-align: center;">
              <img src="${logoUrl}" alt="Domus Residential Logo" style="max-width: 150px; height: auto;">
            </div>

            <!-- Main Content -->
            <div style="padding: 30px; color: #4a5568; line-height: 1.7;">
              <h1 style="color: #2d3748; font-size: 24px; margin-top: 0;">
                New Website Enquiry
              </h1>
              <p>You have received a new message submitted via the contact form on your website.</p>
              
              <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 30px 0;">

              <!-- Sender's Details Table -->
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
                <tr>
                  <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #e2e8f0; width: 120px;">Sender Name:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #e2e8f0;">Sender Email:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;"><a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a></td>
                </tr>
              </table>

              <!-- Message Box -->
              <div style="background-color: #f7fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 20px;">
                <h3 style="margin-top: 0; color: #2d3748;">Message Content:</h3>
                <p style="margin: 0; color: #4a5568;">${message.replace(/\n/g, '<br>')}</p>
              </div>
            </div>

            <!-- Footer -->
            <div style="background-color: #edf2f7; padding: 20px; text-align: center; font-size: 12px; color: #718096;">
              <p>&copy; ${new Date().getFullYear()} Domus Residential. All rights reserved.</p>
            </div>
          </div>
        </div>
      `,
    });

    // --- Error Handling and Success (no changes) ---
    if (error) {
      console.error({ error });
      return NextResponse.json({ message: 'Error sending email.' }, { status: 400 });
    }
    return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 });

  } catch (exception) {
    console.error(exception);
    return NextResponse.json({ message: 'An unexpected server error occurred.' }, { status: 500 });
  }
}