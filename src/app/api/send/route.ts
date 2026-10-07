import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Pulls your secret API key safely from your local .env.local file or your Vercel cloud variables dashboard
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, phone, sector, message } = await request.json();

    // 🌟 SAFEGUARD: Validate that all required payload inputs exist before trying to process them
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing critical input values.' }, { status: 400 });
    }

    const safeSector = sector ? sector.toUpperCase() : 'GENERAL';

    const { data, error } = await resend.emails.send({
      from: 'ePrime Inquiries <support@eprimecorp.com>', // 🌟 FIXED: Standardized valid sender string label format structure
      to: 'support@eprimecorp.com',
      subject: `New Corporate Query: ${safeSector} Division`, // 🌟 FIXED: Crash safeguard configuration
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
          <div style="background-color: #0f172a; color: white; padding: 20px; text-align: center;">
            <h2 style="margin: 0; font-size: 18px; font-weight: 800; letter-spacing: 0.5px;">ePrime Corporation Registry Entry</h2>
          </div>
          <div style="padding: 24px; background-color: #ffffff;">
            <table style="width: 100%; border-collapse: collapse;">
              <thead>
                <tr style="border-bottom: 2px solid #e2e8f0;">
                  <th style="padding: 10px; text-align: left; font-size: 11px; text-transform: uppercase; color: #94a3b8; font-weight: 700;">Corporate Data Field</th>
                  <th style="padding: 10px; text-align: left; font-size: 11px; text-transform: uppercase; color: #94a3b8; font-weight: 700;">Client Input Details</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 12px 10px; font-size: 13px; font-weight: bold; color: #475569;">Full Name / Account Entity</td>
                  <td style="padding: 12px 10px; font-size: 13px; color: #0f172a;">${name}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 12px 10px; font-size: 13px; font-weight: bold; color: #475569;">Official Email Contact</td>
                  <td style="padding: 12px 10px; font-size: 13px; color: #2563eb; font-weight: 600;">${email}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 12px 10px; font-size: 13px; font-weight: bold; color: #475569;">Phone Mobile Channel</td>
                  <td style="padding: 12px 10px; font-size: 13px; color: #0f172a;">${phone || 'Not Provided'}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 12px 10px; font-size: 13px; font-weight: bold; color: #475569;">Target Corporate Sector</td>
                  <td style="padding: 12px 10px; font-size: 13px; color: #16a34a; font-weight: bold; text-transform: uppercase;">${safeSector} Division</td>
                </tr>
                <tr>
                  <td style="padding: 12px 10px; font-size: 13px; font-weight: bold; color: #475569; vertical-align: top;">Project Scope Narrative</td>
                  <td style="padding: 12px 10px; font-size: 13px; color: #334155; line-height: 1.5; font-style: italic;">${message}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style="background-color: #f8fafc; padding: 12px; text-align: center; border-top: 1px solid #e2e8f0; font-size: 11px; color: #64748b;">
            Securely compiled via ePrime Next.js Enterprise Application Framework
          </div>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Server integration crash fallback' }, { status: 500 });
  }
}
