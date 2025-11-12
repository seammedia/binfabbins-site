export interface Testimonial {
  id: string
  name: string
  content: string
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Warren',
    content: 'Have been working with Dave and the team for over two years. Whether it\'s repairs or new bins the Binfab team always produce quality and their service is excellent. Highly recommend.'
  },
  {
    id: '2',
    name: 'Kevin',
    content: 'Great service, great quality. We have had no issues with the bins we have purchased and will certainly use Binfab when we need more. If you want quality at a good price call the guys at Binfab.'
  },
  {
    id: '3',
    name: 'Phillip',
    content: 'The team at Binfab have been repairing my old bins and supplying me new ones for the past two years. Great service, always upfront with timeframes and stick to what they say. Quality is awesome. Absolutely recommend the guys at Binfab.'
  }
]
