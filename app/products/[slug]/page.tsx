import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Check, Phone } from 'lucide-react'
import { products } from '@/content/products/products'
import { productDetails } from '@/content/products/details'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return Object.keys(productDetails).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const detail = productDetails[slug]
  if (!detail) return {}

  return {
    title: `${detail.title} - Binfab Bins`,
    description: detail.description,
  }
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params
  const detail = productDetails[slug]
  const product = products.find((p) => p.slug === slug)

  if (!detail || !product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#2b4c9e] text-white py-16 px-4">
        <div className="container mx-auto">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Link>
          <h1 className="text-5xl font-bold mb-4">{detail.title}</h1>
          <p className="text-xl text-yellow-400 font-semibold">{detail.subtitle}</p>
        </div>
      </div>

      {/* Photo Gallery */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {detail.images.map((img, i) => (
              <div key={i} className="relative h-72 md:h-80 bg-white rounded-lg overflow-hidden shadow-md">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Description + Key Benefits */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-6">About This Product</h2>
              <p className="text-gray-700 text-lg leading-relaxed">{detail.description}</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Key Benefits</h2>
              <ul className="space-y-3">
                {detail.keyBenefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-[#2b4c9e] mt-0.5 shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Dimensions Table */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-2">Models & Dimensions</h2>
          <p className="text-gray-500 mb-8">
            *All dimensions are in millimetres ({detail.dimensions.unit}) unless otherwise stated.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#2b4c9e] text-white">
                  {detail.dimensions.headers.map((header) => (
                    <th key={header} className="px-6 py-4 text-left font-semibold">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {detail.dimensions.rows.map((row, i) => (
                  <tr
                    key={row.code}
                    className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                  >
                    <td className="px-6 py-3 font-semibold text-[#2b4c9e]">{row.code}</td>
                    <td className="px-6 py-3">{row.capacity}</td>
                    <td className="px-6 py-3">{row.length}</td>
                    <td className="px-6 py-3">{row.width}</td>
                    <td className="px-6 py-3">{row.height}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-8">Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {detail.specifications.map((spec) => (
              <div
                key={spec.label}
                className="flex justify-between items-start bg-white rounded-lg p-4 shadow-sm"
              >
                <span className="font-semibold text-[#2b4c9e]">{spec.label}</span>
                <span className="text-gray-700 text-right ml-4">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Options */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-8">Available Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {detail.options.map((option, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <Check className="h-5 w-5 text-[#2b4c9e] mt-0.5 shrink-0" />
                <span className="text-gray-700">{option}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#2b4c9e] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in {detail.title}?</h2>
          <p className="text-gray-300 text-lg mb-8">
            Get in touch with our team for pricing, lead times, and custom requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0478598242"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#2b4c9e] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg font-medium"
            >
              <Phone className="h-5 w-5" />
              Call 0478 598 242
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-[#2b4c9e] transition-colors text-lg font-medium"
            >
              Send an Enquiry
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
