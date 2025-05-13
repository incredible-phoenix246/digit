'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Cloud, Server, Network, Cog } from 'lucide-react'

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const services = [
  {
    icon: <Cloud className="h-6 w-6 text-white" />,
    title: 'ICT Consulting',
    description:
      'Strategic technology guidance to optimize your business operations and growth.',
    color: 'bg-gradient-to-br from-blue-500 to-blue-600',
    delay: 0.1,
  },
  {
    icon: <Server className="h-6 w-6 text-white" />,
    title: 'Cloud Computing & AWS Services',
    description:
      'Leverage the power of cloud computing with our AWS expertise and solutions.',
    color: 'bg-gradient-to-br from-purple-500 to-purple-600',
    delay: 0.2,
  },
  {
    icon: <Cog className="h-6 w-6 text-white" />,
    title: 'Business Automation',
    description:
      'Streamline operations and improve efficiency through custom automation solutions.',
    color: 'bg-gradient-to-br from-orange-500 to-orange-600',
    delay: 0.3,
  },
  {
    icon: <Network className="h-6 w-6 text-white" />,
    title: 'Network Solutions',
    description:
      'Comprehensive network infrastructure design, implementation, and management.',
    color: 'bg-gradient-to-br from-green-500 to-green-600',
    delay: 0.4,
  },
]

export default function AboutWhatWeDo() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <section className="bg-[#f7f9fc] px-4 py-20 max-md:px-2" ref={sectionRef}>
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="space-y-16"
        >
          {/* Header with animated underline */}
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: '3rem' } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-primary mx-auto h-1"
            ></motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold"
            >
              What We Do
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground text-lg"
            >
              We offer a range of IT services designed to simplify technology
              and drive business success. We help businesses of all sizes
              innovate and scale by delivering tailored solutions to meet their
              unique needs.
            </motion.p>
          </div>

          {/* Service Grid with hover effects and animations */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.7, delay: service.delay }}
                whileHover={{
                  y: -10,
                  boxShadow:
                    '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                  transition: { duration: 0.2 },
                }}
                className="overflow-hidden rounded-xl bg-white shadow-md"
              >
                <div className={`${service.color} p-6`}>
                  <motion.div
                    className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/20"
                    whileHover={{ rotate: 360, transition: { duration: 0.8 } }}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
