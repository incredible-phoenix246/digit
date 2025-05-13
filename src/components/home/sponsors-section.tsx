'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const LogoCarousel = () => {
  const logos = [
    { src: '/new-cisco.png', alt: 'Cisco' },
    { src: '/new-fortinet.png', alt: 'Fortinet' },
    { src: '/new-aws.png', alt: 'AWS' },
    { src: '/new-hp.png', alt: 'HP' },
    { src: '/new-huawei.jpg', alt: 'Huawei' },
    { src: '/new-sophos.png', alt: 'Sophos' },
    { src: '/new-noname.jpg', alt: 'NoName' },
    { src: '/new-prtg.png', alt: 'PRTG' },
    { src: '/new-hycu.jpeg', alt: 'HYCU' },
    { src: '/new-tenable.png', alt: 'Tenable' },
    { src: '/new-symantec.png', alt: 'Symantec' },
    { src: '/new-lenovo.png', alt: 'Lenovo' },
    { src: '/new-trend.png', alt: 'Trend Micro' },
    { src: '/new-ubiquiti.png', alt: 'Ubiquiti' },
    { src: '/new-solarwind.png', alt: 'SolarWinds' },
    { src: '/new-mikrotik.png', alt: 'MikroTik' },
    { src: '/new-veeam.png', alt: 'Veeam' },
  ]
  const allLogos = [...logos, ...logos]
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const [, setContainerWidth] = useState(0)
  const [scrollWidth, setScrollWidth] = useState(0)

  useEffect(() => {
    if (!containerRef.current || !innerRef.current) return

    setContainerWidth(containerRef.current.offsetWidth)
    setScrollWidth(innerRef.current.scrollWidth / 2)

    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth)
      }
      if (innerRef.current) {
        setScrollWidth(innerRef.current.scrollWidth / 2)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const animationDuration = logos.length * 5

  return (
    <div className="w-full overflow-hidden bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-center text-2xl font-bold text-gray-800">
          Our Partners
        </h2>

        <div
          ref={containerRef}
          className="relative w-full overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            ref={innerRef}
            className="flex items-center"
            style={{
              width: `${scrollWidth * 2}px`,
              animation: isHovered
                ? 'none'
                : `scroll ${animationDuration}s linear infinite`,
              transform: isHovered ? 'translateX(0)' : undefined,
            }}
          >
            {allLogos.map((logo, index) => (
              <div
                key={`${logo.alt}-${index}`}
                className="mx-8 flex h-16 items-center justify-center"
                style={{ minWidth: '120px' }}
              >
                <div className="relative h-12 w-[120px]">
                  <Image
                    src={logo.src || '/placeholder.svg'}
                    alt={`${logo.alt} logo`}
                    fill
                    sizes="120px"
                    className="object-contain"
                    priority={index < 10}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${scrollWidth}px);
          }
        }
      `}</style>
    </div>
  )
}

export default LogoCarousel
