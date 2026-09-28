export interface ProductHighlight {
  value: string
  label: string
}

/**
 * Landing-page hero for a product detail page. Optional: a product without a
 * hero keeps the plain title/subtitle header.
 */
export interface ProductHero {
  /** Page title, excluding the "- Binfab Bins" suffix. */
  metaTitle: string
  metaDescription: string
  heading: string
  eyebrow?: string
  summary: string
  highlights: ProductHighlight[]
}

export interface RangeOverviewCard {
  title: string
  body: string
  href: string
  cta: string
}

/** Range overview shown between the hero and the specification content. */
export interface RangeOverview {
  heading: string
  intro: string
  cards: RangeOverviewCard[]
}

export interface ComparisonRow {
  label: string
  values: string[]
}

/** Comparison of the bin types buyers ask about, e.g. hook lift vs marrel. */
export interface ComparisonBlock {
  heading: string
  intro: string
  columns: string[]
  rows: ComparisonRow[]
  note?: string
}

export interface DimensionRow {
  code: string
  capacity: string
  length: string
  width: string
  height: string
}

export interface ProductDetail {
  slug: string
  title: string
  subtitle: string
  description: string
  images: { src: string; alt: string }[]
  keyBenefits: string[]
  dimensions: {
    headers: string[]
    unit: string
    rows: DimensionRow[]
  }
  specifications: { label: string; value: string }[]
  options: string[]
  hero?: ProductHero
  rangeOverview?: RangeOverview
  comparison?: ComparisonBlock
}
