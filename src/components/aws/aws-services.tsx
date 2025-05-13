'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { awsServices } from './data'
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

export default function AWSServices() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <section className="bg-white py-24" ref={sectionRef}>
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="space-y-12"
        >
          {/* Header */}
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <motion.div
              variants={fadeIn}
              className="text-primary border-primary/20 bg-primary/5 inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold"
            >
              AWS PARTNER
            </motion.div>
            <motion.h2
              variants={fadeIn}
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              AWS Cloud Services
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-muted-foreground text-lg"
            >
              As an AWS Select Tier Partner, we help businesses accelerate
              growth, reduce costs, and achieve digital transformation with
              these powerful cloud services.
            </motion.p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {awsServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md">
                  <div className="space-y-4">
                    <div className="mb-4 flex justify-center">
                      <BlurImage
                        src={service.icon || '/placeholder.svg'}
                        alt={service.title}
                        width={80}
                        height={80}
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <h3 className="text-center text-xl font-semibold">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-center">
                      {service.description}
                    </p>
                    <div className="flex justify-center pt-4">
                      <Link
                        href={`/aws/${service.id}`}
                        className="inline-flex items-center rounded-md bg-[#7B68EE] px-6 py-2 text-white transition-all duration-300 hover:bg-[#6A5ACD]"
                      >
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div variants={fadeIn} className="mt-12 flex justify-center">
            <Link
              href="/contact"
              className="bg-primary hover:bg-primary/90 inline-flex items-center rounded-md px-8 py-3 text-lg font-medium text-white transition-all duration-300"
            >
              Speak with an AWS Expert <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
