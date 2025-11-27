'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const features = [
  {
    icon: '📡',
    title: 'See Saved Networks',
    description:
      'List all Wi-Fi networks your computer remembers in one clean view.',
  },
  {
    icon: '🔓',
    title: 'Reveal Passwords Securely',
    description:
      'Recover forgotten Wi-Fi passwords and copy them with a click.',
  },
  {
    icon: '🔍',
    title: 'Scan & Connect',
    description:
      'Scan nearby networks, see signal strength, and connect directly from the app.',
  },
  {
    icon: '🛡️',
    title: 'Security Awareness',
    description:
      'See which networks are open, WPA, or WPA2 so you know what you\'re joining.',
  },
]

export default function Features() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section
      id="features"
      className="relative py-24 overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-wifi-dark via-wifi-navy/50 to-wifi-dark" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-wifi-cyan rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-wifi-violet rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-display font-bold text-center mb-16"
        >
          <span className="text-white">Control your Wi-Fi</span>{' '}
          <span className="text-wifi-cyan">without the terminal</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
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
                className="bg-wifi-navy/50 backdrop-blur-sm border border-wifi-cyan/20 rounded-2xl p-6 h-full transition-all duration-300"
                whileHover={{ y: -8, borderColor: 'rgba(0, 240, 255, 0.5)' }}
              >
                {/* Wi-Fi pulse effect on hover */}
                {hoveredIndex === index && (
                  <motion.div
                    className="absolute -top-2 -right-2 w-4 h-4 bg-wifi-cyan rounded-full"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}

                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-display font-semibold text-wifi-cyan mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Particle effect */}
                {hoveredIndex === index && (
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-wifi-green rounded-full"
                        style={{
                          left: `${20 + i * 15}%`,
                          top: `${30 + (i % 2) * 40}%`,
                        }}
                        animate={{
                          y: [0, -20, 0],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

