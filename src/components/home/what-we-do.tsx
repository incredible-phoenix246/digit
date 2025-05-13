'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Cloud, Server, Network, Database, Cog } from 'lucide-react'

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
    icon: <Cloud className="h-6 w-6 text-red-500" />,
    title: 'Cloud Computing',
    description:
      'The primary reasons for any organization to adopt a cloud solution (public, private, or hybrid cloud) are flexibility, scalability, security, flexible pricing (pay-as-you-go-service), maximum uptime, elastic IT-related capabilities, business agility, and the various service models available such as IaaS, PaaS, and SaaS.',
    bgColor: 'bg-blue-50',
    iconBg: 'bg-white',
  },
  {
    icon: <Server className="h-6 w-6 text-yellow-500" />,
    title: 'IT outsourcing',
    description:
      'IT outsourcing can help redefine back-office operations by taking an end to end process view that overrides functional boundaries. This means reduced cost and increased strategic flexibility while simplifying multiple functions.',
    bgColor: 'bg-purple-50',
    iconBg: 'bg-white',
  },
  {
    icon: <Network className="h-6 w-6 text-blue-500" />,
    title: 'Network Monitoring',
    description:
      'Expand visibility without extending your budget with a carrier-grade network visibility solution. Aggregate, filter, optimize, and reduce network traffic in real time. Be proactive.',
    bgColor: 'bg-red-50',
    iconBg: 'bg-white',
  },
  {
    icon: <Database className="h-6 w-6 text-green-500" />,
    title: 'Infrastructure Design',
    description:
      'All networks, regardless of their size, have similar foundational requirements. Embark on a network design project identifying current and future business requirements.',
    bgColor: 'bg-red-50',
    iconBg: 'bg-white',
  },
  {
    icon: <Cog className="h-6 w-6 text-purple-500" />,
    title: 'Business Applications and Automation',
    description:
      'We improve business performance by automating daily operations and streamlining processes.',
    bgColor: 'bg-red-50',
    iconBg: 'bg-white',
  },
]

export default function WhatWeDo() {
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
          <div className="max-w-4xl space-y-6">
            <motion.div
              variants={fadeIn}
              className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-2.5 py-0.5 text-xs font-semibold text-red-500"
            >
              WHAT WE DO
            </motion.div>
            <motion.h2
              variants={fadeIn}
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              We partner with our customers and play the trusted role of
              fulfilling their technology needs while they focus on other areas
              of their business to create greater value.
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-muted-foreground text-lg"
            >
              We are a technology company with specialization in business
              application automation, protection assurance, IT risk and
              compliance services, and intelligent solutions deployment.
            </motion.p>
            <motion.p
              variants={fadeIn}
              className="text-muted-foreground text-lg"
            >
              Digitspot was established in 2011 to address the deployment gaps
              that exist in the business application and protection assurance
              implementation space. We take pride in our unique skill of
              translating process pain points into technology solutions that
              exceed customers expectations.
            </motion.p>
          </div>

          {/* Service Grid */}
          <motion.div
            variants={fadeIn}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${service.bgColor} rounded-2xl p-8 transition-transform hover:-translate-y-1`}
              >
                <div className="space-y-4">
                  <div
                    className={`${service.iconBg} flex h-12 w-12 items-center justify-center rounded-full shadow-sm`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
