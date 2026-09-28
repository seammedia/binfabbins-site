import { MetadataRoute } from 'next'
import { productDetails } from '@/content/products/details'
import { SITE_URL, productUrl } from '@/lib/site'

/**
 * Every URL here must be a page that exists on disk. `productDetails` keys are
 * the only product slugs with a detail page, so the product entries are derived
 * from that record rather than from the full product list — the rest of the
 * range has no `/products/<slug>` page yet and would 404.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/products`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...Object.keys(productDetails).map((slug) => ({
      url: productUrl(slug),
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    {
      url: `${SITE_URL}/about`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/legal/privacy`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
