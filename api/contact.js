// Vercel serverless function: /api/contact
// Sends a contact-form email via Resend.
//
// Env vars required (set in your host's dashboard, NOT committed):
//   RESEND_API_KEY       — your Resend API key (from resend.com/api-keys)
//   CONTACT_TO_EMAIL     — destination address (e.g. hello@yourdomain.com)
//   CONTACT_FROM_EMAIL   — verified sender in Resend (e.g. "Name" <hello@yourdomain.com>)

export default async function handler(req, res) {
  // CORS — let the site POST from any origin in dev; tighten in prod
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(204).end()
  }
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const apiKey = process.env.RESEND_API_KEY
  const toEmail = process.env.CONTACT_TO_EMAIL || 'hello@samanrizvi.com'
  const fromEmail = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev'

  if (!apiKey) {
    return res.status(500).json({ error: 'Resend API key not configured' })
  }

  // Parse body (Vercel auto-parses JSON; Netlify passes the raw string)
  let body = req.body
  if (typeof body === 'string') {
    try { body = JSON.parse(body) } catch { body = {} }
  }
  const { name, email, message } = body || {}

  // Light validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' })
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email' })
  }
  if (message.length > 5000) {
    return res.status(400).json({ error: 'Message too long' })
  }

  // Honeypot spam trap — form has a hidden "company" field; if filled, silently 200
  if (body.company) {
    return res.status(200).json({ ok: true, skipped: true })
  }

  const subject = `New contact from ${name} — samanrizvi.com`
  const html = renderEmail({ name, email, message })
  const text = `From: ${name} <${email}>\n\n${message}`

  try {
    const resp = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject,
        html,
        text,
      }),
    })

    if (!resp.ok) {
      const err = await resp.text()
      console.error('Resend error:', err)
      return res.status(502).json({ error: 'Failed to send email' })
    }

    const data = await resp.json()
    return res.status(200).json({ ok: true, id: data.id })
  } catch (err) {
    console.error('Contact handler error:', err)
    return res.status(500).json({ error: 'Internal error' })
  }
}

function renderEmail({ name, email, message }) {
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]))
  return `
<!doctype html>
<html>
  <body style="margin:0;padding:0;background:#0a0506;font-family:-apple-system,BlinkMacSystemFont,'Helvetica Neue',Arial,sans-serif;color:#f6f1ea;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0506;padding:32px 16px;">
      <tr>
        <td align="center">
          <table width="520" cellpadding="0" cellspacing="0" style="background:#15100e;border:1px solid rgba(255,255,255,0.08);border-radius:16px;padding:32px;max-width:520px;">
            <tr>
              <td>
                <div style="font-size:11px;letter-spacing:2.5px;text-transform:uppercase;color:#c14a4f;margin-bottom:8px;">
                  New contact
                </div>
                <h1 style="margin:0 0 20px;font-size:24px;font-weight:600;line-height:1.2;color:#f6f1ea;">
                  Message from ${esc(name)}
                </h1>
                <div style="font-size:13px;color:rgba(246,241,234,0.6);margin-bottom:24px;">
                  Reply directly to <a href="mailto:${esc(email)}" style="color:#e89a9e;">${esc(email)}</a>
                </div>
                <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:18px 20px;font-size:14px;line-height:1.6;color:rgba(246,241,234,0.85);white-space:pre-wrap;word-wrap:break-word;">${esc(message)}</div>
                <div style="margin-top:24px;padding-top:20px;border-top:1px solid rgba(255,255,255,0.08);font-size:11px;color:rgba(246,241,234,0.4);">
                  Sent from the contact form at samanrizvi.com
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`
}
