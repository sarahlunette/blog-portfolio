'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaCalendarAlt, FaGlobe, FaShieldAlt, FaRocket, FaUsers, FaLightbulb } from 'react-icons/fa'

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            About TheLab
          </h1>
          <p className="text-2xl text-gray-600 mb-8">
            Building the future of disaster resilience through AI and data intelligence
          </p>
          <div className="bg-white p-8 rounded-2xl shadow-lg text-left space-y-4">
            <p className="text-lg text-gray-700 leading-relaxed">
              TheLab is an AI-powered crisis management and disaster recovery platform designed for small islands, coastal territories, and fragile states. Founded in 2024, we combine real-time data streaming, satellite damage assessment, geospatial intelligence, and multi-LLM agentic reasoning to provide actionable insights for disaster response and long-term resilience planning.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our flagship product, <strong>ResilienceAI</strong>, transforms how governments, NGOs, and private organizations respond to natural disasters by reducing recovery time by 30-50% and cutting costs by 20-40% through AI-powered decision support and optimized resource allocation.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Company Info */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Company Information
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: FaCalendarAlt,
                title: 'Founded',
                value: '2024',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: FaMapMarkerAlt,
                title: 'Headquarters',
                value: 'European Union',
                color: 'from-purple-500 to-purple-600'
              },
              {
                icon: FaGlobe,
                title: 'Focus Regions',
                value: 'Caribbean, Pacific Islands, Coastal States',
                color: 'from-green-500 to-green-600'
              },
              {
                icon: FaShieldAlt,
                title: 'Compliance',
                value: 'GDPR, EU AI Act Ready',
                color: 'from-orange-500 to-orange-600'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
              >
                <div className={`inline-block p-4 rounded-lg bg-gradient-to-br ${item.color} mb-4`}>
                  <item.icon className="text-3xl text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <FaRocket className="text-4xl" />
                  <h2 className="text-3xl font-bold">Our Mission</h2>
                </div>
                <p className="text-lg text-white/90 leading-relaxed">
                  To bridge the critical gap between emergency response and sustainable reconstruction by empowering governments, NGOs, and organizations with AI-powered tools that enable faster, smarter, and more cost-effective disaster recovery and resilience planning.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <FaLightbulb className="text-4xl" />
                  <h2 className="text-3xl font-bold">Our Vision</h2>
                </div>
                <p className="text-lg text-white/90 leading-relaxed">
                  A world where every vulnerable territory has access to cutting-edge AI and data intelligence for disaster preparedness, response, and recovery—reducing human suffering and economic losses through technology-driven resilience.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-12">
            <FaUsers className="text-4xl text-blue-600" />
            <h2 className="text-4xl font-bold text-gray-900">Meet the Team</h2>
          </div>

          {/* Founder */}
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-12">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mb-4 mx-auto">
                      <FaUsers className="text-6xl text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Sarah LE NET</h3>
                    <p className="text-blue-100 mt-2">Founder & CEO</p>
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">About Sarah</h4>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      Sarah LE NET is the founder and CEO of TheLab, bringing together expertise in crisis management, artificial intelligence, and disaster resilience planning. With a deep understanding of the unique challenges faced by small island states and fragile territories, Sarah founded TheLab in 2024 to address the critical gap in accessible, affordable, and effective disaster recovery solutions.
                    </p>
                    <p>
                      As a solo founder, Sarah combines technical expertise with real-world crisis response experience to create tools that empower decision-makers in high-pressure environments. She is committed to building GDPR-compliant, ethically-designed AI systems that prioritize transparency, auditability, and genuine impact for vulnerable communities.
                    </p>
                    <p>
                      TheLab is actively developing the next generation of crisis response technology, including edge computing devices for offline damage assessment in degraded infrastructure environments—ensuring resilience tools work when they&apos;re needed most.
                    </p>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h5 className="font-semibold text-gray-900 mb-3">Areas of Expertise</h5>
                    <div className="flex flex-wrap gap-2">
                      {[
                        'AI & Machine Learning',
                        'Crisis Management',
                        'Disaster Recovery',
                        'Geospatial Intelligence',
                        'Data Integration',
                        'Regulatory Compliance'
                      ].map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h5 className="font-semibold text-gray-900 mb-3">Connect</h5>
                    <div className="flex gap-4">
                      <a
                        href="mailto:sarah@thelabaidata.com"
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <FaEnvelope />
                        Email
                      </a>
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
                      >
                        <FaLinkedin />
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Why We're Different */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Why TheLab is Different
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Territory-Specific',
                description: 'Not generic solutions—we understand the unique challenges of small islands and fragile states with limited resources and infrastructure.',
                icon: '🏝️'
              },
              {
                title: 'GDPR Native',
                description: 'Built from the ground up with European data protection standards, ensuring full compliance and legal protection for our clients.',
                icon: '🔒'
              },
              {
                title: 'Dual-LLM Architecture',
                description: 'Combining Mistral for reasoning and Claude for synthesis, delivering both speed and quality in AI-powered insights.',
                icon: '🤖'
              },
              {
                title: 'Real-Time Intelligence',
                description: 'Integration of satellite imagery, IoT sensors, social media, and field reports for comprehensive situational awareness.',
                icon: '📡'
              },
              {
                title: 'Crisis-Ready',
                description: 'Designed to work offline, in degraded infrastructure, with informal data sources—the reality of post-disaster environments.',
                icon: '⚡'
              },
              {
                title: 'Proven Impact',
                description: '30-50% faster recovery, 20-40% cost reduction, and measurable improvements in resilience outcomes.',
                icon: '📈'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-600"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Join Us in Building Resilient Communities
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Whether you&apos;re a government agency, NGO, or private organization, we&apos;re here to help you build better disaster resilience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/resilience-ai"
                className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Explore ResilienceAI
              </Link>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
