'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { CheckIcon } from '@/components/Icons'

export default function ITSupportPage() {
  return (
    <main className="relative min-h-screen bg-white">
      <Navigation />
      <div className="pt-24 pb-24">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold text-primary mb-6">
              For IT Support
            </h1>
            <p className="text-xl text-gray-dark leading-relaxed">
              Recover Wi-Fi passwords during support visits without hunting
              through system menus. Quick access to network information saves
              time and reduces frustration.
            </p>

            <div className="mt-12 space-y-6">
              <div className="bg-gray-light border border-gray-300 rounded-xl p-6">
                <h2 className="text-2xl font-display font-semibold text-primary mb-4">
                  Key Benefits
                </h2>
                <ul className="space-y-3 text-gray-dark">
                  {[
                    'Instantly view all saved Wi-Fi networks on any Windows or Linux machine',
                    'Reveal passwords without navigating complex system settings',
                    'Copy passwords directly to clipboard for quick sharing',
                    'Scan and connect to networks during troubleshooting',
                  ].map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckIcon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-light border border-gray-300 rounded-xl p-6">
                <h2 className="text-2xl font-display font-semibold text-primary mb-4">
                  Use Case Scenarios
                </h2>
                <div className="space-y-4 text-gray-dark">
                  <p>
                    <strong className="text-primary">On-site Support:</strong>{' '}
                    When visiting a client’s office, quickly access their
                    Wi-Fi credentials without asking them to dig through router
                    settings or remember passwords.
                  </p>
                  <p>
                    <strong className="text-primary">Remote Troubleshooting:</strong>{' '}
                    Guide users to install Termichemti and share their network
                    information securely, making remote support more efficient.
                  </p>
                  <p>
                    <strong className="text-primary">Network Audits:</strong>{' '}
                    Quickly identify all configured networks on a system and their
                    security types for security assessments.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <a
                href="/#download"
                className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-full text-lg hover:bg-primary-dark transition-colors"
              >
                Download Termichemti
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
