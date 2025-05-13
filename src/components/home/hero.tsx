'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import BlurImage from '../mis/blur-image'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

export default function Hero() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 })

  return (
    <div className="flex flex-col">
      <main className="flex-1">
        <section className="relative flex w-full bg-white" ref={heroRef}>
          <div className="container mx-auto flex items-center justify-center gap-8 max-md:flex-col">
            <motion.div
              className="w-1/2 space-y-6 max-md:w-full"
              initial="hidden"
              animate={heroInView ? 'visible' : 'hidden'}
              variants={staggerContainer}
            >
              <motion.div
                variants={fadeIn}
                className="focus:ring-ring inline-flex items-center rounded-full border border-transparent bg-[#1E90FF] px-2.5 py-0.5 text-xs font-semibold text-white transition-colors hover:bg-[#1E90FF]/80 focus:ring-2 focus:ring-offset-2 focus:outline-none"
              >
                IT Solutions Provider
              </motion.div>
              <motion.h1
                variants={fadeIn}
                className="text-4xl font-bold tracking-tight md:text-5xl"
              >
                Transform Your Business with{' '}
                <span className="text-primary">Reliable and Innovative</span> IT
                Solutions
              </motion.h1>
              <motion.p
                variants={fadeIn}
                className="text-muted-foreground text-lg"
              >
                As an AWS Select Tier Partner, we help businesses accelerate
                growth, reduce costs, and achieve digital transformation.
              </motion.p>
              <motion.div
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="font-semibold">
                  Contact an expert
                </Button>
              </motion.div>
            </motion.div>
            <motion.div
              className="relative h-[600px] overflow-hidden rounded-lg max-md:h-fit"
              initial={{ opacity: 0, x: 50 }}
              animate={
                heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
              }
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <BlurImage
                src="/aws-partner-advanced logo.png"
                alt="IT Solutions"
                width={1325}
                height={1325}
                className="max-w-[600px] object-cover max-md:max-w-[320px]"
                priority
              />
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}
