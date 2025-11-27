import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Termichemti | Your Wi-Fi, Unlocked',
  description: 'A desktop companion that reveals your saved Wi-Fi passwords, scans nearby networks, and helps you connect smarter on Windows and Linux.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}
