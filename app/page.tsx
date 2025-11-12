// Updated: 2025-11-12
import { Hero } from '@/components/layout/Hero'
import { ProductCard } from '@/components/ui/ProductCard'
import { TestimonialCard } from '@/components/ui/TestimonialCard'
import { products } from '@/content/products/products'
import { testimonials } from '@/content/testimonials'
import { Button } from '@/components/ui/button'
import { JsonLd, localBusinessSchema } from '@/components/JsonLd'
import Link from 'next/link'

export default function HomePage() {
  // Show first 6 products on home page
  const featuredProducts = products.slice(0, 6)

  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <Hero />

      {/* Products Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              High-quality waste bins designed and manufactured in Australia for the waste management industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-[#1a2847] hover:bg-[#2d3748] text-white">
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Customer Reviews</h2>
            <p className="text-gray-600">See what our customers have to say about us</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 px-4 bg-black text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-6">About Us</h2>
          </div>

          <div className="space-y-6 text-gray-300">
            <p>
              Binfab Pty Ltd takes pride in being a manufacturer of large, robust, strong steel waste bins.
            </p>
            <p>
              We concentrate on supplying quality hooklift and marrell bins into the Waste Industry as well as
              producing smaller varieties of bins when required.
            </p>
            <p className="text-xl font-semibold text-white">
              Strong, reliable and Australian made.
            </p>

            <div className="mt-8">
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
