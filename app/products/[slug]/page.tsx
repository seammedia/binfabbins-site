import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, Check, Phone } from 'lucide-react'
import { products } from '@/content/products/products'
import { productDetails } from '@/content/products/details'
import type { ProductDetail } from '@/content/products/details'
import { JsonLd } from '@/components/JsonLd'
import { QuoteForm } from '@/components/QuoteForm'
import { SITE_URL, productUrl } from '@/lib/site'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return Object.keys(productDetails).map((slug) => ({ slug }))
}

function metaTitle(detail: ProductDetail) {
  return detail.hero?.metaTitle ?? `${detail.title} - Binfab Bins`
}

function metaDescription(detail: ProductDetail) {
  return detail.hero?.metaDescription ?? detail.description
}

/**
 * Product schema for the bin range. Only values that appear as visible copy on
 * the page are included — no prices, no capacities or certifications that the
 * client has not approved.
 */
function productSchema(detail: ProductDetail) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: detail.title,
    description: detail.description,
    image: detail.images.map((image) => `${SITE_URL}${image.src}`),
    brand: { '@type': 'Brand', name: 'Binfab Bins' },
    manufacturer: {
      '@type': 'Organization',
      name: 'Binfab Bins',
      url: SITE_URL,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '11-13 Powers Rd',
        addressLocality: 'Seven Hills',
        addressRegion: 'NSW',
        addressCountry: 'AU',
      },
    },
    material: 'Australian sourced steel',
    additionalProperty: detail.specifications.map((spec) => ({
      '@type': 'PropertyValue',
      name: spec.label,
      value: spec.value,
    })),
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const detail = productDetails[slug]
  if (!detail) return {}

  const canonical = productUrl(slug)

  return {
    title: metaTitle(detail),
    description: metaDescription(detail),
    alternates: { canonical },
    openGraph: {
      title: metaTitle(detail),
      description: metaDescription(detail),
      url: canonical,
      type: 'website',
      locale: 'en_AU',
    },
  }
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params
  const detail = productDetails[slug]
  const product = products.find((p) => p.slug === slug)

  if (!detail || !product) {
    notFound()
  }

  const hero = detail.hero
  const quoteHref = hero ? '#enquiry' : '/contact'

  return (
    <div className="min-h-screen bg-gray-50">
      <JsonLd data={productSchema(detail)} />

      {/* Hero: range positioning, query phrasing and the quote route sit together above the fold */}
      <section className="bg-[#2b4c9e] text-white py-8 sm:py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-5 lg:gap-10">
            <div className="order-1 lg:col-span-3 lg:row-start-1">
              <Link
                href="/products"
                className="inline-flex min-h-[44px] items-center gap-2 text-blue-100 hover:text-white mb-4 transition-colors text-sm"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Products
              </Link>

              {hero ? (
                <>
                  {hero.eyebrow && (
                    <p className="mb-3 text-xs sm:text-sm font-semibold uppercase tracking-wide text-yellow-400">
                      {hero.eyebrow}
                    </p>
                  )}
                  <h1 className="text-4xl sm:text-5xl font-bold mb-4">{hero.heading}</h1>
                  <p className="text-lg leading-relaxed text-blue-50 max-w-2xl">{hero.summary}</p>
                  <dl className="mt-5 mb-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {hero.highlights.map((highlight) => (
                      <div key={highlight.label} className="rounded-lg bg-white/10 px-3 py-2">
                        <dt className="text-xs text-blue-100">{highlight.label}</dt>
                        <dd className="text-base font-bold text-yellow-400">{highlight.value}</dd>
                      </div>
                    ))}
                  </dl>
                </>
              ) : (
                <>
                  <h1 className="text-4xl sm:text-5xl font-bold mb-4">{detail.title}</h1>
                  <p className="text-xl text-yellow-400 font-semibold">{detail.subtitle}</p>
                </>
              )}

              <div className="flex flex-wrap gap-3">
                <a
                  href={quoteHref}
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-yellow-500 px-6 py-3 text-base font-semibold text-[#2b4c9e] transition-colors hover:bg-yellow-400"
                >
                  Get a quote
                </a>
                <a
                  href="tel:0478598242"
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 whitespace-nowrap rounded-lg border-2 border-white px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-white hover:text-[#2b4c9e]"
                >
                  <Phone className="h-5 w-5" />
                  Call 0478 598 242
                </a>
              </div>
            </div>

            {hero && detail.rangeOverview && (
              <div className="order-2 lg:order-3 lg:col-span-5 lg:row-start-2">
                <h2 className="text-2xl sm:text-3xl font-bold">{detail.rangeOverview.heading}</h2>
                <p className="mt-2 mb-5 max-w-3xl text-blue-50">{detail.rangeOverview.intro}</p>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  {detail.rangeOverview.cards.map((card) => (
                    <div
                      key={card.title}
                      className="flex flex-col rounded-lg bg-white p-5 text-gray-900 shadow-md"
                    >
                      <h3 className="text-lg font-bold text-[#2b4c9e]">{card.title}</h3>
                      <p className="mt-2 mb-4 flex-1 text-sm leading-relaxed text-gray-700">
                        {card.body}
                      </p>
                      <Link
                        href={card.href}
                        className="inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-[#2b4c9e] hover:underline"
                      >
                        {card.cta}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {hero && (
              <div id="enquiry" className="order-3 scroll-mt-24 lg:order-2 lg:col-span-2 lg:col-start-4 lg:row-start-1">
                <QuoteForm />
              </div>
            )}
          </div>
        </div>
      </section>

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
      <section id="models" className="scroll-mt-24 py-12 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-2">{detail.title} - Models & Dimensions</h2>
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
          <p className="mt-8">
            <a
              href={quoteHref}
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-[#2b4c9e] px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-[#3558ae]"
            >
              Get a quote on these sizes
            </a>
          </p>
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

      {/* Bin type comparison */}
      {detail.comparison && (
        <section className="py-12 px-4 bg-gray-50">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold mb-4">{detail.comparison.heading}</h2>
            <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mb-8">
              {detail.comparison.intro}
            </p>
            <div className="overflow-x-auto rounded-lg bg-white shadow-sm">
              <table className="w-full min-w-[720px] border-collapse">
                <thead>
                  <tr className="bg-[#2b4c9e] text-white">
                    <th className="px-5 py-4 text-left font-semibold">Compare</th>
                    {detail.comparison.columns.map((column) => (
                      <th key={column} className="px-5 py-4 text-left font-semibold">
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {detail.comparison.rows.map((row, i) => (
                    <tr key={row.label} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <th
                        scope="row"
                        className="px-5 py-4 text-left align-top font-semibold text-[#2b4c9e]"
                      >
                        {row.label}
                      </th>
                      {row.values.map((value, j) => (
                        <td key={j} className="px-5 py-4 align-top text-gray-700">
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {detail.comparison.note && (
              <p className="mt-4 text-sm text-gray-600">{detail.comparison.note}</p>
            )}
          </div>
        </section>
      )}

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
              href={quoteHref}
              className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-[#2b4c9e] transition-colors text-lg font-medium"
            >
              {hero ? 'Request a Quote' : 'Send an Enquiry'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
