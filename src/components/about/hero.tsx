'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, Users, Award } from 'lucide-react'
import BlurImage from '../mis/blur-image'

export default function AboutHero() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 })

  return (
    <section
      className="bg-gradient-to-b from-white to-[#f7f9fc] py-24 max-md:px-2 max-md:py-8"
      ref={heroRef}
    >
      <div className="container mx-auto">
        <motion.div
          className="mx-auto max-w-6xl"
          initial={{ opacity: 0 }}
          animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative mb-16">
            {/* Decorative elements */}
            <motion.div
              className="bg-primary/10 absolute -top-10 -left-10 h-20 w-20 rounded-full"
              initial={{ scale: 0 }}
              animate={heroInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            <motion.div
              className="absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-blue-100"
              initial={{ scale: 0 }}
              animate={heroInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            />

            <motion.div
              className="relative z-10 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={
                heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={heroInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-4 inline-block"
              >
                <div className="bg-primary rounded-full px-4 py-1 text-sm font-medium text-white">
                  Established 2011
                </div>
              </motion.div>
              <h1 className="from-primary mb-6 bg-gradient-to-r to-blue-600 bg-clip-text text-5xl font-bold text-transparent">
                About Digitspot
              </h1>
              <div className="bg-primary mx-auto mb-8 h-1 w-24"></div>
              <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
                Founded in 2011, Digitspot has been providing innovative IT
                solutions for over a decade. We specialize in transforming
                complex business challenges into seamless technology solutions.
              </p>
            </motion.div>
          </div>

          <div className="grid items-center gap-12 md:grid-cols-2">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              animate={
                heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
              }
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-xl">
                <div className="from-primary/40 absolute inset-0 z-10 bg-gradient-to-tr to-transparent"></div>
                <BlurImage
                  src="/about.jpg?height=400&width=600"
                  alt="About Digitspot"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-6 -right-6 z-20 rounded-xl bg-white p-4 shadow-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={
                  heroInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }
                }
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Calendar className="text-primary h-8 w-8" />
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 z-20 rounded-xl bg-white p-4 shadow-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={
                  heroInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }
                }
                transition={{ duration: 0.5, delay: 0.8 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Award className="text-primary h-8 w-8" />
              </motion.div>
            </motion.div>

            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              animate={
                heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
              }
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Who We Are</h2>
                <p className="text-muted-foreground text-lg">
                  We specialize in transforming complex business challenges into
                  seamless technology solutions, helping businesses streamline
                  operations and accelerate growth.
                </p>
              </div>

              <div className="from-primary/10 border-primary/20 rounded-xl border bg-gradient-to-r to-blue-100/50 p-6">
                <h3 className="mb-3 text-xl font-semibold">Our Mission</h3>
                <p className="text-muted-foreground">
                  To help our customers achieve business success through model
                  rethinking, process refitting, protection assurance, and
                  technology mediation.
                </p>
              </div>

              <motion.div
                className="flex items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-full">
                  <Users className="text-primary h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Team of Experts</h4>
                  <p className="text-muted-foreground text-sm">
                    Dedicated professionals with industry expertise
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
