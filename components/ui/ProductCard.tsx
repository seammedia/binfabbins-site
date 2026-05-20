import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import type { Product } from '@/content/products/products'
import { productDetails } from '@/content/products/details'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const hasDetailPage = product.slug in productDetails

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
      <CardHeader className="p-0">
        <div className="relative h-64 w-full bg-gray-100">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain p-4"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 bg-[#3558ae] text-white">
        <CardTitle className="text-xl mb-3">{product.title}</CardTitle>
        <CardDescription className="text-gray-300 leading-relaxed">
          {product.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="p-6 pt-0 bg-[#3558ae] gap-3">
        {hasDetailPage && (
          <Button
            variant="ghost"
            className="flex-1 text-white bg-yellow-600 hover:bg-yellow-700"
            asChild
          >
            <Link href={`/products/${product.slug}`}>Learn More</Link>
          </Button>
        )}
        <Button
          variant="ghost"
          className="flex-1 text-white hover:bg-gray-700"
          asChild
        >
          <Link href="/contact">Get in touch</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
