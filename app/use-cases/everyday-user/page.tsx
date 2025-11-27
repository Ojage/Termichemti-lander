'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { CheckIcon } from '@/components/Icons'

export default function EverydayUserPage() {
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
              For Everyday Users
            </h1>
            <p className="text-xl text-gray-dark leading-relaxed">
              No more asking "what's the Wi-Fi password again?" in your own
              home. View and share your saved passwords with ease.
            </p>

            <div className="mt-12 space-y-6">
              <div className="bg-gray-light border border-gray-300 rounded-xl p-6">
                <h2 className="text-2xl font-display font-semibold text-primary mb-4">
                  Simple & Intuitive
                </h2>
                <ul className="space-y-3 text-gray-dark">
                  {[
                    'See all your saved Wi-Fi networks in one place',
                    'Recover forgotten passwords instantly',
                    'Share passwords with guests easily',
                    'No technical knowledge required',
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
                  Common Scenarios
                </h2>
                <div className="space-y-4 text-gray-dark">
                  <p>
                    <strong className="text-primary">Home Network:</strong>{' '}
                    You've saved your home Wi-Fi password years ago and can't
                    remember it. Termichemti shows it instantly so you can share
                    it with guests or reconnect devices.
                  </p>
                  <p>
                    <strong className="text-primary">Multiple Networks:</strong>{' '}
                    See all the networks you've connected to (home, office,
                    coffee shops) and their passwords in one organized view.
                  </p>
                  <p>
                    <strong className="text-primary">New Device Setup:</strong>{' '}
                    When setting up a new laptop or phone, quickly find and copy
                    your Wi-Fi password without hunting through router settings.
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
