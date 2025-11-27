'use client'

import { motion } from 'framer-motion'

export default function Download() {
  return (
    <section
      id="download"
      className="relative py-24 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-wifi-navy/30 to-wifi-dark" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-wifi-cyan rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-wifi-violet rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
        >
          <span className="text-white">Ready to take control</span>{' '}
          <span className="text-wifi-cyan">of your Wi-Fi?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-12"
        >
          Download Termichemti and bring your networks into view.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
        >
          <motion.a
            href="#"
            className="px-8 py-4 bg-wifi-cyan text-wifi-dark font-semibold rounded-full text-lg hover:bg-wifi-green transition-colors inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download for Windows (.exe)
          </motion.a>
          <motion.button
            disabled
            className="px-8 py-4 bg-wifi-navy/50 text-gray-500 font-semibold rounded-full text-lg border border-wifi-cyan/20 cursor-not-allowed"
          >
            Linux builds coming soon
          </motion.button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-sm text-gray-500"
        >
          System requirements: Windows 10+ or Linux with NetworkManager
        </motion.p>
      </div>
    </section>
  )
}

