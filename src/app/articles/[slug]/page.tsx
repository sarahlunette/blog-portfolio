import { readFile } from 'fs/promises'
import { join } from 'path'
import Link from 'next/link'
import ArticleContent from './ArticleContent'

// Article mapping
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

// Generate static params for all article slugs
export function generateStaticParams() {
  return Object.keys(articleMap).map((slug) => ({
    slug,
  }))
}

// Server component that reads article content
export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articleMap[params.slug]

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

  // Read article content from public folder during build
  let articleContent = ''
  try {
    const filePath = join(process.cwd(), 'public', 'articles', article.fileName)
    articleContent = await readFile(filePath, 'utf-8')
  } catch (error) {
    console.error('Error reading article:', error)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto px-4 py-12">
        <Link
          href="/articles"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
        >
          ← Back to Articles
        </Link>

        <ArticleContent content={articleContent} />
      </div>
    </div>
  )
}
