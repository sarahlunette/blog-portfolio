import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TheLab - ResilienceAI: AI-Powered disaster relief Platform',
  description: 'ResilienceAI by TheLab: AI-powered disaster recovery platform for at-risk territories. Reduce recovery time by 30-50%, costs by 20-40%. Satellite damage assessment, geospatial intelligence, multi-LLM reasoning. GDPR compliant.',
  keywords: ['disaster recovery', 'disaster relief', 'AI platform', 'resilience planning', 'satellite imagery', 'geospatial intelligence', 'GDPR compliant', 'at-risk territories', 'climate resilience', 'emergency response'],
  authors: [{ name: 'Sarah LE NET' }],
  creator: 'TheLab',
  publisher: 'TheLab',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://thelabaidata.com',
    title: 'TheLab - ResilienceAI: AI-Powered disaster relief Platform',
    description: 'Transform disaster response with ResilienceAI. Reduce recovery time by 30-50% through AI-powered disaster relief for at-risk territories.',
    siteName: 'TheLab',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TheLab - ResilienceAI: AI-Powered disaster relief Platform',
    description: 'Transform disaster response with ResilienceAI. Reduce recovery time by 30-50% through AI-powered disaster relief.',
  },
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
