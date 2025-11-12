export interface Product {
  id: string
  slug: string
  title: string
  description: string
  image: string
  category: string
}

export const products: Product[] = [
  {
    id: '1',
    slug: 'rib-sided-hooklifts',
    title: 'Rib Sided Hooklifts',
    description: 'To view more information, click here. If you would like any further information on this product, please get in touch.',
    image: '/images/products/rib-sided-hooklifts.png',
    category: 'hooklift'
  },
  {
    id: '2',
    slug: 'rolled-sided-hooklifts',
    title: 'Rolled Sided Hooklifts',
    description: 'To view more information, click here. If you would like any further information on this product, please get in touch.',
    image: '/images/products/rolled-sided-hooklifts.png',
    category: 'hooklift'
  },
  {
    id: '3',
    slug: 'marrell-bins',
    title: 'Marrell Bins',
    description: 'If you would like any further information on this product, please get in touch.',
    image: '/images/products/marrell-bins.png',
    category: 'marrell'
  },
  {
    id: '4',
    slug: 'forklift-bins',
    title: 'Forklift Bins',
    description: 'If you would like any further information on this product, please get in touch.',
    image: '/images/products/forklift-bins.png',
    category: 'forklift'
  },
  {
    id: '5',
    slug: 'tipping-bins',
    title: 'Tipping Bins',
    description: 'If you would like any further information on this product, please get in touch.',
    image: '/images/products/tipping-bins.png',
    category: 'tipping'
  },
  {
    id: '6',
    slug: 'rear-lift-bins',
    title: 'Rear Lift Bins',
    description: 'If you would like any further information on this product, please get in touch.',
    image: '/images/products/rear-lift-bins.png',
    category: 'rear-lift'
  },
  {
    id: '7',
    slug: 'frontlift-bins',
    title: 'Frontlift Bins',
    description: 'If you would like any further information on this product, please get in touch.',
    image: '/images/products/frontlift-bins.png',
    category: 'frontlift'
  },
  {
    id: '8',
    slug: 'mgb-plastic-bins',
    title: 'MGB Plastic Bins',
    description: 'If you would like any further information on this product, please get in touch.',
    image: '/images/products/mgb-plastic-bins.png',
    category: 'plastic'
  },
  {
    id: '9',
    slug: 'crane-bins',
    title: 'Crane Bins',
    description: 'If you would like any further information on this product, please get in touch.',
    image: '/images/products/crane-bins.png',
    category: 'crane'
  }
]
