import type { Metadata } from 'next'
import { Download, User, Code2, Target } from 'lucide-react'
import Experience from '@/components/Experience'

export const metadata: Metadata = {
  title: 'About - Muhammad Abdullahi Ali (MD)',
  description: 'Learn more about Muhammad Abdullahi Ali, a Software Engineer with experience in Laravel, React, and full-stack web development.',
}

export default function About() {
  return (
    <>
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-8">
              About Me
            </h1>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <User className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  <h2 className="text-2xl font-heading font-bold text-gray-900 dark:text-white m-0">
                    Background
                  </h2>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  I&apos;m Muhammad Abdullahi Ali, also known as MD, a Software Engineer passionate about building 
                  solutions that make a difference. My journey in software development started as a web developer, 
                  where I honed my skills creating dynamic websites and applications. Over time, I evolved into 
                  full-stack development, focusing on robust backend systems and intuitive user interfaces.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-0">
                  Throughout my career, I&apos;ve had the privilege of collaborating with multiple tech-driven companies, 
                  building everything from e-commerce platforms to HR management systems and fintech applications. 
                  Each project has strengthened my ability to deliver scalable, secure, and user-focused solutions.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <Code2 className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  <h2 className="text-2xl font-heading font-bold text-gray-900 dark:text-white m-0">
                    Technical Focus
                  </h2>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  My expertise centers around Laravel and React, two powerful technologies that enable me to build 
                  modern, performant web applications. I specialize in clean architecture, ensuring code is maintainable 
                  and scalable. My backend work includes building RESTful APIs, implementing secure authentication 
                  systems, optimizing database queries, and leveraging caching strategies for high-traffic applications.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-0">
                  On the frontend, I create responsive, accessible user interfaces using React, Inertia.js, and Tailwind CSS. 
                  I believe great software isn&apos;t just about functionality—it&apos;s about delivering an exceptional user experience. 
                  My approach combines technical excellence with user-centered design principles.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <Target className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  <h2 className="text-2xl font-heading font-bold text-gray-900 dark:text-white m-0">
                    What I Bring
                  </h2>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  Beyond technical skills, I bring a problem-solving mindset and a commitment to continuous learning. 
                  I stay updated with industry best practices and emerging technologies, always seeking ways to improve 
                  my craft. Whether it&apos;s optimizing application performance, integrating third-party services, or 
                  architecting complex systems, I approach each challenge with curiosity and determination.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-0">
                  I value clear communication, attention to detail, and writing code that others can understand and maintain. 
                  My goal is to build software that not only works flawlessly but also stands the test of time.
                </p>
              </div>
            </div>

            <div className="mt-12 flex justify-center">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
              >
                <Download className="mr-2 w-5 h-5" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      <Experience />
    </>
  )
}
