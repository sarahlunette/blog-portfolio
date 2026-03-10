'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaBrain, FaRobot, FaChartLine, FaLightbulb, FaRocket, FaShieldAlt } from 'react-icons/fa'

export default function LabAI() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 -z-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 -left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
        />
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-block mb-4">
            <FaBrain className="text-6xl text-purple-300 mx-auto" />
          </div>
          <h1 className="text-6xl font-bold text-white mb-4">
            The Lab AI
          </h1>
          <p className="text-2xl text-purple-200 mb-8">
            Empowering Entrepreneurs with AI-Powered Solutions
          </p>
          <div className="max-w-4xl mx-auto text-lg text-gray-200 leading-relaxed space-y-6">
            <p>
              The Lab AI is your innovation partner for building intelligent, data-driven solutions that transform how businesses operate in disaster relief, disaster recovery, and resilience planning.
            </p>
            <p>
              We leverage cutting-edge AI and machine learning technologies to help entrepreneurs and organizations make better decisions faster, optimize resources, and build sustainable solutions for complex challenges.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Core Offerings */}
      <section className="container mx-auto px-4 py-16 relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            AI Solutions for Entrepreneurs
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FaRobot,
                title: 'AI-Powered Decision Support',
                description: 'Intelligent systems that synthesize complex data and provide actionable insights for critical decision-making in high-pressure environments.',
                color: 'from-purple-500 to-purple-600'
              },
              {
                icon: FaChartLine,
                title: 'Predictive Analytics',
                description: 'Advanced machine learning models for risk assessment, resource optimization, and scenario planning in disaster management.',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: FaLightbulb,
                title: 'Generative AI Integration',
                description: 'Custom LLM implementations for document synthesis, natural language queries, and automated report generation.',
                color: 'from-indigo-500 to-indigo-600'
              },
              {
                icon: FaShieldAlt,
                title: 'Compliance & Auditability',
                description: 'AI systems designed for GDPR and EU AI Act compliance with full transparency and decision traceability.',
                color: 'from-green-500 to-green-600'
              },
              {
                icon: FaRocket,
                title: 'Rapid Prototyping',
                description: 'Fast MVP development and proof-of-concept creation to validate your AI-driven business ideas.',
                color: 'from-orange-500 to-orange-600'
              },
              {
                icon: FaBrain,
                title: 'Custom AI Solutions',
                description: 'Tailored artificial intelligence systems designed for your specific entrepreneurial challenges and opportunities.',
                color: 'from-pink-500 to-pink-600'
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className={`inline-block p-4 rounded-lg bg-gradient-to-br ${service.color} mb-4`}>
                  <service.icon className="text-3xl text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Technology Stack */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-12">
              Cutting-Edge Technology Stack
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  category: 'Large Language Models',
                  items: ['Mistral Large', 'Claude Sonnet 4.5', 'Provider-agnostic architecture']
                },
                {
                  category: 'AI/ML Frameworks',
                  items: ['LangChain', 'LangGraph', 'Multi-agent systems']
                },
                {
                  category: 'Data Processing',
                  items: ['Vector databases', 'RAG architecture', 'Real-time analytics']
                },
                {
                  category: 'Infrastructure',
                  items: ['Google Cloud Platform', 'Edge computing', 'GDPR compliant']
                }
              ].map((tech, index) => (
                <motion.div
                  key={tech.category}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-gray-800 p-6 rounded-lg"
                >
                  <h3 className="text-xl font-bold mb-4 text-purple-400">{tech.category}</h3>
                  <ul className="space-y-2">
                    {tech.items.map((item) => (
                      <li key={item} className="text-gray-300 flex items-start">
                        <span className="text-purple-400 mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="container mx-auto px-4 py-16 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Real-World Applications
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                title: 'Disaster Recovery Planning',
                description: 'AI-powered reconstruction planning that reduces recovery time by 30-50% and cuts costs by 20-40% through optimized resource allocation.'
              },
              {
                title: 'Crisis Decision Support',
                description: 'Real-time decision support systems for emergency response teams, synthesizing data from multiple sources to provide actionable insights.'
              },
              {
                title: 'Resilience Analytics',
                description: 'Predictive modeling and scenario analysis for municipalities and organizations to build long-term resilience against future disasters.'
              },
              {
                title: 'Regulatory Compliance Automation',
                description: 'Automated compliance checking for Build Back Better standards and EU regulations, with full auditability and legal protection.'
              }
            ].map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg border-l-4 border-purple-600"
              >
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{useCase.title}</h3>
                <p className="text-gray-700">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Build the Future with AI?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join us in transforming disaster resilience and disaster relief through cutting-edge artificial intelligence solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/articles"
                className="inline-block px-8 py-4 bg-white text-purple-600 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Explore Our Insights
              </Link>
              <Link
                href="/lab-data"
                className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-bold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Discover The Lab Data
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
