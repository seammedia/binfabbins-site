import { Card, CardContent } from '@/components/ui/card'
import type { Testimonial } from '@/content/testimonials'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="h-full border-2">
      <CardContent className="p-6 flex flex-col h-full">
        <p className="text-gray-700 mb-4 flex-grow italic">
          &quot;{testimonial.content}&quot;
        </p>
        <p className="font-bold text-lg text-gray-900">
          {testimonial.name}
        </p>
      </CardContent>
    </Card>
  )
}
