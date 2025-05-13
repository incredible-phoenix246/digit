'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

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

export default function Services() {
  const servicesRef = useRef(null)
  const servicesInView = useInView(servicesRef, { once: true, amount: 0.3 })

  return (
    <section className="py-16 max-md:py-4" ref={servicesRef}>
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-12 md:flex-row">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={
              servicesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
            }
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-[400px] overflow-hidden rounded-lg max-md:hidden">
              <motion.div
                className="bg-primary absolute right-0 bottom-0 z-10 h-24 w-24"
                initial={{ scale: 0 }}
                animate={
                  servicesInView
                    ? { scale: 1, rotate: 0 }
                    : { scale: 0, rotate: -90 }
                }
                transition={{ duration: 0.5, delay: 0.5 }}
              />
              <Image
                src="/consult.png?height=400&width=500"
                alt="IT Services"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
          <motion.div
            className="space-y-6 md:w-1/2"
            initial="hidden"
            animate={servicesInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeIn} className="text-3xl font-bold">
              Explore Our Services
            </motion.h2>
            <motion.p variants={fadeIn} className="text-muted-foreground">
              We offer innovative solutions to support your business&apos;s IT
              needs and goals.
            </motion.p>
            <motion.ul variants={fadeIn} className="space-y-4">
              {[
                {
                  title: 'ICT Consulting',
                  description: 'Expert guidance for your technology strategy',
                },
                {
                  title: 'Energy Consulting',
                  description: 'Optimize your energy infrastructure',
                },
                {
                  title: 'AWS Services',
                  description: 'Leverage the power of cloud computing',
                },
              ].map((service, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={
                    servicesInView
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: 20 }
                  }
                  transition={{ delay: 0.6 + i * 0.2 }}
                  whileHover={{ x: 5 }}
                >
                  <CheckCircle className="text-primary mt-0.5 h-6 w-6" />
                  <div>
                    <h3 className="font-semibold">{service.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {service.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
            <motion.div
              variants={fadeIn}
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button>
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
