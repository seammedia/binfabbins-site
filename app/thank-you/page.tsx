import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Thank You - Binfab Bins',
  description: 'Thank you for contacting Binfab Bins. We will get back to you shortly.',
}

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
      <div className="max-w-md w-full text-center">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex justify-center mb-6">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>

          <h1 className="text-3xl font-bold mb-4">Thank You!</h1>

          <p className="text-gray-600 mb-6">
            Your message has been successfully sent. We&apos;ll get back to you as soon as possible.
          </p>

          <div className="space-y-4">
            <p className="text-sm text-gray-500">
              Need immediate assistance?<br />
              Call us at <a href="tel:0478598242" className="text-[#1a2847] font-semibold hover:underline">0478 598 242</a>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-[#1a2847] hover:bg-[#2d3748] text-white">
                <Link href="/">Return Home</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/products">View Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
