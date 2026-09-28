import { ribSidedHooklifts } from './rib-sided-hooklifts'
import { rolledSidedHooklifts } from './rolled-sided-hooklifts'
import type { ProductDetail } from './types'

export type { ProductDetail }

/**
 * Only slugs listed here have a detail page on disk. Anything added must have a
 * matching entry in `content/products/products.ts`, otherwise the sitemap would
 * contain a URL that 404s.
 */

export const productDetails: Record<string, ProductDetail> = {
  'rib-sided-hooklifts': ribSidedHooklifts,
  'rolled-sided-hooklifts': rolledSidedHooklifts,
}
