'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { Input } from '@/components/ui/input'
import { getAllBlogPosts } from './blog-posts'
import { Button } from '@/components/ui/button'
import BlurImage from '@/components/mis/blur-image'
import { Calendar, Clock, ChevronRight, Search } from 'lucide-react'

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

export default function BlogPage() {
  const headerRef = useRef(null)
  const isInView = useInView(headerRef, { once: true, amount: 0.2 })
  const blogPosts = getAllBlogPosts()
  const categories = Array.from(new Set(blogPosts.map((post) => post.category)))
  const tagCounts: Record<string, number> = {}
  blogPosts.forEach((post) => {
    post.tags.forEach((tag) => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1
    })
  })
  const popularTags = Object.entries(tagCounts)
    .sort((a, b) => b[1] - a[1])
    .map(([tag]) => tag)

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
          <motion.h1
            variants={fadeIn}
            className="text-4xl font-bold tracking-tight sm:text-5xl"
          >
            Digitspot Blog
          </motion.h1>
          <motion.p variants={fadeIn} className="text-muted-foreground text-lg">
            Insights, tips, and best practices for AWS cloud services, IT
            solutions, and digital transformation.
          </motion.p>
        </motion.div>
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Search Bar (Mobile Only) */}
            <div className="mb-8 lg:hidden">
              <div className="relative">
                <Search className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
                <Input placeholder="Search articles..." className="pl-10" />
              </div>
            </div>

            {/* Blog Posts */}
            <div className="space-y-12">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <Link href={`/blog/${post.id}`} className="block">
                    <div className="grid gap-6 md:grid-cols-3">
                      <div className="relative h-60 overflow-hidden rounded-lg md:h-full">
                        <BlurImage
                          src={post.image || '/placeholder.svg'}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="space-y-4 md:col-span-2">
                        <div>
                          <span className="bg-primary/10 text-primary inline-block rounded-full px-3 py-1 text-xs font-medium">
                            {post.category}
                          </span>
                        </div>
                        <h2 className="group-hover:text-primary text-2xl font-bold transition-colors">
                          {post.title}
                        </h2>
                        <p className="text-muted-foreground">{post.excerpt}</p>
                        <div className="text-muted-foreground flex items-center space-x-4 text-sm">
                          <div className="flex items-center">
                            <Calendar className="mr-1 h-4 w-4" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="mr-1 h-4 w-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <div className="pt-2">
                          <span className="text-primary inline-flex items-center font-medium group-hover:underline">
                            Read more <ChevronRight className="ml-1 h-4 w-4" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Search Bar (Desktop Only) */}
            <div className="hidden lg:block">
              <h3 className="mb-4 text-lg font-semibold">Search</h3>
              <div className="relative">
                <Search className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
                <Input placeholder="Search articles..." className="pl-10" />
              </div>
            </div>

            {/* Categories */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">Categories</h3>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <motion.li
                    key={category}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link
                      href={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                      className="group flex items-center justify-between"
                    >
                      <span className="group-hover:text-primary transition-colors">
                        {category}
                      </span>
                      <span className="text-muted-foreground text-sm">
                        (
                        {
                          blogPosts.filter((post) => post.category === category)
                            .length
                        }
                        )
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag, index) => (
                  <motion.div
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link
                      href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                      className="hover:bg-primary hover:border-primary inline-block rounded-full border border-gray-200 px-3 py-1 text-sm transition-colors hover:text-white"
                    >
                      {tag}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="rounded-xl bg-gray-50 p-6">
              <h3 className="mb-2 text-lg font-semibold">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Get the latest insights and updates delivered to your inbox.
              </p>
              <div className="space-y-3">
                <Input placeholder="Your email address" />
                <Button className="w-full">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
