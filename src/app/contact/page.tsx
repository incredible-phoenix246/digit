'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Button } from '@/components/ui/button'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { ContactForm } from './contact-form'
import { services } from '../services/services-data'

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

export default function ContactPage() {
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
            GET IN TOUCH
          </motion.div>
          <motion.h1
            variants={fadeIn}
            className="text-4xl font-bold tracking-tight sm:text-5xl"
          >
            Contact Us
          </motion.h1>
          <motion.p variants={fadeIn} className="text-muted-foreground text-lg">
            Have questions about our services? Ready to start your next project?
            Contact us today and let&apos;s discuss how we can help your
            business succeed.
          </motion.p>
        </motion.div>
      </div>

      {/* Contact Form and Info */}
      <div className="container mx-auto mt-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8 md:col-span-1"
          >
            <div>
              <h2 className="mb-6 text-2xl font-bold">Contact Information</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form and our team will get back to you within 24
                hours.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: <MapPin className="text-primary h-5 w-5" />,
                  title: 'Our Office',
                  details: ['18 Olufemi Street', 'Surulere', 'Lagos, Nigeria'],
                },
                {
                  icon: <Phone className="text-primary h-5 w-5" />,
                  title: 'Phone',
                  details: ['+234 7018 221 581'],
                },
                {
                  icon: <Mail className="text-primary h-5 w-5" />,
                  title: 'Email',
                  details: ['info@digitspot.com', 'support@digitspot.com'],
                },
                {
                  icon: <Clock className="text-primary h-5 w-5" />,
                  title: 'Working Hours',
                  details: [
                    'Monday - Friday: 9AM - 5PM',
                    'Saturday - Sunday: Closed',
                  ],
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
                    <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-full">
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    {item.details.map((detail, j) => (
                      <p key={j} className="text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-8">
              <div className="bg-primary/5 border-primary/10 rounded-xl border p-6">
                <h3 className="mb-2 text-lg font-semibold">
                  Emergency Support
                </h3>
                <p className="text-muted-foreground mb-4">
                  For urgent technical issues requiring immediate assistance:
                </p>
                <Button variant="outline" className="w-full">
                  Call Emergency Support
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2"
          >
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
              <ContactForm services={services} />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Map Section */}
      <div className="container mx-auto mt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative h-[400px] overflow-hidden rounded-2xl"
        >
          {/* This would be replaced with an actual map component in production */}
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255.20671376888615!2d3.3508813138844395!3d6.50627849344926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c3cf96ea715%3A0xe932acf65051093b!2s18%20Olufemi%20Rd%2C%20Ikate%2C%20Lagos%20101241%2C%20Lagos!5e0!3m2!1sen!2sng!4v1742376689839!5m2!1sen!2sng"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full"
            />
          </div>
        </motion.div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto mt-24">
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
            {[
              {
                question: 'How quickly can you respond to service requests?',
                answer:
                  'We typically respond to all service requests within 4 business hours. For clients with premium support agreements, our response time is even faster.',
              },
              {
                question: 'Do you offer ongoing maintenance and support?',
                answer:
                  'Yes, we offer various maintenance and support packages tailored to your specific needs, from basic monitoring to comprehensive 24/7 support.',
              },
              {
                question:
                  'Can you work with our existing systems and infrastructure?',
                answer:
                  'Absolutely. We specialize in integrating with and enhancing existing systems, ensuring a smooth transition and minimal disruption to your operations.',
              },
              {
                question: 'What industries do you specialize in?',
                answer:
                  'We have experience across multiple industries including finance, healthcare, manufacturing, retail, and professional services, allowing us to understand the unique challenges of each sector.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-xl border border-gray-100 bg-white p-6"
              >
                <h3 className="mb-2 text-lg font-semibold">{item.question}</h3>
                <p className="text-muted-foreground">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
