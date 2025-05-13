'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, Shield, Zap, CheckCircle, Users } from 'lucide-react'

const values = [
  {
    icon: <Star className="h-8 w-8" />,
    title: 'Customer Excellence',
    description:
      'We put our customers first and strive to exceed their expectations in everything we do.',
    color: 'from-yellow-400 to-orange-500',
    textColor: 'text-yellow-500',
    delay: 0.1,
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'Integrity',
    description:
      'We operate with honesty, transparency, and ethical standards in all our business dealings.',
    color: 'from-blue-400 to-blue-600',
    textColor: 'text-blue-500',
    delay: 0.2,
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: 'Efficiency',
    description:
      'We optimize processes and solutions to deliver maximum value with minimal waste.',
    color: 'from-orange-400 to-red-500',
    textColor: 'text-orange-500',
    delay: 0.3,
  },
  {
    icon: <CheckCircle className="h-8 w-8" />,
    title: 'Accountability',
    description:
      'We take responsibility for our actions and commitments to our clients and partners.',
    color: 'from-green-400 to-green-600',
    textColor: 'text-green-500',
    delay: 0.4,
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: 'Teamwork',
    description:
      'We collaborate effectively, leveraging our diverse skills to achieve common goals.',
    color: 'from-purple-400 to-purple-600',
    textColor: 'text-purple-500',
    delay: 0.5,
  },
]

export default function OurValues() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <section
      className="overflow-hidden bg-gradient-to-b from-[#0a0a1a] to-[#1a1a3a] px-4 py-20 text-white max-md:px-2"
      ref={sectionRef}
    >
      <div className="relative container mx-auto">
        {/* Animated background elements */}
        <motion.div
          className="absolute top-20 left-10 -z-10 h-40 w-40 rounded-full bg-white/5 blur-xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 15,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="bg-primary/10 absolute right-10 bottom-20 -z-10 h-60 w-60 rounded-full blur-xl"
          animate={{
            x: [0, -70, 0],
            y: [0, 50, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 20,
            ease: 'easeInOut',
          }}
        />

        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '3rem' } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-primary mx-auto mb-6 h-1"
          ></motion.div>
          <h2 className="mb-4 text-4xl font-bold">Our Values</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            The principles that guide our actions and define who we are
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.7, delay: value.delay }}
              whileHover={{
                y: -10,
                transition: { duration: 0.2 },
              }}
              className="overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm"
            >
              <div className={`bg-gradient-to-r ${value.color} h-2`}></div>
              <div className="p-8">
                <motion.div
                  className={`mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 ${value.textColor}`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  {value.icon}
                </motion.div>
                <h3 className="mb-4 text-2xl font-semibold">{value.title}</h3>
                <p className="text-white/80">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
