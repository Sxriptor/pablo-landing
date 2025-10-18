import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { company_name, email, contact_person } = body.record;

    // Create SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const adminEmails = [
      process.env.USER_ADMIN1,
      process.env.USER_ADMIN2,
    ].filter(Boolean);

    // Email content
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">New Partner Application Submitted</h2>
        <p>A new partner application is waiting for your review.</p>

        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <p><strong>Company Name:</strong> ${company_name}</p>
          <p><strong>Contact Person:</strong> ${contact_person}</p>
          <p><strong>Email:</strong> ${email}</p>
        </div>

        <p>Please log in to the admin dashboard to review this application.</p>
      </div>
    `;

    // Send email to both admins
    // Authenticate with no-reply but send from partner alias
    await transporter.sendMail({
      from: `"PlayCircle Partners" <${process.env.SMTP_ALIAS_PARTNER}>`,
      to: adminEmails.join(', '),
      subject: `New Partner Application from ${company_name}`,
      html: emailHtml,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error sending partner application email:', error);
    return NextResponse.json(
      { error: 'Failed to send notification' },
      { status: 500 }
    );
  }
}
