'use client'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

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

const AwsHeader = () => {
  const headerRef = useRef(null)
  const isInView = useInView(headerRef, { once: true, amount: 0.2 })
  return (
    <div className="container mx-auto" ref={headerRef}>
      <motion.div
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={staggerContainer}
        className="mx-auto mb-16 max-w-3xl space-y-6 text-center"
      >
        <motion.div
          variants={fadeIn}
          className="text-primary border-primary/20 bg-primary/5 inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold"
        >
          AWS SELECT TIER PARTNER
        </motion.div>
        <motion.h1
          variants={fadeIn}
          className="text-4xl font-bold tracking-tight sm:text-5xl"
        >
          AWS Cloud Solutions
        </motion.h1>
        <motion.p variants={fadeIn} className="text-muted-foreground text-lg">
          Accelerate your business growth and digital transformation with our
          expert AWS cloud services and solutions.
        </motion.p>
      </motion.div>
    </div>
  )
}

export default AwsHeader
