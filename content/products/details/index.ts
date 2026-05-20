import { ribSidedHooklifts } from './rib-sided-hooklifts'
import type { ProductDetail } from './rib-sided-hooklifts'

export type { ProductDetail }

export const productDetails: Record<string, ProductDetail> = {
  'rib-sided-hooklifts': ribSidedHooklifts,
}
