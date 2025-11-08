'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'SmartTeck Digital Platform',
    description: 'Full-featured fintech platform offering digital services, web development, and domain solutions.',
    tags: ['Laravel', 'React', 'Fintech', 'Payment Gateway', 'API'],
    slug: 'smartteck-digital-platform',
    image: '/projects/smartteck.jpg',
    liveUrl: 'https://smartteck.ng/',
  },
  {
    title: 'Company Web Management Platform',
    description: 'Secure Laravel + React dashboard for managing clients, transactions, and reports with advanced caching.',
    tags: ['Laravel', 'React', 'MySQL', 'Inertia.js', 'Caching'],
    slug: 'company-web-management',
    image: '/projects/project1.jpg',
  },
  {
    title: 'Multi-site Management Tool',
    description: 'REST API system to manage multiple WordPress websites from one dashboard using JSON and XML-RPC APIs.',
    tags: ['Laravel', 'WordPress', 'REST API', 'JSON', 'XML-RPC'],
    slug: 'multi-site-management',
    image: '/projects/project2.jpg',
  },
  {
    title: 'HR Analytics Dashboard',
    description: 'HR system with Excel import/export, data visualization, and real-time statistics.',
    tags: ['Laravel', 'Inertia.js', 'React', 'Chart.js', 'Excel'],
    slug: 'hr-analytics-dashboard',
    image: '/projects/project3.jpg',
  },
]

export default function FeaturedProjects() {
  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              A selection of projects I&apos;ve built and contributed to
            </p>
          </div>
          <Link
            href="/projects"
            className="hidden md:inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
          >
            View All
            <ArrowRight className="ml-2 w-5 h-5" />
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
                <div className="group h-full bg-gray-50 dark:bg-slate-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 transition-all hover:shadow-xl">
                  <div className="aspect-video bg-gradient-to-br from-primary-500 to-primary-700 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold opacity-20">
                      MD
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link
            href="/projects"
            className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
          >
            View All Projects
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
