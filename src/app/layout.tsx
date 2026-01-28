import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TheLab Blog - Articles on Crisis Management, AI, Healthcare & Environment',
  description: 'Publishing articles and interviews about firms in emergency crisis management, disaster management, healthcare, and environment sectors, particularly those using AI.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-gray-900 text-white py-8 mt-20">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2024 TheLab Blog. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
