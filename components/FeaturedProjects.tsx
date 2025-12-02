'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'SmartTeck Digital Platform',
    description: 'Full-featured fintech platform offering digital services, web development, and domain solutions.',
    tags: ['Laravel', 'React', 'Fintech', 'Payment Gateway', 'API'],
    slug: 'smartteck-digital-platform',
    image: '/images/smartteck-platform.png',
    liveUrl: 'https://smartteck.ng/',
  },
  {
    title: 'Topify Fintech Platform',
    description: 'Innovative fintech solution with card & payment solutions, multi-currency wallets, and seamless local services.',
    tags: ['Fintech', 'Payment Gateway', 'Multi-Currency', 'React', 'Laravel'],
    slug: 'topify-fintech-platform',
    image: '/images/topify-platform.png',
  },
  {
    title: 'Company Web Management Platform',
    description: 'Secure Laravel + React dashboard for managing clients, transactions, and reports with advanced caching.',
    tags: ['Laravel', 'React', 'MySQL', 'Inertia.js', 'Caching'],
    slug: 'company-web-management',
    image: '/images/project1.jpg',
  },
  {
    title: 'HR Analytics Dashboard',
    description: 'HR system with Excel import/export, data visualization, and real-time statistics.',
    tags: ['Laravel', 'Inertia.js', 'React', 'Chart.js', 'Excel'],
    slug: 'hr-analytics-dashboard',
    image: '/images/project3.jpg',
  },
]

export default function FeaturedProjects() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 backdrop-blur-sm mb-4">
              <span className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
              <span className="text-sm text-primary-300 font-mono">Recent Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl">
              A selection of projects I&apos;ve built and contributed to, showcasing my expertise in full-stack development
            </p>
          </motion.div>
          <Link
            href="/projects"
            className="group hidden md:inline-flex items-center gap-2 px-6 py-3 text-base font-medium rounded-lg text-white bg-primary-600/20 hover:bg-primary-600/30 backdrop-blur-sm border border-primary-500/30 hover:border-primary-400/50 transition-all"
          >
            View All
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={`/projects/${project.slug}`}>
                <div className="group h-full relative">
                  {/* Glowing border effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-100 blur transition-all duration-500" />
                  
                  {/* Card content */}
                  <div className="relative h-full bg-slate-800/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-xl overflow-hidden border border-slate-700 group-hover:border-primary-500/50 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-primary-500/20">
                    <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-primary-500/20 to-purple-700/20">
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-110 group-hover:rotate-2 transition-all duration-700"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-6xl font-bold bg-gradient-to-br from-primary-400 to-purple-600 bg-clip-text text-transparent opacity-30">
                            MD
                          </div>
                        </div>
                      )}
                      
                      {/* Overlay gradient on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    
                    <div className="p-6 space-y-4">
                      <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 group-hover:text-gray-300 mb-4 line-clamp-2 transition-colors">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs font-mono text-primary-300 bg-primary-500/10 backdrop-blur-sm border border-primary-500/20 rounded-full group-hover:bg-primary-500/20 group-hover:border-primary-400/50 transition-all"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/20 to-transparent blur-2xl group-hover:from-primary-500/40 transition-all duration-500" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center md:hidden"
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 px-6 py-3 text-base font-medium rounded-lg text-white bg-primary-600/20 hover:bg-primary-600/30 backdrop-blur-sm border border-primary-500/30 hover:border-primary-400/50 transition-all"
          >
            View All Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
