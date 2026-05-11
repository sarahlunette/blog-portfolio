'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

// Article list based on the files in public/articles
const articles = [
  {
    slug: 'califrais',
    title: 'Califrais',
    language: 'French',
    fileName: 'Califrais_(French_Version).html'
  },
  {
    slug: 'callendar',
    title: 'Callendar',
    language: 'French',
    fileName: 'Callendar_(French_Version).html'
  },
  {
    slug: 'chatgpt-hro',
    title: 'ChatGPT HRO',
    language: 'French',
    fileName: 'Chatgpt_HRO(French_Version).html'
  },
  {
    slug: 'chatgpt-ics',
    title: 'ChatGPT ICS',
    language: 'French',
    fileName: 'Chatgpt_ICS_(French_Version).html'
  },
  {
    slug: 'ecoact',
    title: 'EcoAct',
    language: 'French',
    fileName: 'EcoAct_(French_Version).html'
  },
  {
    slug: 'highwind',
    title: 'HighWind',
    language: 'French',
    fileName: 'HighWind_(French_Version).html'
  },
  {
    slug: 'marc',
    title: 'Marc',
    language: 'French',
    fileName: 'Marc_(French_Version).html'
  },
  {
    slug: 'ministere-amenagement',
    title: 'Ministère de l\'aménagement du territoire',
    language: 'French',
    fileName: 'Ministère_de_l\'aménagement_du_territoire(French_Version).html'
  },
  {
    slug: 'baobab',
    title: 'Post Baobab',
    language: 'English',
    fileName: 'Post_Baobab_(English_Version).html'
  },
  {
    slug: 'solene-baobab',
    title: 'Solène de Baobab Tech',
    language: 'French',
    fileName: 'Solène_de_Baobab_Tech_(French_Version).html'
  },
  {
    slug: 'tech-across-years',
    title: 'Tech Across Years',
    language: 'French',
    fileName: 'Tech_accross_years.html'
  },
]

export default function ArticlesPage() {
  const [selectedLanguage, setSelectedLanguage] = useState<'All' | 'French' | 'English'>('All')

  const filteredArticles = articles.filter(article =>
    selectedLanguage === 'All' || article.language === selectedLanguage
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4 text-center">
            Articles
          </h1>
          <p className="text-xl text-gray-600 mb-8 text-center max-w-2xl mx-auto">
            Explore our collection of articles on disaster relief, AI in healthcare, and environmental solutions.
          </p>

          {/* Language Filter */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-lg shadow-md p-2 inline-flex gap-2">
              {(['All', 'French', 'English'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setSelectedLanguage(lang)}
                  className={`px-6 py-2 rounded-md font-medium transition-all ${
                    selectedLanguage === lang
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {lang === 'All' ? 'All Languages' : lang}
                </button>
              ))}
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article, index) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <Link
                  href={`/articles/${article.slug}`}
                  className="block bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 p-6 h-full"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">
                      {article.title}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      article.language === 'French'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {article.language}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Click to read the full article
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No articles found for the selected language.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}
