'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-semibold text-sm mb-4">
            AI-Powered disaster relief Platform
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-4">
            TheLab
          </h1>
          <p className="text-3xl text-gray-700 mb-8 font-semibold">
            Transform Disaster Response with ResilienceAI
          </p>
          <div className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed space-y-6">
            <p className="text-xl">
              <strong>ResilienceAI</strong> is the world&apos;s first AI platform designed specifically for at-risk territories. Reduce recovery time by <strong className="text-blue-600">30-50%</strong> and costs by <strong className="text-blue-600">20-40%</strong> through intelligent disaster relief.
            </p>
            <p>
              We combine <strong>real-time data streaming</strong>, <strong>satellite damage assessment</strong>, <strong>geospatial intelligence</strong>, and <strong>multi-LLM reasoning</strong> to deliver actionable insights for disaster response, recovery planning, and long-term resilience building.
            </p>
            <p>
              Through <strong>The Lab AI</strong> and <strong>The Lab Data</strong>, we empower governments, NGOs, and organizations to make better decisions faster in high-stakes environments—100% GDPR compliant with European data sovereignty.
            </p>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/resilience-ai"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg transform hover:-translate-y-1"
            >
              Explore ResilienceAI
            </Link>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white border-2 border-blue-600 text-blue-600 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all"
            >
              Request a Demo
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Quick Links Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            {
              title: 'ResilienceAI Platform',
              description: 'Our flagship AI-powered disaster relief solution',
              color: 'from-blue-600 to-purple-600',
              href: '/resilience-ai'
            },
            {
              title: 'About TheLab',
              description: 'Our mission, team, and vision for resilient communities',
              color: 'from-indigo-500 to-indigo-600',
              href: '/about'
            },
            {
              title: 'The Lab AI',
              description: 'AI-powered solutions for entrepreneurs',
              color: 'from-purple-500 to-purple-600',
              href: '/lab-ai'
            },
            {
              title: 'The Lab Data',
              description: 'Data integration & analytics services',
              color: 'from-teal-500 to-teal-600',
              href: '/lab-data'
            },
            {
              title: 'Browse Articles',
              description: 'Read our latest insights & case studies',
              color: 'from-orange-500 to-orange-600',
              href: '/articles'
            },
            {
              title: 'Get in Touch',
              description: 'Request a demo or partnership inquiry',
              color: 'from-green-500 to-green-600',
              href: '/contact'
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              {item.href ? (
                <Link
                  href={item.href}
                  className={`block p-6 rounded-xl bg-gradient-to-br ${item.color} text-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 h-full`}
                >
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-white/90 text-sm">{item.description}</p>
                </Link>
              ) : (
                <div className={`p-6 rounded-xl bg-gradient-to-br ${item.color} text-white shadow-lg h-full`}>
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-white/90 text-sm">{item.description}</p>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  )
}
