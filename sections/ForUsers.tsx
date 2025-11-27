'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const personas = [
  {
    id: 'it-support',
    label: 'IT Support',
    description:
      'Recover Wi-Fi passwords during support visits without hunting through system menus. Quick access to network information saves time and reduces frustration.',
  },
  {
    id: 'power-user',
    label: 'Power User',
    description:
      'Skip the command line when you just need a quick network overview. Termichemti gives you the power of netsh and nmcli without the syntax headaches.',
  },
  {
    id: 'everyday-user',
    label: 'Everyday User',
    description:
      "No more asking 'what's the Wi-Fi password again?' in your own home. View and share your saved passwords with ease.",
  },
]

export default function ForUsers() {
  const [activePersona, setActivePersona] = useState(personas[0].id)

  const activeContent = personas.find((p) => p.id === activePersona)

  return (
    <section className="relative py-24 overflow-hidden bg-white">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-display font-bold text-center mb-16"
        >
          <span className="text-black">For Hackers,</span>{' '}
          <span className="text-primary">Admins, and Humans</span>
        </motion.h2>

        {/* Persona Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {personas.map((persona) => (
            <motion.button
              key={persona.id}
              onClick={() => setActivePersona(persona.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activePersona === persona.id
                  ? 'bg-black text-white'
                  : 'bg-gray-light text-gray-dark border border-gray-300'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {persona.label}
            </motion.button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {activeContent && (
            <motion.div
              key={activePersona}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-light border border-gray-300 rounded-2xl p-8 md:p-12 text-center"
            >
              <p className="text-xl md:text-2xl text-gray-dark leading-relaxed">
                {activeContent.description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
