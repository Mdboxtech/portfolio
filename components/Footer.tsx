'use client'

import Link from 'next/link'
import { Github, Linkedin, Mail, Terminal, ArrowUp, Code2, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-gradient-to-b from-slate-800 to-slate-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-br from-primary-500/20 to-purple-500/20 border border-primary-500/30">
                <Terminal className="w-5 h-5 text-primary-400" />
              </div>
              <h3 className="text-xl font-heading font-bold bg-gradient-to-r from-white to-primary-300 bg-clip-text text-transparent">
                Muhammad Abdullahi Ali
              </h3>
            </div>
            <p className="text-sm text-gray-400 mb-4 max-w-md">
              Software Engineer specializing in building secure and scalable web applications. 
              Passionate about creating innovative solutions with modern technologies.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/30">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-xs text-green-400 font-mono">Available for opportunities</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-primary-400" />
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About' },
                { href: '/skills', label: 'Skills' },
                { href: '/projects', label: 'Projects' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="group text-sm text-gray-400 hover:text-primary-400 transition-colors inline-flex items-center gap-2"
                  >
                    <span className="text-primary-400 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary-400" />
              Connect
            </h4>
            <div className="space-y-3">
              <a
                href="https://github.com/Mdboxtech"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary-500/50 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-gray-400 group-hover:text-primary-400 transition-colors" />
                <span className="text-sm text-gray-400 group-hover:text-white transition-colors">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-abdullahi-ali-a47307292"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary-500/50 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-primary-400 transition-colors" />
                <span className="text-sm text-gray-400 group-hover:text-white transition-colors">LinkedIn</span>
              </a>
              <a
                href="mailto:mdboxtech@gmail.com"
                className="group flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary-500/50 transition-all"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-gray-400 group-hover:text-primary-400 transition-colors" />
                <span className="text-sm text-gray-400 group-hover:text-white transition-colors">Email</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>© {currentYear} Muhammad Abdullahi Ali</span>
              <span className="hidden md:inline">•</span>
              <span className="text-xs font-mono">Built with Next.js & Tailwind CSS</span>
            </div>
            
            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-500/10 hover:bg-primary-500/20 border border-primary-500/30 hover:border-primary-400/50 transition-all"
              aria-label="Scroll to top"
            >
              <span className="text-sm text-primary-400 font-medium">Back to top</span>
              <ArrowUp className="w-4 h-4 text-primary-400 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </motion.div>

        {/* Terminal Command Line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 pt-6 border-t border-white/5"
        >
          <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
            <span className="text-primary-400">md@portfolio:~$</span>
            <span>echo "Thanks for visiting!"</span>
            <span className="animate-pulse">_</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
