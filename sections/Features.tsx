'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import {
  WifiIcon,
  LockIcon,
  SearchIcon,
  ShieldIcon,
} from '@/components/Icons'

const features = [
  {
    icon: WifiIcon,
    title: 'See Saved Networks',
    description:
      'List all Wi-Fi networks your computer remembers in one clean view.',
  },
  {
    icon: LockIcon,
    title: 'Reveal Passwords Securely',
    description:
      'Recover forgotten Wi-Fi passwords and copy them with a click.',
  },
  {
    icon: SearchIcon,
    title: 'Scan & Connect',
    description:
      'Scan nearby networks, see signal strength, and connect directly from the app.',
  },
  {
    icon: ShieldIcon,
    title: 'Security Awareness',
    description:
      "See which networks are open, WPA, or WPA2 so you know what you're joining.",
  },
]

export default function Features() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section
      id="features"
      className="relative py-24 overflow-hidden bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-display font-bold text-center mb-16 text-black"
        >
          <span className="text-black">Control your Wi-Fi</span>{' '}
          <span className="text-primary">without the terminal</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative group"
              >
                <motion.div
                  className="bg-gray-light border border-gray-300 rounded-2xl p-6 h-full transition-all duration-300"
                  whileHover={{ y: -8, borderColor: '#2563eb' }}
                >
                  <div className="text-primary mb-4">
                    <IconComponent className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-black mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-dark text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
