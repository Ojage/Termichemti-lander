'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Install Termichemti',
    description:
      'Desktop app for Windows and Linux, built on Electron. Download and run the installer.',
    icon: '⬇️',
  },
  {
    number: '02',
    title: 'Let It Discover Your Wi-Fi World',
    description:
      'The app lists your saved networks and nearby signals automatically.',
    icon: '🔍',
  },
  {
    number: '03',
    title: 'View, Copy, Connect',
    description:
      'Reveal passwords, copy them, and connect securely with a single click.',
    icon: '✨',
  },
]

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-24 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-wifi-dark via-wifi-navy/50 to-wifi-dark" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-display font-bold text-center mb-16"
        >
          <span className="text-white">How It Works</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-wifi-cyan to-transparent z-0" />
              )}

              {/* Step content */}
              <div className="relative z-10 bg-wifi-navy/50 backdrop-blur-sm border border-wifi-cyan/20 rounded-2xl p-8 h-full">
                {/* Pulse effect */}
                <motion.div
                  className="absolute -top-4 -left-4 w-16 h-16 bg-wifi-cyan/20 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                />

                <div className="text-5xl mb-4">{step.icon}</div>
                <div className="text-wifi-cyan/50 text-sm font-mono mb-2">
                  {step.number}
                </div>
                <h3 className="text-2xl font-display font-semibold text-wifi-cyan mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {step.description}
                </p>

                {/* Data flow indicator */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="absolute -right-6 top-1/2 -translate-y-1/2 hidden md:block"
                    animate={{
                      x: [0, 10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  >
                    <div className="w-3 h-3 bg-wifi-green rounded-full" />
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

