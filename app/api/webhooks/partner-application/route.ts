import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Force this route to use Node.js runtime instead of Edge runtime
// This is required for nodemailer to work properly
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  console.log('[Webhook] Received request');

  try {
    const body = await request.json();
    console.log('[Webhook] Parsed body:', JSON.stringify(body, null, 2));

    const { company_name, email, contact_person } = body.record;
    console.log('[Webhook] Extracted data:', { company_name, email, contact_person });

    // Validate environment variables
    const requiredEnvVars = {
      SMTP_HOST: process.env.SMTP_HOST,
      SMTP_PORT: process.env.SMTP_PORT,
      SMTP_USER: process.env.SMTP_USER,
      SMTP_PASS: process.env.SMTP_PASS ? '***' : undefined,
      SMTP_ALIAS_PARTNER: process.env.SMTP_ALIAS_PARTNER,
      USER_ADMIN1: process.env.USER_ADMIN1,
      USER_ADMIN2: process.env.USER_ADMIN2,
    };
    console.log('[Webhook] Environment variables:', requiredEnvVars);

    const missingEnvVars = Object.entries(requiredEnvVars)
      .filter(([key, value]) => !value && key !== 'SMTP_PASS')
      .map(([key]) => key);

    if (missingEnvVars.length > 0) {
      console.error('[Webhook] Missing environment variables:', missingEnvVars);
      return NextResponse.json(
        { error: 'Missing environment variables', missing: missingEnvVars },
        { status: 500 }
      );
    }

    // Create SMTP transporter
    console.log('[Webhook] Creating SMTP transporter...');
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
    console.log('[Webhook] Transporter created');

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

    <p>
      Please log in to the admin dashboard to review this application:<br />
      <a href="https://panel.playcircleapp.com" target="_blank" rel="noopener noreferrer" style="color: #007bff; text-decoration: none;">
        panel.playcircleapp.com
      </a>
    </p>
  </div>
`;


    // Send email to both admins
    // Authenticate with no-reply but send from partner alias
    console.log('[Webhook] Sending email to:', adminEmails.join(', '));
    const info = await transporter.sendMail({
      from: `"PlayCircle Partners" <${process.env.SMTP_ALIAS_PARTNER}>`,
      to: adminEmails.join(', '),
      subject: `New Partner Application from ${company_name}`,
      html: emailHtml,
    });

    console.log('[Webhook] Email sent successfully:', info.messageId);
    return NextResponse.json({ success: true, messageId: info.messageId }, { status: 200 });
  } catch (error: any) {
    console.error('[Webhook] Error occurred:', {
      message: error.message,
      code: error.code,
      command: error.command,
      stack: error.stack,
    });
    return NextResponse.json(
      {
        error: 'Failed to send notification',
        details: error.message,
        code: error.code
      },
      { status: 500 }
    );
  }
}
