import type { Metadata } from 'next'
import { TestimonialCard } from '@/components/ui/TestimonialCard'
import { testimonials } from '@/content/testimonials'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'About Us - Binfab Bins',
  description: 'Learn about Binfab Bins, a quality waste bin manufacturer with over 20 years experience. Locally sourced and manufactured in Australia.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-[#2b4c9e] text-white py-16 px-4">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
        </div>
      </div>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8 text-lg leading-relaxed">
            <p>
              Binfab Pty Ltd takes pride in being a manufacturer of large, robust, strong steel waste bins.
            </p>

            <p>
              We concentrate on supplying quality hooklift and marrell bins into the Waste Industry as well as
              producing smaller varieties of bins when required.
            </p>

            <div className="bg-gray-50 p-8 rounded-lg my-8">
              <h2 className="text-2xl font-bold mb-4">Our Range Includes:</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <li className="flex items-center gap-2">
                  <span className="text-[#2b4c9e] font-bold">•</span>
                  HOOKLIFT BINS
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#2b4c9e] font-bold">•</span>
                  MARRELL BINS
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#2b4c9e] font-bold">•</span>
                  CRANE BINS
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#2b4c9e] font-bold">•</span>
                  FORKLIFT BINS
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#2b4c9e] font-bold">•</span>
                  TIPPLER BINS
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#2b4c9e] font-bold">•</span>
                  REAR LIFT BINS
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#2b4c9e] font-bold">•</span>
                  FRONTLIFT BINS
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#2b4c9e] font-bold">•</span>
                  MGB PLASTIC BINS
                </li>
              </ul>
            </div>

            <div className="bg-black text-white p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Our Experience</h2>
              <p className="mb-4">
                Our staff have over 20 years experience in the manufacture and supply of industrial waste bins which
                enables us to offer the quality and excellence that our customers expect.
              </p>
              <p className="mb-4">
                Locally sourced and manufactured our quality and leadtimes have become major factors for our current
                clientele and with no affiliation or ownership by larger waste companies we can solely focus on what
                our customers require and offer the best value for money in the industry.
              </p>
              <p className="text-2xl font-bold mt-6">
                Strong, reliable and Australian made.
              </p>
            </div>

            <div className="text-center mt-8">
              <p className="text-xl mb-6">
                If you require quality waste bins, competitive pricing and quick supply please contact us at Binfab.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-[#2b4c9e] hover:bg-[#3558ae]">
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="tel:0478598242">Call 0478 598 242</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Customer Reviews</h2>
            <p className="text-gray-600">See what our customers have to say about us</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
