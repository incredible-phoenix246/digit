'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { services } from './services-data'
import BlurImage from '@/components/mis/blur-image'

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

export default function ServicesPage() {
  const headerRef = useRef(null)
  const isInView = useInView(headerRef, { once: true, amount: 0.2 })

  return (
    <div className="py-16 md:py-24">
      {/* Header */}
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
            OUR SERVICES
          </motion.div>
          <motion.h1
            variants={fadeIn}
            className="text-4xl font-bold tracking-tight sm:text-5xl"
          >
            Comprehensive IT Solutions for Your Business
          </motion.h1>
          <motion.p variants={fadeIn} className="text-muted-foreground text-lg">
            We offer a wide range of IT services designed to help your business
            thrive in the digital age. Our expert team delivers tailored
            solutions to meet your unique needs.
          </motion.p>
        </motion.div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto mt-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/services/${service.id}`} className="block h-full">
                <div
                  className={`${service.bgColor} h-full rounded-2xl border border-gray-100 p-8 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-lg`}
                >
                  <div className="space-y-4">
                    <div
                      className={`${service.iconBgColor} flex h-14 w-14 items-center justify-center rounded-full shadow-sm`}
                    >
                      {service.icon}
                    </div>
                    <h3 className="group-hover:text-primary text-xl font-semibold transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {service.shortDescription}
                    </p>
                    <div className="flex items-center justify-between pt-4">
                      <span className="text-primary/70 text-xs font-medium tracking-wider uppercase">
                        {service.category}
                      </span>
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="text-primary flex items-center font-medium"
                      >
                        Learn more <ArrowRight className="ml-1 h-4 w-4" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="container mx-auto mt-32">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-[500px] overflow-hidden rounded-2xl">
              <BlurImage
                src="/m1.jpg"
                alt="IT Services"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-8">
                <h3 className="mb-2 text-2xl font-bold text-white">
                  Trusted by Leading Businesses
                </h3>
                <p className="text-white/80">
                  Our solutions power businesses across industries
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">
              Why Choose Digitspot for Your IT Needs
            </h2>
            <p className="text-muted-foreground">
              With over a decade of experience delivering high-performance IT
              solutions, we&apos;ve built a reputation for excellence,
              reliability, and innovation.
            </p>

            <div className="mt-8 space-y-6">
              {[
                {
                  title: 'Expert Team',
                  description:
                    'Our certified professionals bring deep expertise across all IT domains.',
                },
                {
                  title: 'Tailored Solutions',
                  description:
                    'We design custom solutions that address your specific business challenges.',
                },
                {
                  title: 'Proven Track Record',
                  description:
                    "We've successfully delivered hundreds of projects for clients across industries.",
                },
                {
                  title: 'Ongoing Support',
                  description:
                    'We provide continuous support to ensure your systems run smoothly.',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="mt-1 flex-shrink-0">
                    <div className="bg-primary/10 flex h-6 w-6 items-center justify-center rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Learn About Our Approach
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto mt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl"
        >
          <div className="from-primary absolute inset-0 bg-gradient-to-r to-blue-600 opacity-90"></div>
          <div className="relative z-10 p-12 text-white md:p-16">
            <div className="mx-auto max-w-3xl space-y-6">
              <h2 className="text-3xl font-bold md:text-4xl">
                Ready to transform your business?
              </h2>
              <p className="text-lg text-white/90">
                Contact us today to discuss your IT needs and discover how we
                can help you achieve your business goals.
              </p>
              <div className="flex flex-col gap-4 pt-4 sm:flex-row">
                <Button
                  size="lg"
                  className="text-primary bg-white hover:bg-white/90"
                >
                  Contact an expert
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  View case studies
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 -mt-12 -mr-12 opacity-20">
            <svg
              width="300"
              height="300"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#FFFFFF"
                d="M37.5,-48.1C52.1,-40.3,69.7,-33.9,75.9,-21.7C82,-9.6,76.8,8.3,68.9,23.5C61,38.7,50.4,51.1,37.5,58.2C24.6,65.4,9.4,67.3,-3.9,62.8C-17.2,58.3,-28.6,47.4,-39.7,36.7C-50.8,26,-61.6,15.5,-65.1,2.5C-68.6,-10.5,-64.9,-24,-56.6,-33.9C-48.3,-43.8,-35.5,-50.1,-23.2,-58.5C-10.9,-66.9,0.9,-77.4,11.2,-74.8C21.5,-72.2,23,-55.8,37.5,-48.1Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
