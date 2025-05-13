'use client'

import { useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import BlurImage from '../mis/blur-image'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const images = ['/image1.jpg', '/image2.jpg', '/image3.jpg']

const HeroCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 100 })
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', () => {
        setSelectedIndex(emblaApi.selectedScrollSnap())
      })
    }
  }, [emblaApi])

  const scrollPrev = () => emblaApi?.scrollPrev()
  const scrollNext = () => emblaApi?.scrollNext()
  const scrollTo = (index: number) => emblaApi?.scrollTo(index)

  return (
    <div className="relative h-[600px] overflow-hidden md:h-[600px]">
      {/* Carousel */}
      <div ref={emblaRef} className="h-full overflow-hidden">
        <div className="flex h-full">
          {images.map((src, index) => (
            <div key={index} className="relative min-w-0 flex-[0_0_100%]">
              <BlurImage
                src={src || '/placeholder.svg'}
                alt=""
                fill
                className="object-cover"
                priority={index === 0}
              />
              {/* Gradient overlay instead of semi-transparent black */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/60" />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons - Updated with pill shape and better positioning */}
      <div className="absolute top-1/2 right-6 left-6 flex -translate-y-1/2 items-center justify-between">
        <button
          onClick={scrollPrev}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/30"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={scrollNext}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/30"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Content Box - Redesigned with a floating card look */}
      <div className="absolute right-0 bottom-8 left-0 px-4">
        <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl bg-white/90 shadow-lg backdrop-blur-sm">
          <div className="p-6 md:p-8">
            <div className="flex items-center justify-between">
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-gray-900 md:text-2xl">
                  Customer Centric
                </h2>
                <p className="max-w-xl text-sm text-gray-600 md:text-base">
                  We are a technology company with specialization in business
                  application automation, protection assurance, IT risk and
                  compliance services, and intelligent solutions deployment
                </p>
              </div>
              <div className="hidden md:block">
                <Button
                  variant="default"
                  className="rounded-full border-2 border-[#003B5C] bg-transparent px-6 text-[#003B5C] transition-colors hover:bg-[#003B5C] hover:text-white"
                >
                  Get Started
                </Button>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between md:mt-0">
              {/* Indicators - Redesigned as a progress bar */}
              <div className="flex items-center gap-3">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollTo(index)}
                    className={cn(
                      'h-1 rounded-full transition-all duration-300',
                      index === selectedIndex
                        ? 'w-8 bg-[#003B5C]'
                        : 'w-4 bg-gray-300 hover:bg-gray-400'
                    )}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              <div className="md:hidden">
                <Button
                  variant="default"
                  className="rounded-full border-2 border-[#003B5C] bg-transparent px-6 text-[#003B5C] transition-colors hover:bg-[#003B5C] hover:text-white"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroCarousel
