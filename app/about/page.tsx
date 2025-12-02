'use client'

import { Download, User, Code2, Target, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import Experience from '@/components/Experience'

export default function About() {
  return (
    <>
      <section className="relative min-h-screen py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 backdrop-blur-sm mb-6">
                <Sparkles className="w-4 h-4 text-primary-400" />
                <span className="text-sm text-primary-300 font-mono">Get to Know Me</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                <span className="bg-gradient-to-r from-white via-primary-200 to-primary-400 bg-clip-text text-transparent">
                  About Me
                </span>
              </h1>
            </motion.div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="group relative mb-8"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 blur transition-all duration-500" />
                <div className="relative bg-slate-800/90 backdrop-blur-xl rounded-xl p-8 border border-slate-700 group-hover:border-primary-500/50 transition-all duration-500">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-primary-500/20 to-purple-500/20 border border-primary-500/30">
                      <User className="w-6 h-6 text-primary-400" />
                    </div>
                    <h2 className="text-2xl font-heading font-bold text-white m-0">
                      Background
                    </h2>
                  </div>
                  <p className="text-gray-400 group-hover:text-gray-300 leading-relaxed mb-4 transition-colors">
                    I&apos;m Muhammad Abdullahi Ali, also known as MD, a Software Engineer passionate about building 
                    solutions that make a difference. My journey in software development started as a web developer, 
                    where I honed my skills creating dynamic websites and applications. Over time, I evolved into 
                    full-stack development, focusing on robust backend systems and intuitive user interfaces.
                  </p>
                  <p className="text-gray-400 group-hover:text-gray-300 leading-relaxed mb-0 transition-colors">
                    Throughout my career, I&apos;ve had the privilege of collaborating with multiple tech-driven companies, 
                    building everything from e-commerce platforms to HR management systems and fintech applications. 
                    Each project has strengthened my ability to deliver scalable, secure, and user-focused solutions.
                  </p>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/20 to-transparent blur-2xl group-hover:from-primary-500/40 transition-all duration-500" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="group relative mb-8"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 blur transition-all duration-500" />
                <div className="relative bg-slate-800/90 backdrop-blur-xl rounded-xl p-8 border border-slate-700 group-hover:border-primary-500/50 transition-all duration-500">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-primary-500/20 to-purple-500/20 border border-primary-500/30">
                      <Code2 className="w-6 h-6 text-primary-400" />
                    </div>
                    <h2 className="text-2xl font-heading font-bold text-white m-0">
                      Technical Focus
                    </h2>
                  </div>
                  <p className="text-gray-400 group-hover:text-gray-300 leading-relaxed mb-4 transition-colors">
                    My expertise centers around Laravel and React, two powerful technologies that enable me to build 
                    modern, performant web applications. I specialize in clean architecture, ensuring code is maintainable 
                    and scalable. My backend work includes building RESTful APIs, implementing secure authentication 
                    systems, optimizing database queries, and leveraging caching strategies for high-traffic applications.
                  </p>
                  <p className="text-gray-400 group-hover:text-gray-300 leading-relaxed mb-0 transition-colors">
                    On the frontend, I create responsive, accessible user interfaces using React, Inertia.js, and Tailwind CSS. 
                    I believe great software isn&apos;t just about functionality—it&apos;s about delivering an exceptional user experience. 
                    My approach combines technical excellence with user-centered design principles.
                  </p>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/20 to-transparent blur-2xl group-hover:from-primary-500/40 transition-all duration-500" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="group relative mb-8"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 blur transition-all duration-500" />
                <div className="relative bg-slate-800/90 backdrop-blur-xl rounded-xl p-8 border border-slate-700 group-hover:border-primary-500/50 transition-all duration-500">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-primary-500/20 to-purple-500/20 border border-primary-500/30">
                      <Target className="w-6 h-6 text-primary-400" />
                    </div>
                    <h2 className="text-2xl font-heading font-bold text-white m-0">
                      What I Bring
                    </h2>
                  </div>
                  <p className="text-gray-400 group-hover:text-gray-300 leading-relaxed mb-4 transition-colors">
                    Beyond technical skills, I bring a problem-solving mindset and a commitment to continuous learning. 
                    I stay updated with industry best practices and emerging technologies, always seeking ways to improve 
                    my craft. Whether it&apos;s optimizing application performance, integrating third-party services, or 
                    architecting complex systems, I approach each challenge with curiosity and determination.
                  </p>
                  <p className="text-gray-400 group-hover:text-gray-300 leading-relaxed mb-0 transition-colors">
                    I value clear communication, attention to detail, and writing code that others can understand and maintain. 
                    My goal is to build software that not only works flawlessly but also stands the test of time.
                  </p>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/20 to-transparent blur-2xl group-hover:from-primary-500/40 transition-all duration-500" />
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-12 flex justify-center"
            >
              <a
                href="/resume.pdf"
                download
                className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg text-white bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 transition-all shadow-lg shadow-primary-500/50 hover:shadow-xl hover:shadow-primary-500/70 overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  <Download className="mr-2 w-5 h-5 group-hover:animate-bounce" />
                  Download Resume
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <Experience />
    </>
  )
}
