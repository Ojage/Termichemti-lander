'use client'

export default function Footer() {
  return (
    <footer className="bg-gray-light border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-primary font-display font-bold text-xl">
            Termichemti
          </div>
          <div className="flex gap-6 text-sm text-gray-dark">
            <a
              href="#"
              className="hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <a
              href="#"
              className="hover:text-primary transition-colors"
              aria-label="Privacy"
            >
              Privacy
            </a>
            <a
              href="#"
              className="hover:text-primary transition-colors"
              aria-label="Contact"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-gray">
          © {new Date().getFullYear()} Termichemti. Built for power users and
          humans.
        </div>
      </div>
    </footer>
  )
}
