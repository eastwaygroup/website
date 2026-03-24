import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { fullName, email, phone, province, city, projectType, description } = req.body;

  // Basic server-side validation
  if (!fullName || !email || !province || !city || !projectType || !description) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  try {
    await resend.emails.send({
      from: 'EASTWAY Quote Form <onboarding@resend.dev>',
      to: 'projects@eastwaygroup.ca',
      replyTo: email,
      subject: `New Quote Request — ${projectType.charAt(0).toUpperCase() + projectType.slice(1)} Project from ${fullName}`,
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; background: #0D1A13; color: #F5F0E8; padding: 40px; border-radius: 4px;">
          <div style="border-bottom: 2px solid #D0AC6E; padding-bottom: 24px; margin-bottom: 32px;">
            <h1 style="font-family: 'Plus Jakarta Sans', sans-serif; font-size: 28px; font-weight: 900; color: #F5F0E8; margin: 0; letter-spacing: -0.5px;">EASTWAY</h1>
            <p style="color: #D0AC6E; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; margin: 8px 0 0;">New Quote Request</p>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #1C3529; width: 140px;">
                <span style="font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase; color: #5A7A64; font-weight: 700;">Name</span>
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #1C3529; color: #F5F0E8;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #1C3529;">
                <span style="font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase; color: #5A7A64; font-weight: 700;">Email</span>
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #1C3529; color: #F5F0E8;">
                <a href="mailto:${email}" style="color: #D0AC6E; text-decoration: none;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #1C3529;">
                <span style="font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase; color: #5A7A64; font-weight: 700;">Phone</span>
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #1C3529; color: #F5F0E8;">${phone || '—'}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #1C3529;">
                <span style="font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase; color: #5A7A64; font-weight: 700;">Location</span>
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #1C3529; color: #F5F0E8;">${city}, ${province}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #1C3529;">
                <span style="font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase; color: #5A7A64; font-weight: 700;">Project Type</span>
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #1C3529; color: #F5F0E8; text-transform: capitalize;">${projectType}</td>
            </tr>
          </table>

          <div style="margin-top: 32px;">
            <p style="font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase; color: #5A7A64; font-weight: 700; margin-bottom: 12px;">Project Description</p>
            <div style="background: #1C3529; padding: 20px; border-left: 3px solid #D0AC6E; line-height: 1.7; color: #F5F0E8; font-size: 14px;">
              ${description.replace(/\n/g, '<br/>')}
            </div>
          </div>

          <p style="margin-top: 40px; font-size: 11px; color: #5A7A64; text-align: center;">
            Reply directly to this email to respond to ${fullName}.
          </p>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Resend error:', error);
    return res.status(500).json({ error: 'Failed to send email. Please try again.' });
  }
}