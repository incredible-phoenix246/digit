'use client'
import React, { useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import BlurImage from '../mis/blur-image'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const images = ['/image1.jpg', '/image2.jpg', '/image3.jpg']

const HeroCarosuel = () => {
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
              {/* Semi-transparent overlay */}
              <div className="absolute inset-0 bg-black/20" />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={scrollPrev}
        className="absolute top-1/2 left-4 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute top-1/2 right-4 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute right-0 bottom-0 left-0 flex flex-col items-center">
        <div className="mb-4 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={cn(
                'h-2 w-2 cursor-pointer rounded-full transition-all duration-300',
                index === selectedIndex
                  ? 'bg-white'
                  : 'bg-white/50 hover:bg-white/75'
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="mx-auto w-full max-w-2xl rounded-t-xl bg-white p-6 text-center">
          <h2 className="mb-3 text-xl font-semibold text-gray-900 md:text-2xl">
            Customer Centric
          </h2>
          <p className="mb-4 text-sm text-gray-600 md:text-base">
            We are a technology company with specialization in business
            application automation, protection assurance, IT risk and compliance
            services, and intelligent solutions deployment
          </p>
          <Button
            variant="default"
            className="w-full border border-[#003B5C] bg-transparent text-[#002b43] hover:border-[#002b43] hover:bg-transparent"
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  )
}

export default HeroCarosuel
