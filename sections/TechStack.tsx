'use client'

import { motion } from 'framer-motion'

const technologies = [
  { name: 'Electron', description: 'Cross-platform desktop framework' },
  { name: 'Node.js', description: 'Runtime environment' },
  { name: 'React', description: 'UI framework' },
  { name: 'netsh / nmcli', description: 'System network tools' },
]

const features = [
  'Cross-platform desktop app',
  'System-level Wi-Fi integration',
  'Secure password handling',
  'Modern, maintainable codebase',
]

export default function TechStack() {
  return (
    <section
      id="tech"
      className="relative py-24 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-wifi-dark to-wifi-navy/30" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-display font-bold text-center mb-16"
        >
          <span className="text-white">Built with</span>{' '}
          <span className="text-wifi-cyan">modern tools</span>
        </motion.h2>

        {/* Tech Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-wifi-navy/50 backdrop-blur-sm border border-wifi-cyan/20 rounded-xl p-6 text-center"
            >
              <div className="text-2xl font-display font-bold text-wifi-cyan mb-2">
                {tech.name}
              </div>
              <div className="text-sm text-gray-400">{tech.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Features List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <ul className="grid md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.li
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="flex items-center gap-3 text-gray-300"
              >
                <div className="w-2 h-2 bg-wifi-green rounded-full" />
                {feature}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

