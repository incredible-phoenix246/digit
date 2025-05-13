'use client'

import type React from 'react'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { use, useRef } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  CheckCircle,
  Server,
  Shield,
  Clock,
  BarChart,
  Cpu,
  Settings,
  Play,
  LineChart,
  Database,
  Upload,
  Lock,
  Recycle,
  HardDrive,
  Link2,
  Settings2,
  ArrowRightLeft,
  Activity,
  Download,
  RefreshCw,
  TestTube,
  Rocket,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { notFound } from 'next/navigation'
import { getServiceById } from '@/components/aws/data'
import { Params } from '@/app/services/layout'
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

const iconMap: Record<string, React.ReactNode> = {
  Server: <Server className="h-6 w-6 text-white" />,
  Shield: <Shield className="h-6 w-6 text-white" />,
  Clock: <Clock className="h-6 w-6 text-white" />,
  BarChart: <BarChart className="h-6 w-6 text-white" />,
  Cpu: <Cpu className="h-6 w-6 text-white" />,
  Settings: <Settings className="h-6 w-6 text-white" />,
  Play: <Play className="h-6 w-6 text-white" />,
  LineChart: <LineChart className="h-6 w-6 text-white" />,
  Database: <Database className="h-6 w-6 text-white" />,
  Upload: <Upload className="h-6 w-6 text-white" />,
  Lock: <Lock className="h-6 w-6 text-white" />,
  Recycle: <Recycle className="h-6 w-6 text-white" />,
  HardDrive: <HardDrive className="h-6 w-6 text-white" />,
  Link: <Link2 className="h-6 w-6 text-white" />,
  Settings2: <Settings2 className="h-6 w-6 text-white" />,
  ArrowRightLeft: <ArrowRightLeft className="h-6 w-6 text-white" />,
  Activity: <Activity className="h-6 w-6 text-white" />,
  Download: <Download className="h-6 w-6 text-white" />,
  RefreshCw: <RefreshCw className="h-6 w-6 text-white" />,
  TestTube: <TestTube className="h-6 w-6 text-white" />,
  Rocket: <Rocket className="h-6 w-6 text-white" />,
}

export default function AWSServicePage({ params }: { params: Params }) {
  const param = use(params)
  const headerRef = useRef(null)
  const isInView = useInView(headerRef, { once: true, amount: 0.2 })

  const service = getServiceById(param.id)

  if (!service) {
    notFound()
  }

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
              href="/aws-services"
              className="text-muted-foreground hover:text-primary inline-flex items-center transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to AWS services
            </Link>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="text-primary border-primary/20 bg-primary/5 inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold"
          >
            {service.shortTitle.toUpperCase()}
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

      {/* Service Overview */}
      <div className="container mx-auto mt-16">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold">What is {service.title}?</h2>
            <p className="text-muted-foreground">{service.longDescription}</p>

            <div className="space-y-4 pt-4">
              <h3 className="text-xl font-semibold">Key Features</h3>
              <ul className="space-y-3">
                {service.keyFeatures.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start gap-2"
                  >
                    <CheckCircle className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span>{feature}</span>
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
            <BlurImage
              src="/placeholder.svg?height=400&width=600"
              alt={service.title}
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-24 max-w-4xl"
        >
          <h2 className="mb-8 text-center text-2xl font-bold">
            How {service.title} Works
          </h2>

          <div className="space-y-12">
            {service.howItWorks.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="bg-primary flex h-12 w-12 items-center justify-center rounded-full font-bold text-white">
                    {iconMap[step.icon] || (
                      <Server className="h-6 w-6 text-white" />
                    )}
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

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24"
        >
          <h2 className="mb-12 text-center text-2xl font-bold">
            Benefits of {service.title}
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {service.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h3 className="mb-3 text-xl font-semibold">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Use Cases */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24"
        >
          <h2 className="mb-8 text-center text-2xl font-bold">
            Common Use Cases
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {service.useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
              >
                <div className="relative h-[200px]">
                  <BlurImage
                    src={useCase.image || '/placeholder.svg'}
                    alt={useCase.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-3 text-xl font-semibold">
                    {useCase.title}
                  </h3>
                  <p className="text-muted-foreground">{useCase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Why Choose Digitspot */}
      <div className="container mx-auto mt-24 rounded-2xl bg-gray-50 p-8 md:p-12">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold">
              Why Choose Digitspot for {service.title}
            </h2>
            <p className="text-muted-foreground">
              Our team of AWS-certified experts has extensive experience
              implementing and managing {service.title} solutions for
              organizations across various industries. We provide end-to-end
              support to ensure your {service.shortTitle.toLowerCase()} strategy
              is robust, reliable, and aligned with your business objectives.
            </p>

            <div className="space-y-4 pt-4">
              <h3 className="text-xl font-semibold">Our Approach</h3>
              <ul className="space-y-3">
                {[
                  `Comprehensive assessment of your current infrastructure and ${service.shortTitle.toLowerCase()} requirements`,
                  `Tailored ${service.shortTitle.toLowerCase()} strategy design based on your business objectives`,
                  'Seamless implementation with minimal disruption to your operations',
                  'Regular testing and validation to ensure optimal performance',
                  `Ongoing monitoring and management of your ${service.shortTitle.toLowerCase()} environment`,
                  'Continuous optimization to improve performance and reduce costs',
                ].map((approach, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start gap-2"
                  >
                    <CheckCircle className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span>{approach}</span>
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
          >
            <div className="relative h-[350px] overflow-hidden rounded-xl">
              <BlurImage
                src="/placeholder.svg?height=350&width=500"
                alt="Digitspot AWS Expertise"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-8">
                <h3 className="mb-2 text-2xl font-bold text-white">
                  AWS Certified Experts
                </h3>
                <p className="text-white/80">
                  Trusted implementation and support
                </p>
              </div>
            </div>
          </motion.div>
        </div>
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
                Ready to leverage the power of {service.title}?
              </h2>
              <p className="text-lg text-white/90">
                Contact our team today to discuss how we can help you implement
                a robust {service.shortTitle.toLowerCase()} solution that meets
                your business needs.
              </p>
              <div className="flex flex-col gap-4 pt-4 sm:flex-row">
                <Button
                  size="lg"
                  className="text-primary bg-white hover:bg-white/90"
                >
                  Schedule a consultation
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  Learn about our services
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

      {/* FAQ Section */}
      <div className="container mx-auto mt-24 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl"
        >
          <h2 className="mb-8 text-center text-2xl font-bold">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {service.faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h3 className="mb-2 text-lg font-semibold">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
