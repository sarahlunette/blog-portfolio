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
          <h1 className="text-6xl font-bold text-gray-900 mb-4">
            TheLab Blog
          </h1>
          <p className="text-2xl text-gray-600 mb-8">
            Articles on Crisis Management, AI, Healthcare & Environment
          </p>
          <div className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed space-y-6">
            <p>
              Welcome to TheLab, where we transform disaster recovery and crisis management through AI-powered solutions and data-driven intelligence. We publish insightful articles and provide cutting-edge services in emergency response, disaster resilience, and innovative technology applications.
            </p>
            <p>
              Our mission is to bridge the critical gap between emergency response and sustainable reconstruction, empowering entrepreneurs, governments, and organizations with the tools to make better decisions faster in high-stakes environments.
            </p>
            <p>
              Through <strong>The Lab AI</strong> and <strong>The Lab Data</strong>, we offer comprehensive solutions combining artificial intelligence, multi-source data integration, and geospatial analytics to address some of the world&apos;s most pressing challenges in disaster resilience and crisis management.
            </p>
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
              title: 'The Lab AI',
              description: 'AI-powered solutions for entrepreneurs',
              color: 'from-purple-500 to-purple-600',
              href: '/lab-ai'
            },
            {
              title: 'The Lab Data',
              description: 'Data integration & analytics services',
              color: 'from-blue-500 to-blue-600',
              href: '/lab-data'
            },
            {
              title: 'Crisis Management',
              description: 'Emergency response & disaster preparedness',
              color: 'from-red-500 to-red-600'
            },
            {
              title: 'Healthcare AI',
              description: 'Innovation in medical technology',
              color: 'from-teal-500 to-teal-600'
            },
            {
              title: 'Environment',
              description: 'Sustainability & climate action',
              color: 'from-green-500 to-green-600'
            },
            {
              title: 'Browse Articles',
              description: 'Read our latest insights',
              color: 'from-orange-500 to-orange-600',
              href: '/articles'
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
