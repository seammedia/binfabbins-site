export const ribSidedHooklifts = {
  slug: 'rib-sided-hooklifts',
  title: 'Rib Sided Hooklift Bins',
  subtitle: 'Australian Made, Heavy Duty, Reinforced Bins',
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
}

export type ProductDetail = typeof ribSidedHooklifts
