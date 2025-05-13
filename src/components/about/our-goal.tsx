'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, CheckCircle } from 'lucide-react'
import BlurImage from '../mis/blur-image'

export default function OurGoal() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  const goalPoints = [
    'Empower businesses with innovative technology',
    'Deliver mission-critical IT solutions across Africa',
    'Transform complex challenges into seamless solutions',
  ]

  return (
    <section
      className="overflow-hidden bg-white py-20 max-md:px-2"
      ref={sectionRef}
    >
      <div className="relative container mx-auto">
        {/* Decorative elements */}
        <motion.div
          className="bg-primary/5 absolute top-0 right-0 -z-10 h-64 w-64 rounded-full"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        <motion.div
          className="absolute bottom-0 left-0 -z-10 h-40 w-40 rounded-full bg-blue-100"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />

        <div className="grid items-center gap-16 md:grid-cols-2">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: '3rem' } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="bg-primary mb-6 h-1"
              ></motion.div>
              <h2 className="mb-4 text-4xl font-bold">Our Goal</h2>
              <p className="text-muted-foreground text-xl">
                To deliver mission-critical IT solutions across Africa,
                empowering businesses with the technology they need to succeed.
              </p>
            </div>

            <div className="space-y-6">
              {goalPoints.map((point, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -30 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
                  }
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.2 }}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <div className="bg-primary/10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full">
                    <CheckCircle className="text-primary h-6 w-6" />
                  </div>
                  <p className="text-lg font-medium">{point}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-[450px] overflow-hidden rounded-2xl shadow-2xl">
              <div className="from-primary/30 absolute inset-0 z-10 bg-gradient-to-br to-transparent" />
              <BlurImage
                src="/black-woman.jpg?height=450&width=600"
                alt="Our Goal"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating elements */}
            <motion.div
              className="absolute -top-8 -right-8 z-20 rounded-2xl bg-white p-5 shadow-xl"
              initial={{ scale: 0, rotate: -20 }}
              animate={
                isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -20 }
              }
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{
                y: -5,
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                transition: { duration: 0.2 },
              }}
            >
              <Target className="text-primary h-10 w-10" />
            </motion.div>

            <motion.div
              className="from-primary absolute -bottom-6 left-12 z-20 rounded-xl bg-gradient-to-r to-blue-600 p-4 text-white shadow-lg"
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <p className="font-bold">Empowering Africa</p>
              <p className="text-sm text-white/80">Through technology</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
