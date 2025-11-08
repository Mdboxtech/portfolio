'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar } from 'lucide-react'

const experiences = [
  {
    title: 'Software Engineer',
    period: '2023 – Present',
    description: 'Built and optimized web applications for multiple businesses. Integrated secure APIs and implemented background job queues.',
    highlights: [
      'Developed secure authentication systems',
      'Optimized database queries reducing load time by 40%',
      'Implemented caching strategies for high-traffic applications',
    ],
  },
  {
    title: 'Freelance Web Developer',
    period: '2021 – 2023',
    description: 'Delivered high-performance websites and automation systems for local clients. Improved application performance and deployment speed.',
    highlights: [
      'Built custom WordPress themes and plugins',
      'Automated client reporting systems',
      'Delivered 20+ projects with 100% client satisfaction',
    ],
  },
]

export default function Experience() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-12 text-center">
            Experience
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary-200 dark:bg-primary-800" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className={`relative md:flex ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary-600 dark:bg-primary-400 border-4 border-gray-50 dark:border-slate-800 z-10" />

                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-2 mb-2 text-primary-600 dark:text-primary-400">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-medium">{exp.period}</span>
                      </div>
                      <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                        <Briefcase className="w-5 h-5" />
                        {exp.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {exp.description}
                      </p>
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                            <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
