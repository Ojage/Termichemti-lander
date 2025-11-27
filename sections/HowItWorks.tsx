'use client'

import { motion } from 'framer-motion'
import { DownloadIcon, SearchIcon, CheckIcon } from '@/components/Icons'

const steps = [
  {
    number: '01',
    title: 'Install Termichemti',
    description:
      'Desktop app for Windows and Linux, built on Electron. Download and run the installer.',
    icon: DownloadIcon,
  },
  {
    number: '02',
    title: 'Let It Discover Your Wi-Fi World',
    description:
      'The app lists your saved networks and nearby signals automatically.',
    icon: SearchIcon,
  },
  {
    number: '03',
    title: 'View, Copy, Connect',
    description:
      'Reveal passwords, copy them, and connect securely with a single click.',
    icon: CheckIcon,
  },
]

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
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
          How It Works
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
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
                  <div className="hidden md:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent z-0" />
                )}

                {/* Step content */}
                <div className="relative z-10 bg-gray-light border border-gray-300 rounded-2xl p-8 h-full">
                  <div className="text-primary mb-4">
                    <IconComponent className="w-12 h-12" />
                  </div>
                  <div className="text-gray text-sm font-mono mb-2">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-display font-semibold text-black mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-dark leading-relaxed">
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
                      <div className="w-3 h-3 bg-primary rounded-full" />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
