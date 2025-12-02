'use client'

import Link from 'next/link'
import { ArrowRight, Code2, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'SmartTeck Digital Platform',
    description: 'Built a comprehensive fintech platform offering digital services including web development, domain purchases, and fintech applications. Features user registration, service packages, and payment gateway integration.',
    tags: ['Laravel', 'React', 'Fintech', 'Payment Gateway', 'REST API', 'MySQL'],
    slug: 'smartteck-digital-platform',
    featured: true,
    liveUrl: 'https://smartteck.ng/',
  },
  {
    title: 'Company Web Management Platform',
    description: 'Built a secure Laravel + React dashboard for managing clients, transactions, and reports. Implemented caching and indexing for faster data retrieval.',
    tags: ['Laravel', 'React', 'MySQL', 'Inertia.js', 'Caching', 'REST API'],
    slug: 'company-web-management',
    featured: true,
  },
  {
    title: 'Multi-site Management Tool',
    description: 'Developed a REST API system to manage multiple WordPress websites from one dashboard using JSON and XML-RPC APIs.',
    tags: ['Laravel', 'WordPress', 'REST API', 'JSON', 'XML-RPC', 'PHP'],
    slug: 'multi-site-management',
    featured: true,
  },
  {
    title: 'HR Analytics Dashboard',
    description: 'Created an HR system with Excel import/export, data visualization, and real-time statistics using Laravel, Inertia.js, and React.',
    tags: ['Laravel', 'Inertia.js', 'React', 'Chart.js', 'Excel', 'Analytics'],
    slug: 'hr-analytics-dashboard',
    featured: true,
  },
]

export default function Projects() {
  return (
    <section className="relative min-h-screen py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 backdrop-blur-sm mb-6">
              <Code2 className="w-4 h-4 text-primary-400" />
              <span className="text-sm text-primary-300 font-mono">Portfolio</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-primary-200 to-primary-400 bg-clip-text text-transparent">
                My Projects
              </span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              A showcase of web applications and systems I&apos;ve built, demonstrating my expertise in 
              full-stack development, API integration, and scalable architecture.
            </p>
          </motion.div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-100 blur transition-all duration-500" />
                <div className="relative bg-slate-800/90 backdrop-blur-xl rounded-xl overflow-hidden border border-slate-700 group-hover:border-primary-500/50 transition-all duration-500">
                  <div className="md:flex">
                    <div className="md:w-2/5">
                      <div className="aspect-video md:aspect-square bg-gradient-to-br from-primary-500 to-primary-700 relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-white text-8xl font-bold opacity-20">
                            {String(index + 1).padStart(2, '0')}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-3/5 p-8">
                      {project.featured && (
                        <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono font-semibold rounded-full bg-primary-500/20 border border-primary-500/30 text-primary-300 mb-4">
                          <Sparkles className="w-3 h-3" />
                          Featured Project
                        </span>
                      )}
                      <h2 className="text-2xl md:text-3xl font-heading font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary-400 group-hover:to-purple-400 group-hover:bg-clip-text mb-4 transition-all">
                        {project.title}
                      </h2>
                      <p className="text-gray-400 group-hover:text-gray-300 mb-6 leading-relaxed transition-colors">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-sm font-mono rounded-full bg-slate-700/50 border border-slate-600/50 text-gray-300 group-hover:bg-primary-500/10 group-hover:border-primary-500/30 group-hover:text-primary-300 transition-all"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-semibold group/link"
                      >
                        View Case Study
                        <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/20 to-transparent blur-2xl group-hover:from-primary-500/40 transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-purple-500 rounded-xl blur opacity-50" />
              <div className="relative bg-slate-800/90 backdrop-blur-xl rounded-xl p-8 border border-primary-500/30">
                <h3 className="text-2xl font-heading font-bold text-white mb-4">
                  More Projects Coming Soon
                </h3>
                <p className="text-gray-400 mb-6">
                  I&apos;m constantly working on new projects and improving my skills. Check back later for more case studies and examples of my work.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg text-white bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 transition-all shadow-lg shadow-primary-500/50"
                >
                  Get In Touch
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
