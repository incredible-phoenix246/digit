'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

function useCounter(end: number, duration = 2) {
  const [count, setCount] = useState(0)
  const nodeRef = useRef(null)
  const inView = useInView(nodeRef, { once: true, amount: 0.5 })

  useEffect(() => {
    if (!inView) return

    let startTime: number
    let animationFrame: number

    const startAnimation = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(startAnimation)
      }
    }

    animationFrame = requestAnimationFrame(startAnimation)

    return () => cancelAnimationFrame(animationFrame)
  }, [inView, end, duration])

  return { count, ref: nodeRef }
}

export default function Stats() {
  const years = useCounter(10)
  const projects = useCounter(250)
  const clients = useCounter(100)

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-4xl font-bold" ref={years.ref}>
              {years.count}+
            </p>
            <p className="text-muted-foreground">Years of experience</p>
          </motion.div>
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-4xl font-bold" ref={projects.ref}>
              {projects.count}+
            </p>
            <p className="text-muted-foreground">Projects completed</p>
          </motion.div>
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-4xl font-bold" ref={clients.ref}>
              {clients.count}+
            </p>
            <p className="text-muted-foreground">Satisfied clients</p>
          </motion.div>
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.p
              className="text-4xl font-bold"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              24/7
            </motion.p>
            <p className="text-muted-foreground">Support available</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
