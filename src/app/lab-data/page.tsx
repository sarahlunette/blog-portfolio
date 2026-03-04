'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaDatabase, FaSatellite, FaMapMarkedAlt, FaChartBar, FaCloudDownloadAlt, FaShieldAlt } from 'react-icons/fa'

export default function LabData() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-900 via-teal-900 to-green-900 -z-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImRvdHMiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNkb3RzKSIvPjwvc3ZnPg==')] opacity-30"></div>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 -left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute bottom-1/3 -right-1/4 w-96 h-96 bg-green-500 rounded-full blur-3xl"
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
            <FaDatabase className="text-6xl text-blue-300 mx-auto" />
          </div>
          <h1 className="text-6xl font-bold text-white mb-4">
            The Lab Data
          </h1>
          <p className="text-2xl text-blue-200 mb-8">
            Transforming Raw Data into Actionable Intelligence
          </p>
          <div className="max-w-4xl mx-auto text-lg text-gray-200 leading-relaxed space-y-6">
            <p>
              The Lab Data specializes in multi-source data integration, geospatial intelligence, and real-time analytics for disaster management, crisis response, and resilience planning.
            </p>
            <p>
              We bridge the gap between fragmented data sources and actionable insights, providing the foundation for data-driven decision-making in high-stakes environments.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Data Services */}
      <section className="container mx-auto px-4 py-16 relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Comprehensive Data Solutions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FaSatellite,
                title: 'Satellite Imagery Analysis',
                description: 'Real-time access to Copernicus Sentinel-2 and SAR imagery with automated damage assessment and change detection.',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: FaMapMarkedAlt,
                title: 'Geospatial Intelligence',
                description: 'GIS integration, OpenStreetMap data, cadastre information, and infrastructure mapping for comprehensive territorial analysis.',
                color: 'from-green-500 to-green-600'
              },
              {
                icon: FaCloudDownloadAlt,
                title: 'Multi-Source Data Integration',
                description: 'Seamless integration of IoT sensors, field reports, social media, drone footage, and official databases.',
                color: 'from-purple-500 to-purple-600'
              },
              {
                icon: FaChartBar,
                title: 'Real-Time Analytics',
                description: 'Live data processing and visualization for crisis monitoring, vulnerability assessment, and impact analysis.',
                color: 'from-orange-500 to-orange-600'
              },
              {
                icon: FaShieldAlt,
                title: 'Data Governance & Compliance',
                description: 'GDPR-compliant data processing with full auditability, encryption, and privacy-preserving analytics.',
                color: 'from-indigo-500 to-indigo-600'
              },
              {
                icon: FaDatabase,
                title: 'Knowledge Graph Construction',
                description: 'Semantic data modeling to capture infrastructure dependencies, cascading risks, and territorial relationships.',
                color: 'from-teal-500 to-teal-600'
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

      {/* Data Sources */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-12">
              Data Sources We Integrate
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  category: 'Remote Sensing',
                  items: ['Copernicus Sentinel-2', 'SAR imagery', 'Drone footage', 'Change detection']
                },
                {
                  category: 'Geospatial Data',
                  items: ['OpenStreetMap', 'Cadastre databases', 'Infrastructure maps', 'Google Earth Engine']
                },
                {
                  category: 'Field Data',
                  items: ['IoT sensors', 'WhatsApp reports', 'Social media', 'Ground validation']
                },
                {
                  category: 'Socio-Economic',
                  items: ['Population density', 'Economic activities', 'Vulnerable groups', 'Property values']
                }
              ].map((source, index) => (
                <motion.div
                  key={source.category}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-gray-800 p-6 rounded-lg"
                >
                  <h3 className="text-xl font-bold mb-4 text-blue-400">{source.category}</h3>
                  <ul className="space-y-2">
                    {source.items.map((item) => (
                      <li key={item} className="text-gray-300 flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
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

      {/* Value Proposition */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Why Choose The Lab Data?
          </h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Designed for Chaos',
                description: 'Our systems work offline, in degraded infrastructure, with informal data sources like WhatsApp and social media - the reality of post-disaster environments.',
                stat: '100%',
                statLabel: 'Operational in crisis mode'
              },
              {
                title: 'Speed & Accuracy',
                description: 'Automated data synthesis that reduces coordination time from weeks to hours, with real-time validation and quality control.',
                stat: '80%',
                statLabel: 'Time saved on coordination'
              },
              {
                title: 'European Data Sovereignty',
                description: 'All data processing in EU regions with GDPR compliance, no transfer to US Cloud Act jurisdictions, full regulatory compliance.',
                stat: '100%',
                statLabel: 'GDPR compliant'
              },
              {
                title: 'Territory-Specific Intelligence',
                description: 'Not generic data dumps - we provide contextualized insights incorporating local regulations, supply chains, and cultural factors.',
                stat: '50+',
                statLabel: 'Data layers integrated'
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-xl border-2 border-blue-200"
              >
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-700 mb-4">{value.description}</p>
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-bold text-blue-600">{value.stat}</span>
                  <span className="text-gray-600 mb-1">{value.statLabel}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Use Cases */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center text-white mb-12">
              Data-Driven Impact
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  title: 'Rapid Damage Assessment',
                  description: 'Satellite imagery analysis delivering comprehensive damage maps within 24-48 hours of disaster events.',
                  impact: '30-50% faster than traditional methods'
                },
                {
                  title: 'Infrastructure Dependency Mapping',
                  description: 'Knowledge graphs revealing cascading failure risks and optimal restoration sequences for critical utilities.',
                  impact: '20-40% cost reduction through optimized planning'
                },
                {
                  title: 'Vulnerable Population Identification',
                  description: 'Multi-source data fusion to identify at-risk communities and prioritize resource allocation for maximum human impact.',
                  impact: '60% mortality reduction in future events'
                },
                {
                  title: 'Real-Time Crisis Monitoring',
                  description: 'Integration of IoT sensors, social media, and field reports for continuous situational awareness.',
                  impact: 'Hours vs. weeks for comprehensive assessment'
                }
              ].map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2 text-gray-900">{useCase.title}</h3>
                      <p className="text-gray-700">{useCase.description}</p>
                    </div>
                    <div className="md:text-right">
                      <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-lg font-semibold text-sm">
                        {useCase.impact}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Turn Your Data into Actionable Intelligence
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Partner with The Lab Data to unlock the full potential of multi-source data integration for disaster resilience and crisis management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/articles"
                className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Read Our Case Studies
              </Link>
              <Link
                href="/lab-ai"
                className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Explore The Lab AI
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
