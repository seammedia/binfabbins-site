import { NextRequest, NextResponse } from 'next/server'

// Website enquiries go straight to BinFab (7 Oct 2026, replacing Formspree). This route
// validates the submission and passes it server to server to the shared Seam Media email
// relay (thesoutheastplumber.com.au/api/binfab-lead), which sends it to mark@binfab.net
// with Reply-To set to the customer. The relay holds the email credentials; this site
// only holds the shared secret BINFAB_FORM_RELAY_SECRET (Vercel, production).
const RELAY_URL = 'https://thesoutheastplumber.com.au/api/binfab-lead'
const FIELDS = ['name', 'email', 'phone', 'message', 'form', 'page',
  'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'gclid', 'gbraid', 'wbraid'] as const

const reply = (status: number, body: object) =>
  NextResponse.json(body, { status, headers: { 'Cache-Control': 'no-store' } })

export async function POST(request: NextRequest) {
  const secret = process.env.BINFAB_FORM_RELAY_SECRET?.trim()
  if (!secret) return reply(503, { ok: false })
  if (Number(request.headers.get('content-length') || 0) > 20000) return reply(413, { ok: false })

  const isJson = (request.headers.get('content-type') || '').includes('application/json')
  let raw: Record<string, unknown>
  try {
    raw = isJson ? await request.json() : Object.fromEntries(await request.formData())
  } catch {
    return reply(400, { ok: false })
  }
  // Honeypot: report success to bots without sending anything.
  if (raw._gotcha) return isJson ? reply(200, { ok: true }) : NextResponse.redirect(new URL('/thank-you', request.url), 303)

  const payload: Record<string, string> = { submitted_at: new Date().toISOString() }
  for (const key of FIELDS) {
    const value = raw[key === 'email' && raw._replyto ? '_replyto' : key]
    if (typeof value === 'string' && value.trim()) payload[key] = value.trim().slice(0, 2000)
  }
  if (!payload.name || !payload.message || !payload.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    return isJson ? reply(400, { ok: false }) : NextResponse.redirect(new URL('/contact?error=1', request.url), 303)
  }

  let delivered = false
  try {
    const relay = await fetch(RELAY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-binfab-form-secret': secret },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(20000),
    })
    const result = (await relay.json().catch(() => ({}))) as { ok?: boolean }
    delivered = relay.ok && result.ok === true
  } catch {
    delivered = false
  }
  console.info('[enquiry]', { form: payload.form, delivered, hasClickId: Boolean(payload.gclid || payload.gbraid || payload.wbraid) })
  if (!isJson) return NextResponse.redirect(new URL(delivered ? '/thank-you' : '/contact?error=1', request.url), 303)
  return delivered ? reply(200, { ok: true }) : reply(502, { ok: false })
}
