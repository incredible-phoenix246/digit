'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { use, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Calendar,
  Clock,
  ArrowLeft,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { getBlogPostById, getAllBlogPosts } from '../blog-posts'
import { notFound } from 'next/navigation'
import { marked } from 'marked'
import { Params } from '@/app/services/layout'

export default function BlogPostPage({ params }: { params: Params }) {
  const headerRef = useRef(null)
  const param = use(params)
  const isInView = useInView(headerRef, { once: true, amount: 0.2 })

  const post = getBlogPostById(param.id)

  if (!post) {
    notFound()
  }

  // Get related posts (same category or shared tags)
  const allPosts = getAllBlogPosts()
  const relatedPosts = allPosts
    .filter((p) => p.id !== post.id) // Exclude current post
    .filter(
      (p) =>
        p.category === post.category ||
        p.tags.some((tag) => post.tags.includes(tag))
    )
    .slice(0, 2) // Get up to 2 related posts

  // Parse markdown content
  const htmlContent = marked.parse(post.content)

  return (
    <div className="py-16 md:py-24">
      {/* Header */}
      <div className="container mx-auto" ref={headerRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link
            href="/blog"
            className="text-muted-foreground hover:text-primary inline-flex items-center transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to all articles
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mb-12 max-w-4xl space-y-6"
        >
          <div>
            <span className="bg-primary/10 text-primary inline-block rounded-full px-3 py-1 text-xs font-medium">
              {post.category}
            </span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            {post.title}
          </h1>

          <div className="text-muted-foreground flex flex-wrap items-center gap-6 text-sm">
            <div className="flex items-center">
              <div className="relative mr-3 h-10 w-10 overflow-hidden rounded-full">
                <Image
                  src={post.author.avatar || '/placeholder.svg'}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="text-foreground font-medium">
                  {post.author.name}
                </div>
                <div className="text-xs">{post.author.role}</div>
              </div>
            </div>

            <div className="flex items-center">
              <Calendar className="mr-1 h-4 w-4" />
              <span>{post.date}</span>
            </div>

            <div className="flex items-center">
              <Clock className="mr-1 h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Featured Image */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="container mx-auto mb-12"
      >
        <div className="relative h-[300px] overflow-hidden rounded-xl md:h-[500px]">
          <Image
            src={post.image || '/placeholder.svg'}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
      </motion.div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Social Sharing (Desktop) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:col-span-1 lg:block"
          >
            <div className="sticky top-24 space-y-4">
              <div className="text-muted-foreground mb-2 text-sm font-medium">
                Share
              </div>
              <div className="space-y-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 rounded-full"
                >
                  <Facebook className="h-5 w-5 text-[#1877F2]" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 rounded-full"
                >
                  <Twitter className="h-5 w-5 text-[#1DA1F2]" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 rounded-full"
                >
                  <Linkedin className="h-5 w-5 text-[#0A66C2]" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 rounded-full"
                >
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-8"
          >
            <div className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
            </div>

            {/* Tags */}
            <div className="mt-12 border-t pt-6">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                    className="hover:bg-primary hover:border-primary inline-block rounded-full border border-gray-200 px-3 py-1 text-sm transition-colors hover:text-white"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>

            {/* Author Bio */}
            <div className="mt-12 rounded-xl bg-gray-50 p-6">
              <div className="flex items-center">
                <div className="relative mr-4 h-16 w-16 overflow-hidden rounded-full">
                  <Image
                    src={post.author.avatar || '/placeholder.svg'}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{post.author.name}</h3>
                  <p className="text-muted-foreground text-sm">
                    {post.author.role}
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground mt-4">
                {post.author.name} is a {post.author.role} at Digitspot with
                expertise in AWS cloud solutions and digital transformation
                strategies. With years of experience helping businesses leverage
                cloud technologies, they provide valuable insights and practical
                advice for organizations at any stage of their cloud journey.
              </p>
            </div>

            {/* Social Sharing (Mobile) */}
            <div className="mt-8 lg:hidden">
              <div className="text-muted-foreground mb-3 text-sm font-medium">
                Share this article
              </div>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 rounded-full"
                >
                  <Facebook className="h-5 w-5 text-[#1877F2]" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 rounded-full"
                >
                  <Twitter className="h-5 w-5 text-[#1DA1F2]" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 rounded-full"
                >
                  <Linkedin className="h-5 w-5 text-[#0A66C2]" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 rounded-full"
                >
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="lg:col-span-3"
          >
            {/* Related Articles */}
            <div className="sticky top-24">
              <h3 className="mb-6 text-lg font-semibold">Related Articles</h3>
              <div className="space-y-6">
                {relatedPosts.map((relatedPost) => (
                  <div key={relatedPost.id} className="group">
                    <Link href={`/blog/${relatedPost.id}`}>
                      <div className="space-y-3">
                        <div className="relative h-40 overflow-hidden rounded-lg">
                          <Image
                            src={relatedPost.image || '/placeholder.svg'}
                            alt={relatedPost.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <h4 className="group-hover:text-primary font-medium transition-colors">
                          {relatedPost.title}
                        </h4>
                        <div className="text-muted-foreground flex items-center text-xs">
                          <Calendar className="mr-1 h-3 w-3" />
                          <span>{relatedPost.date}</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>

              {/* Newsletter Signup */}
              <div className="mt-12 rounded-xl bg-gray-50 p-6">
                <h3 className="mb-2 text-lg font-semibold">
                  Subscribe to Our Newsletter
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Get the latest insights and updates delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full rounded-md border border-gray-300 px-3 py-2"
                  />
                  <Button className="w-full">Subscribe</Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* More Articles */}
      <div className="container mx-auto mt-24">
        <h2 className="mb-8 text-2xl font-bold">More Articles</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {getAllBlogPosts()
            .filter((p) => p.id !== post.id)
            .slice(0, 3)
            .map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/blog/${post.id}`} className="block">
                  <div className="space-y-4">
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <Image
                        src={post.image || '/placeholder.svg'}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div>
                      <span className="bg-primary/10 text-primary inline-block rounded-full px-3 py-1 text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="group-hover:text-primary text-xl font-bold transition-colors">
                      {post.title}
                    </h3>
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
                  </div>
                </Link>
              </motion.article>
            ))}
        </div>
      </div>
    </div>
  )
}
