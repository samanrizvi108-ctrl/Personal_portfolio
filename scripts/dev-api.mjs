// Local dev API server
// Runs alongside `npm run dev` to test the contact form
// Usage: node scripts/dev-api.mjs

import { createServer } from 'node:http'
import { readFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

// Load .env.local
try {
  const envPath = resolve(root, '.env.local')
  const envText = readFileSync(envPath, 'utf8')
  for (const line of envText.split('\n')) {
    const m = line.match(/^([A-Z0-9_]+)\s*=\s*(.+)$/i)
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].trim()
  }
} catch {}

const PORT = process.env.DEV_API_PORT || 3004

// Load the Vercel-style handler
const apiModule = await import(resolve(root, 'api/contact.js'))
const handler = apiModule.default

const server = createServer(async (req, res) => {
  // CORS preflight
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  if (req.method === 'OPTIONS') {
    res.writeHead(204)
    return res.end()
  }

  let body = ''
  req.on('data', (c) => (body += c))
  req.on('end', async () => {
    // Vercel's req object has body as a string; our handler parses it
    const fakeReq = Object.assign(req, { body })
    let status = 200
    let payload = null
    let headers = {}
    const fakeRes = {
      setHeader: (k, v) => (headers[k.toLowerCase()] = v),
      getHeader: (k) => headers[k.toLowerCase()],
      status: (c) => { status = c; return fakeRes },
      json: (p) => { payload = p },
      end: () => {},
    }
    try {
      await handler(fakeReq, fakeRes)
    } catch (err) {
      console.error('Handler error:', err)
      res.writeHead(500, { 'Content-Type': 'application/json' })
      return res.end(JSON.stringify({ error: 'Internal error' }))
    }
    res.writeHead(status, { 'Content-Type': 'application/json', ...headers })
    res.end(JSON.stringify(payload))
  })
})

server.listen(PORT, () => {
  console.log(`✓ Dev API server: http://localhost:${PORT}/contact`)
  console.log(`  Use VITE_CONTACT_ENDPOINT=http://localhost:${PORT}/contact in .env.local`)
})
