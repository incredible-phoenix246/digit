'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Cloud, Server, Network, Database, Cog } from 'lucide-react'
import { cn } from '@/lib/utils'

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

const services = [
  {
    icon: <Cloud className="h-6 w-6 text-blue-600" />,
    title: 'Cloud Computing',
    description:
      'The primary reasons for any organization to adopt a cloud solution (public, private, or hybrid cloud) are flexibility, scalability, security, flexible pricing (pay-as-you-go-service), maximum uptime, elastic IT-related capabilities, business agility, and the various service models available such as IaaS, PaaS, and SaaS.',
    color: 'blue',
  },
  {
    icon: <Server className="h-6 w-6 text-amber-600" />,
    title: 'IT outsourcing',
    description:
      'IT outsourcing can help redefine back-office operations by taking an end to end process view that overrides functional boundaries. This means reduced cost and increased strategic flexibility while simplifying multiple functions.',
    color: 'amber',
  },
  {
    icon: <Network className="h-6 w-6 text-emerald-600" />,
    title: 'Network Monitoring',
    description:
      'Expand visibility without extending your budget with a carrier-grade network visibility solution. Aggregate, filter, optimize, and reduce network traffic in real time. Be proactive.',
    color: 'emerald',
  },
  {
    icon: <Database className="h-6 w-6 text-violet-600" />,
    title: 'Infrastructure Design',
    description:
      'All networks, regardless of their size, have similar foundational requirements. Embark on a network design project identifying current and future business requirements.',
    color: 'violet',
  },
  {
    icon: <Cog className="h-6 w-6 text-rose-600" />,
    title: 'Business Applications and Automation',
    description:
      'We improve business performance by automating daily operations and streamlining processes.',
    color: 'rose',
  },
]

export default function WhatWeDo() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <section
      className="bg-gradient-to-b from-gray-50 to-white py-24"
      ref={sectionRef}
    >
      <div className="container mx-auto max-w-7xl px-4">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="space-y-16"
        >
          {/* Header with updated design */}
          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-6">
              <motion.div
                variants={fadeIn}
                className="inline-flex items-center rounded-full bg-gradient-to-r from-red-500 to-red-600 px-4 py-1.5 text-xs font-semibold text-white"
              >
                WHAT WE DO
              </motion.div>
              <motion.h2
                variants={fadeIn}
                className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl"
              >
                We partner with our customers and play the trusted role of
                fulfilling their technology needs.
              </motion.h2>
            </div>

            <div className="space-y-6">
              <motion.p variants={fadeIn} className="text-lg text-gray-600">
                We are a technology company with specialization in business
                application automation, protection assurance, IT risk and
                compliance services, and intelligent solutions deployment.
              </motion.p>
              <motion.p variants={fadeIn} className="text-lg text-gray-600">
                Digitspot was established in 2011 to address the deployment gaps
                that exist in the business application and protection assurance
                implementation space. We take pride in our unique skill of
                translating process pain points into technology solutions that
                exceed customers expectations.
              </motion.p>
            </div>
          </div>

          {/* Service Grid with updated card design */}
          <motion.div
            variants={fadeIn}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                {/* Decorative gradient element */}
                <div
                  className={cn(
                    'absolute -top-6 -right-6 h-24 w-24 rounded-full opacity-70 blur-xl transition-all duration-300 group-hover:scale-150',
                    `bg-${service.color}-50 `
                  )}
                  // className={` `}
                />

                <div className="relative space-y-5">
                  <div
                    className={cn(
                      'flex h-14 w-14 items-center justify-center rounded-xl',
                      `bg-${service.color}-50 text-${service.color}-600`
                    )}
                  >
                    {service.icon}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900">
                    {service.title}
                  </h3>

                  <div className="h-px w-12 bg-gradient-to-r from-gray-200 to-transparent" />

                  <p className="text-gray-600">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
