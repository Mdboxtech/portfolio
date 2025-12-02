'use client'

import { Server, Code, Wrench, CheckCircle2, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

type Skill = {
  name: string
  level: 'Advanced' | 'Intermediate' | 'Familiar'
}

type SkillCategory = {
  title: string
  icon: React.ComponentType<{ className?: string }>
  color: string
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Backend Development',
    icon: Server,
    color: 'text-blue-600 dark:text-blue-400',
    skills: [
      { name: 'Laravel (PHP)', level: 'Advanced' },
      { name: 'RESTful APIs', level: 'Advanced' },
      { name: 'MySQL', level: 'Advanced' },
      { name: 'Authentication & Authorization', level: 'Advanced' },
      { name: 'Queue Systems', level: 'Intermediate' },
      { name: 'Caching (Redis)', level: 'Intermediate' },
      { name: 'Database Optimization', level: 'Advanced' },
    ],
  },
  {
    title: 'Frontend Development',
    icon: Code,
    color: 'text-green-600 dark:text-green-400',
    skills: [
      { name: 'React', level: 'Advanced' },
      { name: 'Inertia.js', level: 'Advanced' },
      { name: 'Tailwind CSS', level: 'Advanced' },
      { name: 'Livewire', level: 'Intermediate' },
      { name: 'JavaScript (ES6+)', level: 'Advanced' },
      { name: 'AJAX', level: 'Advanced' },
      { name: 'Responsive Design', level: 'Advanced' },
    ],
  },
  {
    title: 'DevOps & Tools',
    icon: Wrench,
    color: 'text-purple-600 dark:text-purple-400',
    skills: [
      { name: 'Docker', level: 'Intermediate' },
      { name: 'Git & GitHub', level: 'Advanced' },
      { name: 'GitHub Actions', level: 'Intermediate' },
      { name: 'Apache', level: 'Intermediate' },
      { name: 'Cloudways', level: 'Intermediate' },
      { name: 'Postman (API Testing)', level: 'Advanced' },
      { name: 'Linux/Unix', level: 'Intermediate' },
    ],
  },
  {
    title: 'Additional Skills',
    icon: CheckCircle2,
    color: 'text-orange-600 dark:text-orange-400',
    skills: [
      { name: 'WordPress Customization', level: 'Advanced' },
      { name: 'UI/UX Optimization', level: 'Intermediate' },
      { name: 'SEO Basics', level: 'Familiar' },
      { name: 'Email Integration (Zoho Mail)', level: 'Intermediate' },
      { name: 'Third-party API Integration', level: 'Advanced' },
      { name: 'Code Review & Refactoring', level: 'Advanced' },
    ],
  },
]

const getLevelColor = (level: string) => {
  switch (level) {
    case 'Advanced':
      return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
    case 'Intermediate':
      return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
    case 'Familiar':
      return 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300'
    default:
      return ''
  }
}

export default function Skills() {
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
              <Sparkles className="w-4 h-4 text-primary-400" />
              <span className="text-sm text-primary-300 font-mono">Technical Expertise</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-primary-200 to-primary-400 bg-clip-text text-transparent">
                Skills & Expertise
              </span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and proficiency levels across different areas of software development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  {/* Glowing border effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-100 blur transition-all duration-500" />
                  
                  <div className="relative bg-slate-800/90 backdrop-blur-xl rounded-xl p-8 border border-slate-700 group-hover:border-primary-500/50 transition-all duration-500">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-primary-500/20 to-purple-500/20 border border-primary-500/30">
                        <Icon className={`w-6 h-6 ${category.color}`} />
                      </div>
                      <h2 className="text-2xl font-heading font-bold text-white">
                        {category.title}
                      </h2>
                    </div>

                    <div className="space-y-3">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                          viewport={{ once: true }}
                          whileHover={{ x: 5 }}
                          className="flex items-center justify-between p-3 rounded-lg bg-slate-700/50 hover:bg-slate-700 border border-slate-600/50 hover:border-primary-500/30 transition-all cursor-default"
                        >
                          <span className="text-white font-medium">
                            {skill.name}
                          </span>
                          <span
                            className={`px-3 py-1 text-xs font-mono font-semibold rounded-full border ${getLevelColor(
                              skill.level
                            )}`}
                          >
                            {skill.level}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Corner glow */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/20 to-transparent blur-2xl group-hover:from-primary-500/40 transition-all duration-500" />
                  </div>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500/50 to-purple-500/50 rounded-xl blur" />
            <div className="relative bg-slate-800/90 backdrop-blur-xl rounded-xl p-8 border border-primary-500/30">
              <h3 className="text-xl font-heading font-bold text-white mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary-400" />
                Proficiency Levels Explained
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="group">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 text-xs font-mono font-semibold rounded-full border bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 border-green-500/30">
                      Advanced
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    Expert-level proficiency with extensive hands-on experience and deep understanding.
                  </p>
                </div>
                <div className="group">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 text-xs font-mono font-semibold rounded-full border bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border-blue-500/30">
                      Intermediate
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    Solid working knowledge with practical experience in real-world projects.
                  </p>
                </div>
                <div className="group">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 text-xs font-mono font-semibold rounded-full border bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 border-gray-500/30">
                      Familiar
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    Basic understanding and exposure through projects or learning.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
