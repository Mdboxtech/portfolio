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
    <section className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold mb-16 text-center"
          >
            <span className="bg-gradient-to-r from-white via-primary-200 to-primary-400 bg-clip-text text-transparent">
              Experience
            </span>
          </motion.h2>

          <div className="relative">
            {/* Timeline line with glow */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500/50 via-purple-500/50 to-primary-500/50 blur-sm" />
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary-400 via-purple-400 to-primary-400" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative md:flex ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline dot with glow */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary-500 to-purple-600 p-0.5">
                      <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary-400 to-purple-500 animate-pulse" />
                      </div>
                    </div>
                  </div>

                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="group relative">
                      {/* Glow effect */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 blur transition-all duration-500" />
                      
                      <div className="relative bg-slate-800/90 backdrop-blur-xl rounded-xl p-6 border border-slate-700 group-hover:border-primary-500/50 transition-all duration-500">
                        <div className="flex items-center gap-2 mb-3 text-primary-400">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm font-mono font-medium">{exp.period}</span>
                        </div>
                        <h3 className="text-xl font-heading font-bold text-white mb-3 flex items-center gap-2 group-hover:text-primary-300 transition-colors">
                          <div className="p-2 rounded-lg bg-primary-500/20 border border-primary-500/30">
                            <Briefcase className="w-5 h-5" />
                          </div>
                          {exp.title}
                        </h3>
                        <p className="text-gray-400 group-hover:text-gray-300 mb-4 transition-colors">
                          {exp.description}
                        </p>
                        <ul className="space-y-2">
                          {exp.highlights.map((highlight, i) => (
                            <li key={i} className="text-sm text-gray-400 flex items-start gap-2 group-hover:text-gray-300 transition-colors">
                              <span className="text-primary-400 mt-1 font-bold">→</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Corner accent */}
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary-500/20 to-transparent blur-xl group-hover:from-primary-500/40 transition-all duration-500" />
                      </div>
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
