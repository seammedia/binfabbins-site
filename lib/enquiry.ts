'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState, type FormEvent } from 'react'
import { CONTACT_SUBMISSION_STORAGE_KEY } from '@/lib/contact'
import { readAttribution } from '@/lib/attribution'

export const ENQUIRY_ENDPOINT = '/api/enquiry'

/**
 * Submit an enquiry to this site's /api/enquiry route, which sends it straight to
 * BinFab (mark@binfab.net) through the Seam Media email relay. Only after delivery is
 * confirmed does the visitor go to /thank-you, where the Google Ads enquiry conversion
 * fires. Failures stay on the page with an error, so a failed send is never counted.
 *
 * The form keeps action="/api/enquiry" method="POST", so it still sends (and redirects)
 * if JavaScript fails. Replaced Formspree on 7 Oct 2026. Each submission carries a signed
 * token fetched when the form loads (see lib/enquiry-token.ts), which keeps out bots that
 * post straight to the endpoint.
 */
export function useEnquirySubmit() {
  const router = useRouter()
  const [status, setStatus] = useState<'idle' | 'sending' | 'error'>('idle')
  const token = useRef<{ value: string; at: number } | null>(null)

  async function fetchToken() {
    const response = await fetch(ENQUIRY_ENDPOINT, { cache: 'no-store' })
    const { token: value } = (await response.json()) as { token?: string }
    if (value) token.current = { value, at: Date.now() }
  }

  useEffect(() => {
    fetchToken().catch(() => {})
  }, [])

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (status === 'sending') return
    const form = event.currentTarget
    setStatus('sending')
    try {
      if (!token.current || Date.now() - token.current.at > 20 * 60 * 60 * 1000) await fetchToken()
      // The server ignores enquiries sent within 2 seconds of the token being issued.
      const wait = 2100 - (Date.now() - (token.current?.at ?? 0))
      if (wait > 0) await new Promise((resolve) => setTimeout(resolve, wait))
      const data = Object.fromEntries(new FormData(form)) as Record<string, string>
      const response = await fetch(ENQUIRY_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...data,
          ...readAttribution(),
          page: window.location.pathname,
          _token: token.current?.value,
        }),
      })
      const result = (await response.json().catch(() => ({}))) as { ok?: boolean; filtered?: boolean }
      if (!response.ok || result.ok === false) throw new Error(`Enquiry ${response.status}`)
      if (!result.filtered) {
        try {
          // Marks a real, accepted submission; /thank-you fires the Ads conversion only then.
          window.sessionStorage.setItem(CONTACT_SUBMISSION_STORAGE_KEY, String(Date.now()))
        } catch {
          // Storage can be blocked; the enquiry itself has still been delivered.
        }
      }
      router.push('/thank-you')
    } catch {
      setStatus('error')
    }
  }

  return { onSubmit, sending: status === 'sending', failed: status === 'error' }
}
