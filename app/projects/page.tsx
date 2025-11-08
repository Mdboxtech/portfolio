import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Projects - Muhammad Abdullahi Ali (MD)',
  description: 'Explore my portfolio of web development projects including Laravel applications, React dashboards, and full-stack solutions.',
}

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
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-800 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6">
              My Projects
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A showcase of web applications and systems I&apos;ve built, demonstrating my expertise in 
              full-stack development, API integration, and scalable architecture.
            </p>
          </div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <div
                key={project.slug}
                className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 transition-all hover:shadow-2xl"
              >
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
                      <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 mb-4">
                        Featured Project
                      </span>
                    )}
                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 dark:text-white mb-4">
                      {project.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-sm font-medium rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold group"
                    >
                      View Case Study
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-8 border border-primary-200 dark:border-primary-800">
              <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-4">
                More Projects Coming Soon
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                I&apos;m constantly working on new projects and improving my skills. Check back later for more case studies and examples of my work.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 transition-colors"
              >
                Get In Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
