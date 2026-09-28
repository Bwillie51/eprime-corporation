import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Get a free key by opening a dashboard account at resend.com
const resend = new Resend(process.env.RESEND_API_KEY || 're_your_free_key');

export async function POST(request: Request) {
  try {
    const { name, email, phone, sector, message } = await request.json();

    const data = await resend.emails.send({
      from: '<onboarding@resend.dev>',
      to: 'brian.w.willie@gmail.com', // Your target email
      subject: `New Corporate Query: ${sector.toUpperCase()} Division`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
          <div style="background-color: #0f172a; color: white; padding: 20px; text-align: center;">
            <h2 style="margin: 0; font-size: 18px; font-weight: 800; letter-spacing: 0.5px;">ePrime Corporation Registry Entry</h2>
          </div>
          <div style="padding: 24px; background-color: #ffffff;">
            <table style="width: 100%; border-collapse: collapse;">
              <thead>
                <tr style="border-b: 2px solid #e2e8f0;">
                  <th style="padding: 10px; text-align: left; font-size: 11px; text-transform: uppercase; color: #94a3b8; font-weight: 700;">Corporate Data Field</th>
                  <th style="padding: 10px; text-align: left; font-size: 11px; text-transform: uppercase; color: #94a3b8; font-weight: 700;">Client Input Details</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-b: 1px solid #f1f5f9;">
                  <td style="padding: 12px 10px; font-size: 13px; font-weight: bold; color: #475569;">Full Name / Account Entity</td>
                  <td style="padding: 12px 10px; font-size: 13px; color: #0f172a;">${name}</td>
                </tr>
                <tr style="border-b: 1px solid #f1f5f9;">
                  <td style="padding: 12px 10px; font-size: 13px; font-weight: bold; color: #475569;">Official Email Contact</td>
                  <td style="padding: 12px 10px; font-size: 13px; color: #2563eb; font-weight: 600;">${email}</td>
                </tr>
                <tr style="border-b: 1px solid #f1f5f9;">
                  <td style="padding: 12px 10px; font-size: 13px; font-weight: bold; color: #475569;">Phone Mobile Channel</td>
                  <td style="padding: 12px 10px; font-size: 13px; color: #0f172a;">${phone || 'Not Provided'}</td>
                </tr>
                <tr style="border-b: 1px solid #f1f5f9;">
                  <td style="padding: 12px 10px; font-size: 13px; font-weight: bold; color: #475569;">Target Corporate Sector</td>
                  <td style="padding: 12px 10px; font-size: 13px; color: #16a34a; font-weight: bold; text-transform: uppercase;">${sector} Division</td>
                </tr>
                <tr>
                  <td style="padding: 12px 10px; font-size: 13px; font-weight: bold; color: #475569; vertical-align: top;">Project Scope Narrative</td>
                  <td style="padding: 12px 10px; font-size: 13px; color: #334155; line-height: 1.5; font-style: italic;">${message}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style="background-color: #f8fafc; padding: 12px; text-align: center; border-t: 1px solid #e2e8f0; font-size: 11px; color: #64748b;">
            Securely compiled via ePrime Next.js Enterprise Application Framework
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error: 'Server integration crash fallback' }, { status: 500 });
  }
}
