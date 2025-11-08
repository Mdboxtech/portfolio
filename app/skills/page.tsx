import type { Metadata } from 'next'
import { Server, Code, Wrench, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Skills - Muhammad Abdullahi Ali (MD)',
  description: 'Technical skills and expertise in Laravel, React, PHP, MySQL, and modern web development technologies.',
}

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
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6">
              Skills & Expertise
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and proficiency levels across different areas of software development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 transition-all"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Icon className={`w-7 h-7 ${category.color}`} />
                    <h2 className="text-2xl font-heading font-bold text-gray-900 dark:text-white">
                      {category.title}
                    </h2>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-slate-700/50 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
                      >
                        <span className="text-gray-900 dark:text-white font-medium">
                          {skill.name}
                        </span>
                        <span
                          className={`px-3 py-1 text-xs font-semibold rounded-full ${getLevelColor(
                            skill.level
                          )}`}
                        >
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-16 bg-primary-50 dark:bg-primary-900/20 rounded-xl p-8 border border-primary-200 dark:border-primary-800">
            <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-4">
              Proficiency Levels Explained
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                    Advanced
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Expert-level proficiency with extensive hands-on experience and deep understanding.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                    Intermediate
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Solid working knowledge with practical experience in real-world projects.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                    Familiar
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Basic understanding and exposure through projects or learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
