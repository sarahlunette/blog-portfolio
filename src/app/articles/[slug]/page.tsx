'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'

// Article mapping (same as in articles page)
const articleMap: Record<string, { title: string; fileName: string }> = {
  'califrais': { title: 'Califrais', fileName: 'Califrais_(French_Version).html' },
  'chatgpt-hro': { title: 'ChatGPT HRO', fileName: 'Chatgpt_HRO(French_Version).html' },
  'chatgpt-ics': { title: 'ChatGPT ICS', fileName: 'Chatgpt_ICS_(French_Version).html' },
  'ecoact': { title: 'EcoAct', fileName: 'EcoAct_(French_Version).html' },
  'highwind': { title: 'HighWind', fileName: 'HighWind_(French_Version).html' },
  'marc': { title: 'Marc', fileName: 'Marc_(French_Version).html' },
  'ministere-amenagement': { title: 'Ministère de l\'aménagement du territoire', fileName: 'Ministère_de_l\'aménagement_du_territoire(French_Version).html' },
  'baobab': { title: 'Post Baobab', fileName: 'Post_Baobab_(English_Version).html' },
  'solene-baobab': { title: 'Solène de Baobab Tech', fileName: 'Solène_de_Baobab_Tech_(French_Version).html' },
  'tech-across-years': { title: 'Tech Across Years', fileName: 'Tech_accross_years.html' },
}

export default function ArticlePage() {
  const params = useParams()
  const slug = params.slug as string
  const [articleContent, setArticleContent] = useState<string>('')
  const [loading, setLoading] = useState(true)

  const article = articleMap[slug]

  useEffect(() => {
    if (article) {
      fetch(`/articles/${article.fileName}`)
        .then(res => res.text())
        .then(html => {
          setArticleContent(html)
          setLoading(false)
        })
        .catch(err => {
          console.error('Error loading article:', err)
          setLoading(false)
        })
    } else {
      setLoading(false)
    }
  }, [article])

  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <Link href="/articles" className="text-blue-600 hover:text-blue-800">
            Back to Articles
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/articles"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
          >
            ← Back to Articles
          </Link>

          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto">
            {loading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                <p className="text-gray-600 mt-4">Loading article...</p>
              </div>
            ) : (
              <div
                className="prose-article"
                dangerouslySetInnerHTML={{ __html: articleContent }}
              />
            )}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
