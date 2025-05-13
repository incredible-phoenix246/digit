'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle, Award, Clock, Users, Shield } from 'lucide-react'
import BlurImage from '../mis/blur-image'

const reasons = [
  {
    icon: <Clock className="text-primary h-6 w-6" />,
    title: 'Over 10 years of industry experience',
    delay: 0.1,
  },
  {
    icon: <Users className="text-primary h-6 w-6" />,
    title: 'Strong partnerships with leading OEMs',
    delay: 0.2,
  },
  {
    icon: <Shield className="text-primary h-6 w-6" />,
    title: 'Tailored solutions for your unique needs',
    delay: 0.3,
  },
  {
    icon: <Award className="text-primary h-6 w-6" />,
    title: 'Committed to exceeding expectations',
    delay: 0.4,
  },
  {
    icon: <CheckCircle className="text-primary h-6 w-6" />,
    title: 'Proven track record of successful transformations',
    delay: 0.5,
  },
]

export default function AboutWhyChooseUs() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  return (
    <section
      className="overflow-hidden bg-[#f7f9fc] px-4 py-20 max-md:px-2"
      ref={sectionRef}
    >
      <div className="container mx-auto">
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
              <h2 className="mb-4 text-4xl font-bold">Why Choose Digitspot?</h2>
              <p className="text-muted-foreground text-lg">
                With over a decade of experience and strong partnerships with
                Original Equipment Manufacturers (OEMs), we provide tailored
                solutions backed by the best in the industry.
              </p>
            </div>

            <div className="space-y-6 pt-4">
              {reasons.map((reason, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm"
                  initial={{ opacity: 0, x: -30 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
                  }
                  transition={{ duration: 0.5, delay: reason.delay }}
                  whileHover={{
                    x: 5,
                    boxShadow:
                      '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className="bg-primary/10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full">
                    {reason.icon}
                  </div>
                  <p className="font-medium">{reason.title}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              className="bg-primary absolute -top-10 -left-10 z-10 h-20 w-20 rounded-lg opacity-20"
              initial={{ scale: 0, rotate: -20 }}
              animate={
                isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -20 }
              }
              transition={{ duration: 0.5, delay: 0.3 }}
            />

            <motion.div
              className="absolute -right-10 -bottom-10 z-10 h-20 w-20 rounded-full bg-blue-500 opacity-20"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            />

            <div className="relative h-[500px] overflow-hidden rounded-2xl shadow-2xl">
              <div className="from-primary/30 absolute inset-0 z-10 bg-gradient-to-tr to-transparent" />
              <BlurImage
                src="/new_flash2.webp?height=500&width=600"
                alt="Why Choose Us"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating badge */}
            <motion.div
              className="absolute top-10 right-10 z-20 rounded-xl bg-white p-4 shadow-lg"
              initial={{ scale: 0, opacity: 0 }}
              animate={
                isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
              }
              transition={{ duration: 0.5, delay: 0.7 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex items-center gap-3">
                <Award className="text-primary h-6 w-6" />
                <p className="text-primary font-bold">10+ Years</p>
              </div>
              <p className="text-muted-foreground mt-1 text-sm">
                Of excellence
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
