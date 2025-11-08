'use client'

import Link from 'next/link'
import { ArrowRight, Download } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-gray-900 dark:text-white mb-6">
              Muhammad Abdullahi Ali <span className="text-primary-600 dark:text-primary-400">(MD)</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 font-medium">
              Software Engineer — Building Secure and Scalable Web Applications.
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            I&apos;m a Software Engineer passionate about creating fast, secure, and user-focused web applications. 
            With hands-on experience collaborating with tech-driven companies, I specialize in backend systems, 
            frontend development, and API integrations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
            >
              View Projects
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <Download className="mr-2 w-5 h-5" />
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
