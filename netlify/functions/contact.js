// Netlify serverless function: /.netlify/functions/contact
// Sends a contact-form email via Resend.
// Same logic as /api/contact.js — pick whichever platform you deploy to.

import { Resend } from 'resend'

const apiKey = process.env.RESEND_API_KEY
const toEmail = process.env.CONTACT_TO_EMAIL || 'hello@samanrizvi.com'
const fromEmail = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev'

let _client = null
function client() {
  if (!_client) _client = new Resend(apiKey)
  return _client
}

export async function handler(event) {
  // CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers: corsHeaders(),
      body: '',
    }
  }
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: corsHeaders(),
      body: JSON.stringify({ error: 'Method not allowed' }),
    }
  }

  if (!apiKey) {
    return {
      statusCode: 500,
      headers: corsHeaders(),
      body: JSON.stringify({ error: 'Resend API key not configured' }),
    }
  }

  let body
  try {
    body = JSON.parse(event.body || '{}')
  } catch {
    body = {}
  }
  const { name, email, message } = body || {}

  if (!name || !email || !message) {
    return {
      statusCode: 400,
      headers: corsHeaders(),
      body: JSON.stringify({ error: 'Missing required fields' }),
    }
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return {
      statusCode: 400,
      headers: corsHeaders(),
      body: JSON.stringify({ error: 'Invalid email' }),
    }
  }
  if (message.length > 5000) {
    return {
      statusCode: 400,
      headers: corsHeaders(),
      body: JSON.stringify({ error: 'Message too long' }),
    }
  }
  // Honeypot
  if (body.company) {
    return { statusCode: 200, headers: corsHeaders(), body: JSON.stringify({ ok: true, skipped: true }) }
  }

  const subject = `New contact from ${name} — samanrizvi.com`
  const html = renderEmail({ name, email, message })
  const text = `From: ${name} <${email}>\n\n${message}`

  try {
    const { data, error } = await client().emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject,
      html,
      text,
    })

    if (error) {
      console.error('Resend error:', error)
      return {
        statusCode: 502,
        headers: corsHeaders(),
        body: JSON.stringify({ error: 'Failed to send email' }),
      }
    }

    return {
      statusCode: 200,
      headers: corsHeaders(),
      body: JSON.stringify({ ok: true, id: data.id }),
    }
  } catch (err) {
    console.error('Contact handler error:', err)
    return {
      statusCode: 500,
      headers: corsHeaders(),
      body: JSON.stringify({ error: 'Internal error' }),
    }
  }
}

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
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
