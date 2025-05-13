'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, MessageCircle, Phone } from 'lucide-react'

export default function CallToAction() {
  const ctaRef = useRef(null)
  const isInView = useInView(ctaRef, { once: true, amount: 0.5 })

  return (
    <section className="overflow-hidden bg-white py-20" ref={ctaRef}>
      <div className="container mx-auto">
        <motion.div
          className="from-primary relative mx-auto max-w-4xl overflow-hidden rounded-3xl bg-gradient-to-r to-blue-600 p-12 text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {/* Animated background elements */}
          <motion.div
            className="absolute top-0 right-0 -z-10 h-64 w-64 rounded-full bg-white/10"
            animate={{
              x: [0, 30, 0],
              y: [0, 50, 0],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 12,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute bottom-0 left-0 -z-10 h-40 w-40 rounded-full bg-white/5"
            animate={{
              x: [0, 40, 0],
              y: [0, -30, 0],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 10,
              ease: 'easeInOut',
            }}
          />

          <div className="relative z-10 space-y-8 text-center">
            <motion.h2
              className="text-4xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Ready to transform your business?
            </motion.h2>
            <motion.p
              className="mx-auto max-w-2xl text-xl text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Contact us today to discuss your IT needs and discover how we can
              help you achieve your business goals.
            </motion.p>
            <motion.div
              className="flex flex-col justify-center gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="text-primary bg-white hover:bg-white/90"
              >
                Contact an Expert <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/20"
              >
                <Phone className="mr-2 h-4 w-4" /> Schedule a Call
              </Button>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-muted-foreground">
            Have questions? Our team is here to help you every step of the way.
          </p>
          <div className="mt-4 flex items-center justify-center">
            <MessageCircle className="text-primary mr-2 h-5 w-5" />
            <span className="text-primary font-medium">
              support@digitspot.com
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
