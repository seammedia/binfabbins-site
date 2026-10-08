import { createHmac, timingSafeEqual } from 'node:crypto'

// Spam guard: the form fetches a signed timestamp when the page loads and sends it back
// with the enquiry. Bots that post straight to /api/enquiry (the spam after Formspree
// was removed) never have one, and anything sent within seconds of loading is a script.
const MIN_AGE_MS = 2_000
const MAX_AGE_MS = 24 * 60 * 60 * 1000

const sign = (issuedAt: string, secret: string) =>
  createHmac('sha256', secret).update(`binfab-enquiry:${issuedAt}`).digest('base64url')

export function issueEnquiryToken(secret: string) {
  const issuedAt = Date.now().toString(36)
  return `${issuedAt}.${sign(issuedAt, secret)}`
}

export function checkEnquiryToken(token: unknown, secret: string): 'ok' | 'invalid' | 'too-fast' {
  if (typeof token !== 'string') return 'invalid'
  const [issuedAt, signature = ''] = token.split('.')
  const expected = Buffer.from(sign(issuedAt, secret))
  const given = Buffer.from(signature)
  if (given.length !== expected.length || !timingSafeEqual(given, expected)) return 'invalid'
  const age = Date.now() - parseInt(issuedAt, 36)
  if (!(age <= MAX_AGE_MS)) return 'invalid'
  return age < MIN_AGE_MS ? 'too-fast' : 'ok'
}
