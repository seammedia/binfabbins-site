'use client'

import Link from 'next/link'
import { ENQUIRY_ENDPOINT, useEnquirySubmit } from '@/lib/enquiry'

const fieldClass =
  'flex h-12 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-base text-gray-900 placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2b4c9e] focus-visible:ring-offset-1'
const labelClass = 'block text-sm font-semibold text-gray-800 mb-1.5'

/**
 * On-page quote form for product landing pages.
 *
 * Posts to the same /api/enquiry route as the main contact form, in the
 * background, and goes to /thank-you once the enquiry is delivered, so the Google
 * Ads enquiry conversion there counts these leads too (see lib/enquiry.ts).
 */
export function QuoteForm() {
  const { onSubmit, sending, failed } = useEnquirySubmit()

  return (
    <form
      action={ENQUIRY_ENDPOINT}
      method="POST"
      onSubmit={onSubmit}
      className="rounded-xl bg-white p-5 sm:p-6 shadow-lg text-gray-900 space-y-4 text-left"
    >
      <div>
        <h2 className="text-2xl font-bold text-[#2b4c9e]">Get a quote</h2>
        <p className="mt-1 text-sm text-gray-600">
          Tell us the bin size and quantity you need. We reply with pricing, lead time and
          delivery.
        </p>
      </div>
      <input type="hidden" name="form" value="Hook lift bins quote" />
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ display: 'none' }}
      />

      <div>
        <label htmlFor="quote-name" className={labelClass}>
          Name <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          id="quote-name"
          name="name"
          required
          autoComplete="name"
          placeholder="Your name"
          className={fieldClass}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="quote-phone" className={labelClass}>
            Phone <span className="text-red-600">*</span>
          </label>
          <input
            type="tel"
            id="quote-phone"
            name="phone"
            required
            autoComplete="tel"
            inputMode="tel"
            placeholder="0400 000 000"
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="quote-email" className={labelClass}>
            Email <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            id="quote-email"
            name="email"
            required
            autoComplete="email"
            placeholder="you@company.com.au"
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="quote-message" className={labelClass}>
          What do you need? <span className="text-red-600">*</span>
        </label>
        <textarea
          id="quote-message"
          name="message"
          required
          rows={3}
          placeholder="e.g. 2 x 30 m³ rib sided hook lift bins, delivered to Penrith NSW"
          className={`${fieldClass} h-auto min-h-[96px]`}
        />
      </div>

      {failed && (
        <p role="alert" className="text-sm font-medium text-red-600">
          Sorry, your message didn&apos;t send. Please try again or call us on{' '}
          <a href="tel:0478598242" className="underline">0478 598 242</a>.
        </p>
      )}

      <button
        type="submit"
        disabled={sending}
        className="inline-flex h-12 w-full items-center justify-center rounded-md bg-[#2b4c9e] px-6 text-base font-semibold text-white transition-colors hover:bg-[#3558ae] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2b4c9e] focus-visible:ring-offset-2 disabled:opacity-60"
      >
        {sending ? 'Sending...' : 'Request a quote'}
      </button>

      <p className="text-xs text-gray-500">
        We only use your details to answer this enquiry.
      </p>

      <div className="flex flex-wrap items-center gap-x-5 gap-y-0 text-xs text-gray-600">
        <Link
          href="/legal/privacy"
          className="inline-flex min-h-[44px] items-center underline hover:text-gray-800"
        >
          Privacy policy
        </Link>
        <a
          href="tel:0478598242"
          className="inline-flex min-h-[44px] items-center underline hover:text-gray-800"
        >
          Prefer to talk? Call 0478 598 242
        </a>
      </div>
    </form>
  )
}
