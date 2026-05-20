import type { Metadata } from 'next'
import { ProductCard } from '@/components/ui/ProductCard'
import { products } from '@/content/products/products'

export const metadata: Metadata = {
  title: 'Our Products - Binfab Bins',
  description: 'Browse our full range of waste bins including hooklift bins, marrell bins, forklift bins, tipping bins, rear lift bins, frontlift bins, MGB plastic bins, and crane bins.',
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#2b4c9e] text-white py-16 px-4">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Explore our comprehensive range of quality waste bins, manufactured in Australia
            to meet the highest standards in the waste management industry.
          </p>
        </div>
      </div>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Need a Custom Solution?</h2>
          <p className="text-gray-600 text-lg mb-8">
            We can design and manufacture custom waste bins to meet your specific requirements.
            Get in touch with our team to discuss your needs.
          </p>
          <a
            href="tel:0478598242"
            className="inline-block bg-[#2b4c9e] text-white px-8 py-4 rounded-lg hover:bg-[#3558ae] transition-colors text-lg font-medium"
          >
            Call 0478 598 242
          </a>
        </div>
      </section>
    </div>
  )
}
