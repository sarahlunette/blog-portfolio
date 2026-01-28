'use client'

import { motion } from 'framer-motion'

export default function ArticleContent({ content }: { content: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto"
    >
      {content ? (
        <div
          className="prose-article"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600">Article content could not be loaded.</p>
        </div>
      )}
    </motion.div>
  )
}
