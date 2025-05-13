'use client'

import { animatePageIn } from '@/lib/utils'
import { useEffect } from 'react'



const Template = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    animatePageIn()
  }, [])

  return (
    <div>
      <div
        id="banner-1"
        className="fixed top-0 left-0 z-[9999] min-h-[100dvh] w-1/4 bg-neutral-950"
      />

      <div
        id="banner-2"
        className="fixed top-0 left-1/4 z-[9999] flex min-h-[100dvh] w-1/4 items-center justify-end bg-neutral-950 text-3xl font-bold text-white md:text-[10vw] 2xl:text-9xl"
      >
        DIGI
      </div>

      <div
        id="banner-3"
        className="fixed top-0 left-2/4 z-[9999] flex min-h-[100dvh] w-1/4 items-center bg-neutral-950 text-3xl font-bold text-white md:text-[10vw] 2xl:text-9xl"
      >
        TSPOT
      </div>

      <div
        id="banner-4"
        className="fixed top-0 left-3/4 z-[9999] min-h-[100dvh] w-1/4 bg-neutral-950"
      />
      {children}
    </div>
  )
}

export default Template
