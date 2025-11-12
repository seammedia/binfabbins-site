'use client'

import Link from 'next/link'
import { Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact Us', href: '/contact' },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[#1a2847] border-gray-700">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="text-2xl font-bold text-white">
              BB
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-white hover:text-gray-300 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <Button
          variant="outline"
          size="sm"
          className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1a2847] transition-colors"
          asChild
        >
          <a href="tel:0478598242" className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            0478 598 242
          </a>
        </Button>
      </nav>
    </header>
  )
}
