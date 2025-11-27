'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { CheckIcon } from '@/components/Icons'

export default function PowerUserPage() {
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
              For Power Users
            </h1>
            <p className="text-xl text-gray-dark leading-relaxed">
              Skip the command line when you just need a quick network overview.
              Termichemti gives you the power of netsh and nmcli without the
              syntax headaches.
            </p>

            <div className="mt-12 space-y-6">
              <div className="bg-gray-light border border-gray-300 rounded-xl p-6">
                <h2 className="text-2xl font-display font-semibold text-primary mb-4">
                  Why Power Users Love It
                </h2>
                <ul className="space-y-3 text-gray-dark">
                  {[
                    'All the functionality of netsh/nmcli in a visual interface',
                    'No need to remember command syntax or flags',
                    'Quick network switching and password management',
                    'Signal strength visualization at a glance',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckIcon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-light border border-gray-300 rounded-xl p-6">
                <h2 className="text-2xl font-display font-semibold text-primary mb-4">
                  Perfect For
                </h2>
                <div className="space-y-4 text-gray-dark">
                  <p>
                    <strong className="text-primary">Developers:</strong>{' '}
                    Quickly switch between networks when moving between locations
                    or testing network-dependent applications.
                  </p>
                  <p>
                    <strong className="text-primary">Sysadmins:</strong>{' '}
                    Manage multiple network profiles across different systems
                    without opening a terminal each time.
                  </p>
                  <p>
                    <strong className="text-primary">Tech Enthusiasts:</strong>{' '}
                    Get detailed network information and manage connections with
                    the efficiency you expect from modern tools.
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
