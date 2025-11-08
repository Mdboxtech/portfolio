import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-heading font-bold text-gray-900 dark:text-white mb-4">
              Muhammad Abdullahi Ali
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Software Engineer building secure and scalable web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Resume
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
              Connect
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Mdboxtech"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-abdullahi-ali-a47307292"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </a>
              <a
                href="mailto:mdboxtech@gmail.com"
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {currentYear} Muhammad Abdullahi Ali. All rights reserved.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Built with Next.js and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
