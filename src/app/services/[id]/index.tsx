'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowLeft, CheckCircle, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { services } from '../services-data'

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

export default function ServicePage({ id }: { id: string }) {
  const headerRef = useRef(null)
  const isInView = useInView(headerRef, { once: true, amount: 0.2 })

  const service = services.find((s) => s.id === id)

  if (!service) {
    notFound()
  }

  const relatedServices = services
    .filter((s) => s.id !== service.id)
    .filter((s) => s.category === service.category || Math.random() > 0.5)
    .slice(0, 3) 

  return (
    <div className="py-16 md:py-24">
      {/* Header */}
      <div className="container mx-auto" ref={headerRef}>
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="mx-auto mb-16 max-w-3xl space-y-6"
        >
          <motion.div variants={fadeIn} className="mb-8">
            <Link
              href="/services"
              className="text-muted-foreground hover:text-primary inline-flex items-center transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to all services
            </Link>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="text-primary border-primary/20 bg-primary/5 inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold"
          >
            {service.category}
          </motion.div>

          <motion.h1
            variants={fadeIn}
            className="text-4xl font-bold tracking-tight sm:text-5xl"
          >
            {service.title}
          </motion.h1>

          <motion.p variants={fadeIn} className="text-muted-foreground text-lg">
            {service.description}
          </motion.p>
        </motion.div>
      </div>

      {/* Service Content */}
      <div className="container mx-auto mt-16">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold">How We Can Help</h2>
            <p className="text-muted-foreground">{service.helpText}</p>

            <div className="space-y-4 pt-4">
              <h3 className="text-xl font-semibold">Key Benefits</h3>
              <ul className="space-y-3">
                {service.benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start gap-2"
                  >
                    <CheckCircle className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[400px] overflow-hidden rounded-xl"
          >
            <Image
              src={service.image || '/placeholder.svg?height=400&width=600'}
              alt={service.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </motion.div>
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-24 max-w-4xl"
        >
          <h2 className="mb-8 text-center text-2xl font-bold">Our Approach</h2>

          <div className="space-y-12">
            {service.process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-full font-bold">
                    {index + 1}
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Case Study Section */}
        {service.caseStudy && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-24"
          >
            <div
              className={`${service.bgColor} rounded-2xl border border-gray-100 p-8 md:p-12`}
            >
              <div className="mx-auto max-w-3xl">
                <h2 className="mb-6 text-2xl font-bold">Case Study</h2>
                <h3 className="mb-4 text-xl font-semibold">
                  {service.caseStudy.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {service.caseStudy.description}
                </p>

                <div className="rounded-xl bg-white/50 p-6">
                  <h4 className="mb-4 font-semibold">Key Results:</h4>
                  <ul className="space-y-2">
                    {service.caseStudy.results.map((result, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-start gap-2"
                      >
                        <CheckCircle className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                        <span>{result}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Related Services */}
        {relatedServices.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-24"
          >
            <h2 className="mb-8 text-2xl font-bold">Related Services</h2>

            <div className="grid gap-8 md:grid-cols-3">
              {relatedServices.map((relService, index) => (
                <motion.div
                  key={relService.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <Link
                    href={`/services/${relService.id}`}
                    className="block h-full"
                  >
                    <div
                      className={`${relService.bgColor} h-full rounded-xl border border-gray-100 p-6 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-md`}
                    >
                      <div className="space-y-3">
                        <div
                          className={`${relService.iconBgColor} flex h-10 w-10 items-center justify-center rounded-full`}
                        >
                          {relService.icon}
                        </div>
                        <h3 className="group-hover:text-primary text-lg font-semibold transition-colors duration-300">
                          {relService.title}
                        </h3>
                        <p className="text-muted-foreground line-clamp-2 text-sm">
                          {relService.shortDescription}
                        </p>
                        <div className="pt-2">
                          <span className="text-primary flex items-center text-sm font-medium">
                            Learn more <ArrowRight className="ml-1 h-3 w-3" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* CTA Section */}
      <div className="container mx-auto mt-24">
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
              <h2 className="text-3xl font-bold">
                Ready to get started with {service.title}?
              </h2>
              <p className="text-lg text-white/90">
                Contact our team today to discuss how our{' '}
                {service.title.toLowerCase()} services can benefit your
                business.
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
                  Schedule a consultation
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
