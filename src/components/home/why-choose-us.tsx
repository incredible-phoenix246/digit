'use client'

import React from 'react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

// Enhanced animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

const cardHover = {
  rest: {
    scale: 1,
    boxShadow:
      '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  },
  hover: {
    scale: 1.03,
    boxShadow:
      '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    transition: { duration: 0.3, ease: 'easeOut' },
  },
}

const iconVariants = {
  rest: { rotate: 0 },
  hover: {
    rotate: 360,
    transition: { duration: 0.8, ease: 'easeInOut' },
  },
}

const buttonVariants = {
  rest: { x: 0 },
  hover: {
    x: 5,
    transition: {
      repeat: Number.POSITIVE_INFINITY,
      repeatType: 'mirror' as const,
      duration: 0.8,
    },
  },
}

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="bg-primary/5 absolute -top-24 -right-24 h-64 w-64 rounded-full blur-3xl"></div>
      <div className="bg-primary/5 absolute -bottom-32 -left-32 h-64 w-64 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="relative z-10"
        >
          <motion.div
            className="mx-auto mb-16 text-center"
            variants={itemVariants}
          >
            <div className="bg-primary/10 mb-3 inline-flex rounded-full px-4 py-1.5">
              <span className="text-primary text-sm font-medium">
                Why Choose Us
              </span>
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
              Why Choose Digitspot
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              With 10+ years of experience delivering high-performance IT
              solutions you can rely on.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: 'Customer-Centric Approach',
                description:
                  'We prioritize your needs and success, ensuring solutions that align with your business goals.',
                isPrimary: false,
                icon: <CheckCircle className="h-6 w-6" />,
              },
              {
                title: 'Excellent Delivery',
                description:
                  'Time-managed, high-performance delivery that exceeds expectations and delivers results.',
                isPrimary: true,
                icon: <CheckCircle className="h-6 w-6" />,
              },
              {
                title: 'Proven Reliability',
                description:
                  'Trusted by businesses for over a decade, our solutions stand the test of time.',
                isPrimary: false,
                icon: <CheckCircle className="h-6 w-6" />,
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                initial="rest"
                whileHover="hover"
                className="h-full"
              >
                <motion.div variants={cardHover} className="h-full">
                  <Card
                    className={cn(
                      'relative h-full overflow-hidden border-0',
                      card.isPrimary
                        ? 'from-primary to-primary-dark bg-gradient-to-br text-white'
                        : 'bg-white shadow-md'
                    )}
                  >
                    {card.isPrimary && (
                      <div className="absolute -top-10 -right-10 h-20 w-20 rounded-full bg-white/10"></div>
                    )}

                    <CardHeader className="pb-2">
                      <motion.div
                        variants={iconVariants}
                        className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl ${
                          card.isPrimary ? 'bg-white/20' : 'bg-primary/10'
                        }`}
                      >
                        {React.cloneElement(card.icon, {
                          className: `h-7 w-7 ${card.isPrimary ? 'text-white' : 'text-primary'}`,
                        })}
                      </motion.div>
                      <CardTitle
                        className={cn(
                          'text-xl font-bold',
                          card.isPrimary ? 'text-white' : 'text-gray-900'
                        )}
                      >
                        {card.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent>
                      <p
                        className={cn(
                          card.isPrimary ? 'text-white/90' : 'text-gray-600'
                        )}
                      >
                        {card.description}
                      </p>
                    </CardContent>

                    <CardFooter>
                      <motion.div
                        initial="rest"
                        whileHover="hover"
                        className="w-full"
                      >
                        <Button
                          variant={card.isPrimary ? 'secondary' : 'outline'}
                          className={cn(
                            'group w-full justify-between',
                            card.isPrimary
                              ? 'bg-white/20 text-white hover:bg-white/30'
                              : 'border-primary/20 text-primary hover:bg-primary/5'
                          )}
                        >
                          <span>Learn More</span>
                          <motion.div variants={buttonVariants}>
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </motion.div>
                        </Button>
                      </motion.div>
                    </CardFooter>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
