'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  FaBrain,
  FaSatellite,
  FaChartLine,
  FaShieldAlt,
  FaRocket,
  FaCheckCircle,
  FaMapMarkedAlt,
  FaDatabase,
  FaClock,
  FaDollarSign,
  FaUsers,
  FaCloudDownloadAlt
} from 'react-icons/fa'

export default function ResilienceAI() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>

        <div className="container mx-auto px-4 py-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <div className="inline-block mb-6">
              <FaBrain className="text-7xl text-purple-300 mx-auto" />
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              ResilienceAI
            </h1>
            <p className="text-2xl md:text-3xl text-purple-200 mb-8">
              AI-Powered Crisis Management & Disaster Recovery Platform
            </p>
            <p className="text-xl text-gray-200 mb-12 leading-relaxed max-w-3xl mx-auto">
              Transform disaster response and resilience planning with the world&apos;s first AI platform designed specifically for small islands, coastal territories, and fragile states. Reduce recovery time by <strong>30-50%</strong> and costs by <strong>20-40%</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                Request a Demo
              </Link>
              <Link
                href="#features"
                className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Explore Features
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <div className="bg-black/30 backdrop-blur-sm border-t border-white/10">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: '30-50%', label: 'Faster Recovery' },
                { value: '20-40%', label: 'Cost Reduction' },
                { value: '24-48h', label: 'Damage Assessment' },
                { value: '100%', label: 'GDPR Compliant' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-purple-300">{stat.value}</div>
                  <div className="text-sm text-gray-300 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What is ResilienceAI */}
      <section className="py-20 bg-gray-50" id="features">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What is ResilienceAI?
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              ResilienceAI is an end-to-end crisis management platform that combines <strong>real-time data streaming</strong>, <strong>satellite damage assessment</strong>, <strong>geospatial intelligence</strong>, and <strong>multi-LLM agentic reasoning</strong> to deliver actionable insights for disaster response, recovery planning, and long-term resilience building.
            </p>
          </motion.div>

          {/* Core Capabilities */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: FaSatellite,
                title: 'Satellite Damage Assessment',
                description: 'Automated analysis of Sentinel-2 imagery with ML-powered damage classification. Get comprehensive damage maps within 24-48 hours of disaster events.',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: FaBrain,
                title: 'Dual-LLM Reasoning',
                description: 'Mistral for rapid reasoning and entity extraction, Claude for synthesis and planning. Best-of-breed AI architecture for speed and quality.',
                color: 'from-purple-500 to-purple-600'
              },
              {
                icon: FaMapMarkedAlt,
                title: 'Geospatial Intelligence',
                description: 'Integration of OpenStreetMap, cadastre data, and infrastructure mapping. Understand dependencies and cascading risks across territories.',
                color: 'from-green-500 to-green-600'
              },
              {
                icon: FaDatabase,
                title: 'Multi-Source Data Fusion',
                description: 'Seamlessly integrate satellite imagery, IoT sensors, social media, WhatsApp reports, and official databases into a unified intelligence platform.',
                color: 'from-orange-500 to-orange-600'
              },
              {
                icon: FaChartLine,
                title: 'Predictive Analytics',
                description: 'ECMWF climate forecasts, scenario modeling, and risk assessment for proactive resilience planning and resource optimization.',
                color: 'from-indigo-500 to-indigo-600'
              },
              {
                icon: FaShieldAlt,
                title: 'Compliance & Auditability',
                description: 'GDPR-native design, EU AI Act ready, full transparency and decision traceability. European data sovereignty guaranteed.',
                color: 'from-teal-500 to-teal-600'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className={`inline-block p-4 rounded-lg bg-gradient-to-br ${feature.color} mb-4`}>
                  <feature.icon className="text-3xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How ResilienceAI Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A sophisticated five-stage pipeline that transforms raw data into actionable resilience strategies
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-8">
            {[
              {
                step: '01',
                title: 'Data Ingestion',
                description: 'Automatically collect data from satellites (Sentinel-2), OpenStreetMap, climate APIs (ECMWF), IoT sensors, social media, and field reports. Works offline and in degraded infrastructure.',
                icon: FaCloudDownloadAlt,
                color: 'blue'
              },
              {
                step: '02',
                title: 'AI Reasoning',
                description: 'Mistral Large analyzes user queries, extracts intent and entities (locations, dates, disaster types), classifies response modes, and determines required tool executions.',
                icon: FaBrain,
                color: 'purple'
              },
              {
                step: '03',
                title: 'Specialized Analysis',
                description: 'Execute specialized tools for satellite damage assessment, climate forecasting, infrastructure mapping, and geospatial analysis. ML models classify damage severity across sectors.',
                icon: FaSatellite,
                color: 'green'
              },
              {
                step: '04',
                title: 'Knowledge Synthesis',
                description: 'Claude integrates RAG context from vector store, tool results, and domain expertise to generate comprehensive resilience plans with sector-specific recommendations.',
                icon: FaChartLine,
                color: 'orange'
              },
              {
                step: '05',
                title: 'Actionable Outputs',
                description: 'Deliver executive summaries, priority matrices, sector plans, roadmaps, and visual reports (PDF/CSV) optimized for decision-makers in high-pressure environments.',
                icon: FaRocket,
                color: 'indigo'
              }
            ].map((stage, index) => (
              <motion.div
                key={stage.step}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex gap-6 items-start"
              >
                <div className={`flex-shrink-0 w-16 h-16 rounded-full bg-${stage.color}-100 flex items-center justify-center`}>
                  <stage.icon className={`text-2xl text-${stage.color}-600`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`text-4xl font-bold text-${stage.color}-200`}>{stage.step}</span>
                    <h3 className="text-2xl font-bold text-gray-900">{stage.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg">{stage.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Real-World Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven impact across government agencies, NGOs, and private organizations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Post-Hurricane Recovery (Caribbean)',
                challenge: 'After Hurricane Irma devastated Saint-Martin, coordination between 15+ stakeholders took weeks, delaying reconstruction.',
                solution: 'ResilienceAI delivered comprehensive damage assessment in 48 hours, infrastructure dependency maps, and optimized reconstruction roadmap.',
                impact: ['40% faster coordination', '€50M cost savings', '60% mortality risk reduction for future events']
              },
              {
                title: 'Coastal Flooding Resilience (Pacific Islands)',
                challenge: 'Small island nations lack resources for comprehensive risk assessment and long-term resilience planning.',
                solution: 'Multi-source data fusion (satellite, climate, socio-economic) with AI-powered scenario modeling and prioritization.',
                impact: ['50+ data layers integrated', 'Territory-specific recommendations', 'GDPR-compliant processing']
              },
              {
                title: 'Earthquake Response (Fragile States)',
                challenge: 'Immediate damage assessment impossible with limited infrastructure and offline environments.',
                solution: 'Offline-capable damage assessment, WhatsApp integration for field reports, real-time crisis monitoring dashboard.',
                impact: ['Works in degraded infrastructure', 'Hours vs. weeks for assessment', 'Integration of informal data sources']
              },
              {
                title: 'Climate Adaptation Planning (Municipalities)',
                challenge: 'Municipalities need long-term resilience strategies but lack AI/data expertise and regulatory compliance knowledge.',
                solution: 'ECMWF climate forecasts, predictive analytics, automated Build Back Better compliance checking with full auditability.',
                impact: ['30-50% time savings', 'EU AI Act ready', 'Legal protection through transparency']
              }
            ].map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-red-600 mb-2">Challenge:</h4>
                    <p className="text-gray-600">{useCase.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">Solution:</h4>
                    <p className="text-gray-600">{useCase.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">Impact:</h4>
                    <ul className="space-y-2">
                      {useCase.impact.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-gray-600">
                          <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Model / Pricing */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Flexible Deployment Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the model that best fits your organization&apos;s needs and budget
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'SaaS Subscription',
                icon: FaCloudDownloadAlt,
                description: 'Cloud-based access with automatic updates and managed infrastructure',
                features: [
                  'Monthly or annual billing',
                  'No infrastructure costs',
                  'Automatic updates',
                  'Scalable usage',
                  'GDPR-compliant EU hosting'
                ],
                ideal: 'NGOs, small municipalities, project-based organizations',
                color: 'blue'
              },
              {
                name: 'On-Premise License',
                icon: FaShieldAlt,
                description: 'Deploy within your own infrastructure for maximum control and data sovereignty',
                features: [
                  'One-time license fee',
                  'Full data control',
                  'Custom integration',
                  'Offline capability',
                  'Dedicated support'
                ],
                ideal: 'Government agencies, defense organizations, large territories',
                color: 'purple',
                badge: 'Most Popular'
              },
              {
                name: 'Custom Development',
                icon: FaUsers,
                description: 'Tailored solutions with white-label options and custom feature development',
                features: [
                  'Bespoke features',
                  'White-label deployment',
                  'API integration',
                  'Training & consulting',
                  'Long-term partnership'
                ],
                ideal: 'International organizations, multi-territory programs, research institutions',
                color: 'green'
              }
            ].map((option, index) => (
              <motion.div
                key={option.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                className={`bg-white rounded-xl shadow-lg border-2 ${option.badge ? 'border-purple-500' : 'border-gray-200'} p-8 relative`}
              >
                {option.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                      {option.badge}
                    </span>
                  </div>
                )}
                <div className={`inline-block p-4 rounded-lg bg-${option.color}-100 mb-4`}>
                  <option.icon className={`text-3xl text-${option.color}-600`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{option.name}</h3>
                <p className="text-gray-600 mb-6">{option.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Features:</h4>
                  <ul className="space-y-2">
                    {option.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-gray-600">
                        <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-500 mb-1"><strong>Ideal for:</strong></p>
                  <p className="text-sm text-gray-600">{option.ideal}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-lg text-gray-600 mb-6">
              All options include technical support, training, and regular updates.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg"
            >
              Contact Us for Pricing
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Enterprise-Grade Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built on proven, production-ready infrastructure
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                category: 'AI/ML Stack',
                items: ['Mistral Large 2', 'Claude Sonnet 4.5', 'LangGraph orchestration', 'PyTorch + CUDA', 'Qdrant vector store']
              },
              {
                category: 'Data Sources',
                items: ['Copernicus Sentinel-2', 'OpenStreetMap', 'ECMWF Climate API', 'Google Earth Engine', 'Real-time streaming']
              },
              {
                category: 'Infrastructure',
                items: ['FastAPI backend', 'Docker containers', 'Google Cloud Platform', 'EU data centers', 'Edge devices (in development)']
              },
              {
                category: 'Compliance',
                items: ['GDPR native', 'EU AI Act ready', 'Full auditability', 'Data encryption', 'Privacy-preserving']
              }
            ].map((tech, index) => (
              <motion.div
                key={tech.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-800 p-6 rounded-lg"
              >
                <h3 className="text-xl font-bold mb-4 text-purple-400">{tech.category}</h3>
                <ul className="space-y-2">
                  {tech.items.map((item) => (
                    <li key={item} className="text-gray-300 flex items-start text-sm">
                      <span className="text-purple-400 mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Disaster Resilience?
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              Join forward-thinking governments, NGOs, and organizations already using ResilienceAI to save time, reduce costs, and build stronger, more resilient communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                Request a Demo
              </Link>
              <Link
                href="/about"
                className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Learn More About TheLab
              </Link>
            </div>
            <p className="text-sm text-purple-200 mt-8">
              🔒 GDPR Compliant • 🇪🇺 EU Data Sovereignty • ⚡ Offline Capable • 🤖 EU AI Act Ready
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
