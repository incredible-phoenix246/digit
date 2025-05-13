'use client'

import { Card } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import BlurImage from '../mis/blur-image'

export default function Testimonials() {
  const testimonialsRef = useRef(null)
  const testimonialsInView = useInView(testimonialsRef, {
    once: true,
    amount: 0.3,
  })

  return (
    <section className="border-t border-b py-16" ref={testimonialsRef}>
      <div className="container mx-auto">
        <div className="mx-auto max-w-3xl">
          <motion.div
            className="mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={
              testimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold">Client Testimonial</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={
              testimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.7, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <Card className="rounded-lg bg-white p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <motion.div
                  className="bg-primary/10 h-12 w-12 flex-shrink-0 overflow-hidden rounded-full"
                  initial={{ scale: 0 }}
                  animate={
                    testimonialsInView
                      ? { scale: 1, rotate: 0 }
                      : { scale: 0, rotate: -90 }
                  }
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <BlurImage
                    src="/avatar.png?height=48&width=48"
                    alt="Client"
                    width={48}
                    height={48}
                  />
                </motion.div>
                <div>
                  <motion.p
                    className="text-muted-foreground mb-4 italic"
                    initial={{ opacity: 0 }}
                    animate={
                      testimonialsInView ? { opacity: 1 } : { opacity: 0 }
                    }
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    &ldquo;Digitspot transformed our IT infrastructure
                    completely. Their team was professional, responsive, and
                    delivered exactly what we needed. We&apos;ve seen
                    significant improvements in efficiency since implementing
                    their solutions.&rdquo;
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={
                      testimonialsInView ? { opacity: 1 } : { opacity: 0 }
                    }
                    transition={{ duration: 0.5, delay: 0.9 }}
                  >
                    <p className="font-semibold">John Smith</p>
                    <p className="text-muted-foreground text-sm">
                      CTO, Example Company
                    </p>
                  </motion.div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
