import { Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-[#2b4c9e] to-black py-24 px-4">
      <div className="container mx-auto text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative border-4 border-white bg-black px-12 py-16 max-w-3xl">
            <div className="text-8xl font-bold text-white mb-4">
              BB
            </div>
            <div className="text-4xl font-light tracking-[0.3em] text-white mb-2">
              BINFAB BINS
            </div>
            <div className="text-xl tracking-[0.2em] text-white mt-4">
              WASTE BIN MANUFACTURERS
            </div>
          </div>
        </div>

        <div className="mt-12">
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#2b4c9e] transition-colors text-lg px-8 py-6 rounded-full"
            asChild
          >
            <a href="tel:0478598242" className="flex items-center gap-3">
              <Phone className="h-5 w-5" />
              0478 598 242
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
