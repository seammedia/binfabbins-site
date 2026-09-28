import type { ProductDetail } from './types'

export const ribSidedHooklifts: ProductDetail = {
  slug: 'rib-sided-hooklifts',
  title: 'Rib Sided Hooklift Bins',
  subtitle: 'Australian Made, Heavy Duty, Reinforced Bins',

  /**
   * Landing-page hero. This URL is the final URL of the "hook lift bins"
   * PHRASE-match keyword in Google Ads, so the hero carries the query's
   * phrasing ("hook lift bins") in the H1, the summary and the title tag,
   * while the model content below stays exactly as it was.
   */
  hero: {
    metaTitle: 'Hook Lift Bins | Rib Sided Hooklift Bins - Binfab Bins',
    metaDescription:
      'Australian made hook lift bins. Rib sided hooklift bins in ten models from 8 m³ to 38 m³, Australian steel, engineered to hold 12.5 tonne. Get a quote: 0478 598 242.',
    eyebrow: 'Rib sided hook lift bins · Australian made',
    heading: 'Hook Lift Bins',
    summary:
      'Binfab builds rib sided and rolled sided hook lift bins for construction and demolition, scrap metal, general waste, building material and recycling. Ten rib sided models from 8 m³ to 38 m³, fabricated from locally sourced Australian steel and engineered to hold 12.5 tonne.',
    highlights: [
      { value: '8–38 m³', label: 'Ten rib sided models' },
      { value: '12.5 tonne', label: 'Engineered load' },
      { value: 'AS/NZS 1594', label: 'Australian steel' },
      { value: 'Australia-wide', label: 'Delivery' },
    ],
  },

  rangeOverview: {
    heading: 'Hook lift bins we build',
    intro:
      'Two families of hook lift bin, plus the wider Binfab bin range. Pick the family, then the size — all of it is quoted from our Seven Hills workshop and delivered Australia-wide.',
    cards: [
      {
        title: 'Rib sided hook lift bins',
        body: '8 m³ to 38 m³ in ten models. Reinforced rib sides for construction and demolition, scrap metal and general waste.',
        href: '#models',
        cta: 'See the rib sided sizes',
      },
      {
        title: 'Rolled sided hook lift bins',
        body: 'The same 8 m³ to 38 m³ range with rolled sides, for loads that slide out more easily.',
        href: '/products/rolled-sided-hooklifts',
        cta: 'View rolled sided specs',
      },
      {
        title: 'The rest of the range',
        body: 'Marrell bins, forklift bins, tipping bins, rear lift, frontlift and MGB plastic bins — all built to order.',
        href: '/products',
        cta: 'See the full range',
      },
    ],
  },

  description:
    'Built and manufactured for use in construction and demolition (C&D), scrap metal, general waste, building material and recycling. Can also be used for transportation of smaller plant machinery.',

  images: [
    {
      src: '/images/products/rib-sided-hooklifts/hooklift-green.jpg',
      alt: 'Rib sided hooklift bin in dark green',
    },
    {
      src: '/images/products/rib-sided-hooklifts/hooklift-yellow.jpg',
      alt: 'Rib sided hooklift bin in yellow',
    },
    {
      src: '/images/products/rib-sided-hooklifts/hooklift-green-tall.jpg',
      alt: 'Rib sided hooklift bin in green - tall profile',
    },
  ],
  keyBenefits: [
    'Built with locally sourced Australian steel',
    'Robust, reinforced sides and framing',
    'Engineered to hold 12.5 tonne',
    'Full length chassis rails with middle stiffener reinforcing',
    'Heavy duty door hinges with grease points',
    '60mm curved lifting ring',
    'Side hinged rear door - standard',
    'Ratchet door locking',
    '20mm solid bar side tie down points',
    'Proven design',
    'Australia-wide delivery',
  ],
  dimensions: {
    headers: ['Code', 'Capacity', 'Length (L)', 'Width (W)', 'Height (H)'],
    unit: 'mm',
    rows: [
      { code: 'HK08RB', capacity: '8 m³', length: '6500', width: '2400', height: '850' },
      { code: 'HK10RB', capacity: '10 m³', length: '6500', width: '2400', height: '1000' },
      { code: 'HK12RB', capacity: '12 m³', length: '6500', width: '2400', height: '1150' },
      { code: 'HK15RB', capacity: '15 m³', length: '6500', width: '2400', height: '1350' },
      { code: 'HK20RB', capacity: '20 m³', length: '6500', width: '2400', height: '1750' },
      { code: 'HK25RB', capacity: '25 m³', length: '6500', width: '2400', height: '2150' },
      { code: 'HK30RB', capacity: '30 m³', length: '6500', width: '2400', height: '2500' },
      { code: 'HK32RB', capacity: '32 m³', length: '6500', width: '2400', height: '2650' },
      { code: 'HK35RB', capacity: '35 m³', length: '7200', width: '2400', height: '2650' },
      { code: 'HK38RB', capacity: '38 m³', length: '7200', width: '2400', height: '2800' },
    ],
  },
  specifications: [
    { label: 'Steel Grade Plate', value: 'AS/NZS 1594-HA250' },
    { label: 'Steel Grade Structural', value: 'AS/NZS 3679.1-300, AS1163-C350L0' },
    { label: 'Floor Thickness', value: '5 mm' },
    { label: 'Wall Thickness', value: '4 mm' },
    { label: 'Main Runner', value: '180 PFC' },
    { label: 'A Frame Member', value: '180 PFC' },
    { label: 'Lifting Ring', value: '60 mm' },
    { label: 'Roller', value: 'Ø 165 mm' },
    { label: 'Finish', value: 'Primed and painted with two (2) coats of premium alkyd enamel finish' },
  ],
  options: [
    'Retractable tarps - mesh and waterproof',
    'Internal recessed tie down points for machinery',
    'Two way tailgates',
    'Side signage plates',
    'Hardox 450 steel',
    'Top rails capped - 8mm angle for excavator loading',
    'Rear door stacking cut outs',
    'Lever rear door locking',
    'Custom size and accessories on request',
  ],

  /**
   * Answers the "marrel bin vs hook bin" search term that currently lands on
   * this page. Only claims that are on the page or in the Binfab product range
   * appear here: no crane dimensions, capacities or certifications, because
   * approved crane specifications come from Mark/David.
   */
  comparison: {
    heading: 'Hook lift vs marrel vs crane bins',
    intro:
      'If you are comparing a marrel bin (often spelled marrell) with a hook bin, the loading method is the same: both are hook lift bins, pulled on board by the truck\u2019s own hook hoist. What changes is the bin design and the hoist it is built for. Crane bins are loaded a different way again.',
    columns: ['Hook lift bins (Binfab)', 'Marrel bins', 'Crane bins'],
    rows: [
      {
        label: 'How the bin is loaded',
        values: [
          'The truck\u2019s hook hoist grabs the 60 mm curved lifting ring and pulls the bin on board. No crane needed.',
          'Loaded the same way, by the truck\u2019s hook hoist. Marrel describes the hoist and bin design type, not a different loading method.',
          'Lifted on and off by crane or excavator rather than by the truck\u2019s hook hoist.',
        ],
      },
      {
        label: 'What it suits',
        values: [
          'Construction and demolition, scrap metal, general waste, building material and recycling. Can also carry smaller plant machinery.',
          'The same waste and recycling work, on fleets built around Marrel-type hoists.',
          'Sites and loads where the bin has to be craned rather than hooked.',
        ],
      },
      {
        label: 'Sizes and models',
        values: [
          'Rib sided and rolled sided, 8 m³ to 38 m³ in ten models each.',
          'Ask us for the current marrel bin range and sizes.',
          'Built to order. Ask us for the sizes available rather than assuming a specification.',
        ],
      },
      {
        label: 'How to get a price',
        values: [
          'Send a quote request on this page or call 0478 598 242. We reply with pricing and lead time.',
          'Same process: quote request or call.',
          'Talk to us first. Crane bin specifications are confirmed by our team in writing, not published here.',
        ],
      },
    ],
    note: 'Compatibility depends on the make and model of your hoist or crane. Send those details with your quote request and we will confirm the bin profile and the sizes that suit your fleet.',
  },
}
