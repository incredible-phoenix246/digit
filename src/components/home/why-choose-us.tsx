'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const cardHover = {
  rest: { scale: 1 },
  hover: {
    scale: 1.03,
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
}

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold">Why Choose Digitspot</h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl">
            With 10+ years of experience delivering high-performance IT
            solutions you can rely on.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Customer-Centric Approach',
              description:
                'We prioritize your needs and success, ensuring solutions that align with your business goals.',
              isPrimary: false,
            },
            {
              title: 'Excellent Delivery',
              description:
                'Time-managed, high-performance delivery that exceeds expectations and delivers results.',
              isPrimary: true,
            },
            {
              title: 'Proven Reliability',
              description:
                'Trusted by businesses for over a decade, our solutions stand the test of time.',
              isPrimary: false,
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              whileHover="hover"
              variants={cardHover}
            >
              <Card
                className={`border-2 ${card.isPrimary ? 'border-primary bg-primary text-primary-foreground' : 'border-muted'}`}
              >
                <CardHeader>
                  <motion.div
                    className={`h-12 w-12 rounded-full ${card.isPrimary ? 'bg-white/20' : 'bg-primary/10'} mb-4 flex items-center justify-center`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <CheckCircle
                      className={`h-6 w-6 ${card.isPrimary ? 'text-white' : 'text-primary'}`}
                    />
                  </motion.div>
                  <CardTitle className={card.isPrimary ? 'text-white' : ''}>
                    {card.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={card.isPrimary ? 'text-white/80' : ''}>
                    {card.description}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    variant={card.isPrimary ? 'secondary' : 'outline'}
                    size="sm"
                    // whileHover={{ scale: 1.05 }}
                    // whileTap={{ scale: 0.95 }}
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
