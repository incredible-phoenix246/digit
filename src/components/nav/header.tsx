'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  Cloud,
  Network,
  Database,
  Cog,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import BlurImage from '../mis/blur-image'
import { usePathname } from 'next/navigation'
import { services } from '@/app/services/services-data'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const pathname = usePathname()
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [openCategory, setOpenCategory] = useState<string | null>(null)

  const toggleCategory = (category: string) => {
    setOpenCategory(openCategory === category ? null : category)
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setServicesDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    setServicesDropdownOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!servicesDropdownOpen) {
      setOpenCategory(null)
    }
  }, [servicesDropdownOpen])

  const toggleMenu = () => setIsOpen(!isOpen)
  const toggleServicesDropdown = () => {
    setServicesDropdownOpen(!servicesDropdownOpen)
  }

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    {
      name: 'Services',
      path: '/services',
      hasDropdown: true,
      dropdownAction: toggleServicesDropdown,
    },
    { name: 'Blog', path: '/blog' },
  ]

  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: 'easeInOut', staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      },
    }),
  }

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, height: 0 },
    visible: {
      opacity: 1,
      y: 0,
      height: 'auto',
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      y: -10,
      height: 0,
      transition: { duration: 0.2 },
    },
  }

  // Group services by category
  const servicesByCategory = services.reduce(
    (acc: Record<string, typeof services>, service) => {
      const category = service.category
      if (!acc[category]) {
        acc[category] = []
      }
      acc[category].push(service)
      return acc
    },
    {}
  )

  // AWS services
  const awsServices = [
    {
      id: 'ec2',
      title: 'Amazon EC2',
      icon: <Cloud className="h-5 w-5 text-orange-500" />,
    },
    {
      id: 's3',
      title: 'Amazon S3',
      icon: <Database className="h-5 w-5 text-orange-500" />,
    },
    {
      id: 'lambda',
      title: 'AWS Lambda',
      icon: <Cog className="h-5 w-5 text-orange-500" />,
    },
    {
      id: 'rds',
      title: 'Amazon RDS',
      icon: <Database className="h-5 w-5 text-orange-500" />,
    },
    {
      id: 'cloudfront',
      title: 'CloudFront',
      icon: <Network className="h-5 w-5 text-orange-500" />,
    },
    {
      id: 'route53',
      title: 'Route 53',
      icon: <Network className="h-5 w-5 text-orange-500" />,
    },
  ]

  // Add AWS services to the categories
  const allServicesByCategory = {
    ...servicesByCategory,
    'AWS SERVICES': awsServices,
  }

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 px-4 py-4 shadow-sm backdrop-blur-sm md:px-8">
      <div className="">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link href="/" className="flex items-center">
              <BlurImage
                src="/logo.JPG"
                alt=""
                width={910}
                height={240}
                className="max-w-[150px]"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden items-center space-x-6 md:flex"
            ref={dropdownRef}
          >
            {menuItems.map((item, index) => {
              const isActive =
                pathname === item.path ||
                (item.path !== '/' && pathname.startsWith(item.path))
              const isServicesItem = item.name === 'Services'

              return (
                <motion.div
                  key={item.name}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  {item.hasDropdown ? (
                    <button
                      onClick={item.dropdownAction}
                      className={cn(
                        'flex items-center text-sm font-medium',
                        isActive
                          ? 'text-blue-500'
                          : 'text-gray-600 hover:text-gray-900'
                      )}
                    >
                      {isActive && (
                        <motion.span
                          className="mr-1 text-blue-500"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          •
                        </motion.span>
                      )}
                      {item.name}
                      <ChevronDown
                        size={16}
                        className={cn(
                          'ml-1 transition-transform duration-200',
                          servicesDropdownOpen ? 'rotate-180' : 'rotate-0'
                        )}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.path}
                      className={cn(
                        'text-sm font-medium',
                        isActive
                          ? 'text-blue-500'
                          : 'text-gray-600 hover:text-gray-900'
                      )}
                    >
                      {isActive && (
                        <motion.span
                          className="mr-1 text-blue-500"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          •
                        </motion.span>
                      )}
                      {item.name}
                    </Link>
                  )}

                  {/* Combined Services Dropdown */}
                  {isServicesItem && (
                    <AnimatePresence>
                      {servicesDropdownOpen && (
                        <motion.div
                          variants={dropdownVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="absolute top-full left-0 mt-2 w-[320px] rounded-lg bg-white p-4 shadow-lg"
                        >
                          {Object.entries(allServicesByCategory).map(
                            ([category, categoryServices]) => (
                              <div key={category} className="mb-4 last:mb-0">
                                <button
                                  onClick={() => toggleCategory(category)}
                                  className="mb-2 flex w-full items-center justify-between text-xs font-semibold text-gray-500 hover:text-gray-700"
                                >
                                  <span>{category}</span>
                                  <ChevronDown
                                    size={16}
                                    className={cn(
                                      'transition-transform duration-200',
                                      openCategory === category
                                        ? 'rotate-180'
                                        : 'rotate-0'
                                    )}
                                  />
                                </button>
                                <AnimatePresence>
                                  {openCategory === category && (
                                    <motion.div
                                      initial={{ opacity: 0, height: 0 }}
                                      animate={{ opacity: 1, height: 'auto' }}
                                      exit={{ opacity: 0, height: 0 }}
                                      transition={{ duration: 0.2 }}
                                      className="grid gap-2"
                                    >
                                      {categoryServices.map((service) => {
                                        const isAwsService =
                                          category === 'AWS SERVICES'
                                        const serviceUrl = isAwsService
                                          ? `/aws/${service.id}`
                                          : `/services/${service.id}`

                                        return (
                                          <Link
                                            key={service.id}
                                            href={serviceUrl}
                                            className="flex items-center gap-2 rounded-md p-2 text-sm text-gray-700 transition-colors hover:bg-gray-50 hover:text-blue-500"
                                          >
                                            <div className="flex h-8 w-8 items-center justify-center rounded-md">
                                              {service.icon}
                                            </div>
                                            <span>{service.title}</span>
                                          </Link>
                                        )
                                      })}
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            )
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </motion.div>
              )
            })}
          </motion.nav>

          {/* Right Side Actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-4"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-900 md:hidden"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="hidden md:block"
            >
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="flex cursor-pointer items-center space-x-2 rounded border border-gray-300 px-4 py-2 transition-colors hover:bg-gray-100"
              >
                <Link
                  href="/contact"
                  className="flex w-full items-center gap-1 text-sm font-medium"
                >
                  <span className="text-sm font-medium">Contact Us</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: 'mirror',
                      duration: 1.5,
                      ease: 'easeInOut',
                    }}
                  >
                    <ArrowRight size={16} />
                  </motion.div>
                </Link>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={menuVariants}
              className="fixed inset-0 z-50 bg-white pt-20 backdrop-blur-sm md:hidden"
            >
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                onClick={toggleMenu}
                className="absolute top-6 right-6 z-50 rounded-full bg-[#1E90FF] p-2 text-white shadow-md"
                aria-label="Close menu"
                whileHover={{ scale: 1.1, backgroundColor: '#1478DB' }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={24} />
              </motion.button>
              <motion.div className="flex max-h-[calc(100vh-5rem)] flex-col items-center space-y-6 overflow-y-auto bg-white p-6">
                {menuItems.map((item, index) => {
                  const isActive =
                    pathname === item.path ||
                    (item.path !== '/' && pathname.startsWith(item.path))
                  const isServicesItem = item.name === 'Services'

                  return (
                    <motion.div
                      key={item.name}
                      custom={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: { delay: index * 0.1, duration: 0.4 },
                      }}
                      exit={{
                        opacity: 0,
                        y: 10,
                        transition: { duration: 0.2 },
                      }}
                      className="w-full"
                    >
                      {item.hasDropdown ? (
                        <div className="w-full">
                          <button
                            onClick={item.dropdownAction}
                            className={cn(
                              'flex w-full items-center justify-between border-b border-gray-100 py-3 text-xl font-medium',
                              isActive
                                ? 'border-blue-500 text-blue-500'
                                : 'text-gray-700 hover:border-blue-300 hover:text-blue-500'
                            )}
                          >
                            <span>{item.name}</span>
                            <ChevronDown
                              size={20}
                              className={cn(
                                'transition-transform duration-200',
                                servicesDropdownOpen ? 'rotate-180' : 'rotate-0'
                              )}
                            />
                          </button>

                          {/* Mobile Combined Services Dropdown */}
                          {isServicesItem && servicesDropdownOpen && (
                            <div className="mt-2 mb-4 ml-4 space-y-4">
                              {Object.entries(allServicesByCategory).map(
                                ([category, categoryServices]) => (
                                  <div key={category} className="mb-3">
                                    <button
                                      onClick={() => toggleCategory(category)}
                                      className="mb-2 flex w-full items-center justify-between text-xs font-semibold text-gray-500 hover:text-gray-700"
                                    >
                                      <span>{category}</span>
                                      <ChevronDown
                                        size={16}
                                        className={cn(
                                          'transition-transform duration-200',
                                          openCategory === category
                                            ? 'rotate-180'
                                            : 'rotate-0'
                                        )}
                                      />
                                    </button>
                                    <AnimatePresence>
                                      {openCategory === category && (
                                        <motion.div
                                          initial={{ opacity: 0, height: 0 }}
                                          animate={{
                                            opacity: 1,
                                            height: 'auto',
                                          }}
                                          exit={{ opacity: 0, height: 0 }}
                                          transition={{ duration: 0.2 }}
                                          className="grid gap-2"
                                        >
                                          {categoryServices.map((service) => {
                                            const isAwsService =
                                              category === 'AWS SERVICES'
                                            const serviceUrl = isAwsService
                                              ? `/aws/${service.id}`
                                              : `/services/${service.id}`

                                            return (
                                              <Link
                                                key={service.id}
                                                href={serviceUrl}
                                                onClick={() => setIsOpen(false)}
                                                className="flex items-center gap-2 rounded-md py-2 text-sm text-gray-700 transition-colors hover:text-blue-500"
                                              >
                                                <div className="flex h-7 w-7 items-center justify-center rounded-md">
                                                  {service.icon}
                                                </div>
                                                <span>{service.title}</span>
                                              </Link>
                                            )
                                          })}
                                        </motion.div>
                                      )}
                                    </AnimatePresence>
                                  </div>
                                )
                              )}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link
                          href={item.path}
                          className={cn(
                            'block w-full border-b border-gray-100 py-3 text-center text-xl font-medium',
                            isActive
                              ? 'border-blue-500 text-blue-500'
                              : 'text-gray-700 hover:border-blue-300 hover:text-blue-500'
                          )}
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )}
                    </motion.div>
                  )
                })}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    transition: {
                      delay: menuItems.length * 0.1,
                      duration: 0.4,
                    },
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    transition: { duration: 0.2 },
                  }}
                  className="w-full pt-4"
                >
                  <button className="flex w-full items-center justify-center space-x-2 rounded-lg bg-[#1E90FF] px-6 py-3 text-white transition-colors hover:bg-[#1478DB]">
                    <Link
                      href="/contact"
                      onClick={() => setIsOpen(false)}
                      className="flex w-full items-center justify-center gap-1 text-sm font-medium"
                    >
                      <span className="text-base font-medium">Contact Us</span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: 'mirror',
                          duration: 1.5,
                          ease: 'easeInOut',
                        }}
                      >
                        <ArrowRight size={18} />
                      </motion.div>
                    </Link>
                  </button>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
