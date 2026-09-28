/**
 * Canonical origin for the site.
 *
 * The apex (`binfabbins.com.au`) 307s to `www` in `vercel.json`, so the apex is
 * never the URL a page is actually served from. Canonical tags, sitemap entries,
 * robots.txt and structured-data URLs must all use the host that serves the
 * response — pointing them at the apex makes every sitemap URL a redirect.
 */
export const SITE_URL = 'https://www.binfabbins.com.au'

export const productPath = (slug: string) => `/products/${slug}`

export const productUrl = (slug: string) => `${SITE_URL}${productPath(slug)}`
