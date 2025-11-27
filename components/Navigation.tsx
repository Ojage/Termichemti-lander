'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { label: 'Features', href: '/#features', isHash: true },
  { label: 'How It Works', href: '/#how-it-works', isHash: true },
]

const useCases = [
  { label: 'IT Support', href: '/use-cases/it-support' },
  { label: 'Power User', href: '/use-cases/power-user' },
  { label: 'Everyday User', href: '/use-cases/everyday-user' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isUseCasesOpen, setIsUseCasesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsUseCasesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
    setIsMobileMenuOpen(false)
  }

  const handleNavClick = (href: string, isHash: boolean) => {
    if (isHash) {
      if (pathname !== '/') {
        window.location.href = href
      } else {
        scrollToSection(href)
      }
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/">
            <motion.h1
              className="text-2xl font-display hover:text-primary-dark transition-colors cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <strong>Ojage</strong> <span>Termichemti</span>
            </motion.h1>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.button
                key={item.href}
                onClick={() => handleNavClick(item.href, item.isHash || false)}
                className="text-sm text-gray-dark hover:text-primary transition-colors relative"
                whileHover={{ y: -2 }}
              >
                {item.label}
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.button>
            ))}

            {/* Use Cases Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <motion.button
                onMouseEnter={() => setIsUseCasesOpen(true)}
                onMouseLeave={() => setIsUseCasesOpen(false)}
                onClick={() => setIsUseCasesOpen(!isUseCasesOpen)}
                className="text-sm text-gray-dark hover:text-primary transition-colors relative flex items-center gap-1"
                whileHover={{ y: -2 }}
              >
                Use Cases
                <svg
                  className={`w-4 h-4 transition-transform ${
                    isUseCasesOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.button>

              <AnimatePresence>
                {isUseCasesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    onMouseEnter={() => setIsUseCasesOpen(true)}
                    onMouseLeave={() => setIsUseCasesOpen(false)}
                    className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden"
                  >
                    {useCases.map((useCase) => (
                      <Link key={useCase.href} href={useCase.href}>
                        <motion.div
                          className="px-4 py-3 text-sm text-gray-dark hover:text-primary hover:bg-gray-light transition-colors"
                          whileHover={{ x: 4 }}
                        >
                          {useCase.label}
                        </motion.div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Pricing */}
            <Link href="/pricing">
              <motion.button
                className="text-sm text-gray-dark hover:text-primary transition-colors relative"
                whileHover={{ y: -2 }}
              >
                Pricing
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.button>
            </Link>

            <Link href="/#download">
              <motion.button
                onClick={() => handleNavClick('#download', true)}
                className="px-6 py-2 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-primary"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href, item.isHash || false)}
                  className="block w-full text-left text-gray-dark hover:text-primary transition-colors py-2"
                >
                  {item.label}
                </button>
              ))}
              <div className="space-y-2">
                <div className="text-xs text-gray uppercase tracking-wider mb-2">
                  Use Cases
                </div>
                {useCases.map((useCase) => (
                  <Link key={useCase.href} href={useCase.href}>
                    <div
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-gray-dark hover:text-primary transition-colors py-2 pl-4"
                    >
                      {useCase.label}
                    </div>
                  </Link>
                ))}
              </div>
              <Link href="/pricing">
                <div
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-gray-dark hover:text-primary transition-colors py-2"
                >
                  Pricing
                </div>
              </Link>
              <button
                onClick={() => handleNavClick('#download', true)}
                className="w-full px-6 py-2 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-colors"
              >
                Download
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
