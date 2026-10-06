'use client'

import { useRouter } from 'next/navigation'
import { useState, type FormEvent } from 'react'
import { CONTACT_SUBMISSION_STORAGE_KEY } from '@/lib/contact'

export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mzzybwpw'

/**
 * Submit a form to Formspree in the background and go to /thank-you only after
 * Formspree confirms it received the enquiry.
 *
 * Why (7 Oct 2026): the forms used to rely on Formspree's `_next` redirect to reach
 * /thank-you, where the Google Ads enquiry conversion fires. Formspree's custom
 * redirect is a paid-plan feature ("Available on: Personal, Professional, Business
 * plans"), so on the free plan visitors land on Formspree's own page and the
 * conversion never fires. Background (AJAX) submission works on every plan, and the
 * conversion now depends on Formspree's own acceptance, not on a redirect.
 *
 * The form keeps its native action/method, so it still posts if JavaScript fails.
 */
export function useFormspreeSubmit() {
  const router = useRouter()
  const [status, setStatus] = useState<'idle' | 'sending' | 'error'>('idle')

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (status === 'sending') return
    const form = event.currentTarget
    setStatus('sending')
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })
      const result = (await response.json().catch(() => ({}))) as { ok?: boolean }
      if (!response.ok || result.ok === false) throw new Error(`Formspree ${response.status}`)
      try {
        // Marks a real, accepted submission; /thank-you fires the Ads conversion only then.
        window.sessionStorage.setItem(CONTACT_SUBMISSION_STORAGE_KEY, String(Date.now()))
      } catch {
        // Storage can be blocked; the enquiry itself has still been delivered.
      }
      router.push('/thank-you')
    } catch {
      setStatus('error')
    }
  }

  return { onSubmit, sending: status === 'sending', failed: status === 'error' }
}
