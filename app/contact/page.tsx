import type { Metadata } from 'next'
import { ContactForm } from '@/components/ContactForm'
import { Phone, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us - Binfab Bins',
  description: 'Get in touch with Binfab Bins for quality waste bins, competitive pricing and quick supply. Call 0478 598 242 or fill out our contact form.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-[#1a2847] text-white py-16 px-4">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-300">
            Get in touch with our team for all your waste bin requirements
          </p>
        </div>
      </div>

      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-6">Leave us a message</h2>
              <ContactForm />
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#1a2847] text-white p-3 rounded-lg">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Phone</h3>
                    <a
                      href="tel:0478598242"
                      className="text-[#1a2847] hover:underline text-lg"
                    >
                      0478 598 242
                    </a>
                    <p className="text-gray-600 mt-1">
                      Monday - Friday: 7:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#1a2847] text-white p-3 rounded-lg">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Location</h3>
                    <p className="text-gray-700">
                      Serving Australia-wide
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 bg-white rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4">Why Choose Binfab?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-[#1a2847] font-bold mt-1">✓</span>
                    <span>Over 20 years experience in waste bin manufacturing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1a2847] font-bold mt-1">✓</span>
                    <span>Locally sourced and manufactured in Australia</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1a2847] font-bold mt-1">✓</span>
                    <span>Quality products at competitive prices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1a2847] font-bold mt-1">✓</span>
                    <span>Fast turnaround times</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1a2847] font-bold mt-1">✓</span>
                    <span>Custom solutions available</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
