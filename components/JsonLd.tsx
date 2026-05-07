export interface LocalBusinessSchema {
  '@context': string
  '@type': string
  name: string
  description: string
  url: string
  telephone: string
  email?: string
  address?: {
    '@type': string
    streetAddress?: string
    addressLocality?: string
    addressRegion?: string
    addressCountry: string
  }
  areaServed: string
  priceRange?: string
}

interface JsonLdProps {
  data: LocalBusinessSchema | Record<string, unknown>
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export const localBusinessSchema: LocalBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Binfab Bins',
  description: 'Quality waste bin manufacturers serving Australia. Specializing in hooklift bins, marrell bins, forklift bins and more. Over 20 years experience.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://binfabbins.com.au',
  telephone: '+61478598242',
  email: 'mark@binfab.net',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '11-13 Powers Rd',
    addressLocality: 'Seven Hills',
    addressRegion: 'NSW',
    addressCountry: 'AU',
  },
  areaServed: 'Australia',
  priceRange: '$$',
}
