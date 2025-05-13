'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Solutions() {
  const solutionsRef = useRef(null)
  const solutionsInView = useInView(solutionsRef, { once: true, amount: 0.3 })

  return (
    <section className="py-16 text-black" ref={solutionsRef}>
      <div className="container mx-auto">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={
            solutionsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold">Solutions</h2>
          <p className="mx-auto mt-4 max-w-2xl">
            We offer innovative solutions to support your business&apos;s IT
            needs and goals.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Cloud Computing',
              description:
                'Secure scalable and flexible cloud adoption strategies tailored to your business.',
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M20 16.7a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-2c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v2Z" />
                  <path d="M6 12V8a6 6 0 0 1 12 0v4" />
                </svg>
              ),
              isPrimary: false,
            },
            {
              title: 'IT Outsourcing',
              description:
                'Streamline back-office operations to reduce costs and increase flexibility.',
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M7 7h10" />
                  <path d="M7 12h10" />
                  <path d="M7 17h10" />
                </svg>
              ),
              isPrimary: true,
            },
            {
              title: 'Network Monitoring',
              description:
                'Gain real-time visibility into network performance for optimized operations.',
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M12 2v20" />
                  <path d="m2 5 20 14" />
                  <path d="m2 19 20-14" />
                </svg>
              ),
              isPrimary: false,
            },
          ].map((solution, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={
                solutionsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.5, delay: i * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <Card
                className={cn(
                  'h-full border-0 text-white',
                  solution.isPrimary ? 'bg-primary' : 'bg-black/60'
                )}
              >
                <CardHeader>
                  <motion.div
                    className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    {solution.icon}
                  </motion.div>
                  <CardTitle className="text-white">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80">{solution.description}</p>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    className={cn(
                      'hover:text text-primary border-white hover:bg-white',
                      solution.isPrimary ? 'primary' : 'black'
                    )}
                  >
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
