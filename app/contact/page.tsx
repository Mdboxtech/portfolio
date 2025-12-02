'use client'

import { useState } from 'react'
import { Mail, Linkedin, Github, Send, CheckCircle, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    // In production, integrate with Formspree or Netlify Forms
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section className="relative min-h-screen py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 backdrop-blur-sm mb-6">
              <Mail className="w-4 h-4 text-primary-400" />
              <span className="text-sm text-primary-300 font-mono">Let&apos;s Connect</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-primary-200 to-primary-400 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              I&apos;m always interested in hearing about new projects and opportunities. 
              Feel free to reach out if you&apos;d like to work together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-heading font-bold text-white mb-6">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <a
                    href="mailto:mdboxtech@gmail.com"
                    className="group relative block"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-100 blur transition-all duration-300" />
                    <div className="relative flex items-center gap-4 p-4 rounded-lg bg-slate-800/90 backdrop-blur-xl border border-slate-700 group-hover:border-primary-500/50 transition-all">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-500/20 border border-primary-500/30 flex items-center justify-center group-hover:bg-primary-500/30 transition-colors">
                        <Mail className="w-6 h-6 text-primary-400" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 font-mono">Email</div>
                        <div className="font-medium text-white">mdboxtech@gmail.com</div>
                      </div>
                    </div>
                  </a>

                  <a
                    href="https://github.com/Mdboxtech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-100 blur transition-all duration-300" />
                    <div className="relative flex items-center gap-4 p-4 rounded-lg bg-slate-800/90 backdrop-blur-xl border border-slate-700 group-hover:border-primary-500/50 transition-all">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-700/50 border border-slate-600 flex items-center justify-center group-hover:bg-slate-700 transition-colors">
                        <Github className="w-6 h-6 text-gray-300" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 font-mono">GitHub</div>
                        <div className="font-medium text-white">@Mdboxtech</div>
                      </div>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/muhammad-abdullahi-ali-a47307292"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-100 blur transition-all duration-300" />
                    <div className="relative flex items-center gap-4 p-4 rounded-lg bg-slate-800/90 backdrop-blur-xl border border-slate-700 group-hover:border-primary-500/50 transition-all">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                        <Linkedin className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 font-mono">LinkedIn</div>
                        <div className="font-medium text-white">Muhammad Abdullahi Ali</div>
                      </div>
                    </div>
                  </a>

                  <a
                    href="tel:+2349039575082"
                    className="group relative block"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-100 blur transition-all duration-300" />
                    <div className="relative flex items-center gap-4 p-4 rounded-lg bg-slate-800/90 backdrop-blur-xl border border-slate-700 group-hover:border-primary-500/50 transition-all">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                        <Phone className="w-6 h-6 text-green-400" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 font-mono">Phone</div>
                        <div className="font-medium text-white">+234 903 957 5082</div>
                      </div>
                    </div>
                  </a>

                  <div className="group relative block">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-100 blur transition-all duration-300" />
                    <div className="relative flex items-center gap-4 p-4 rounded-lg bg-slate-800/90 backdrop-blur-xl border border-slate-700 group-hover:border-primary-500/50 transition-all">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                        <MapPin className="w-6 h-6 text-orange-400" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 font-mono">Location</div>
                        <div className="font-medium text-white">Lagos, Nigeria</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-purple-500 rounded-xl opacity-50 blur" />
                <div className="relative bg-slate-800/90 backdrop-blur-xl rounded-xl p-6 border border-primary-500/30">
                  <h3 className="font-heading font-bold text-white mb-2">
                    Looking for my resume?
                  </h3>
                  <p className="text-sm text-gray-400 mb-4">
                    Download my full resume to learn more about my experience and qualifications.
                  </p>
                  <a
                    href="/resume.pdf"
                    download
                    className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-lg text-white bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-500 hover:to-purple-500 transition-all shadow-lg hover:shadow-primary-500/50 w-full"
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-purple-500 rounded-xl opacity-50 blur" />
              <div className="relative bg-slate-800/90 backdrop-blur-xl rounded-xl p-8 border border-primary-500/30">
                <h2 className="text-2xl font-heading font-bold text-white mb-6">
                  Send a Message
                </h2>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mb-4 animate-pulse">
                      <CheckCircle className="w-8 h-8 text-green-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Thank you!
                    </h3>
                    <p className="text-gray-400">
                      I&apos;ll get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2 font-mono">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-slate-600 bg-slate-900/50 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 font-mono">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-slate-600 bg-slate-900/50 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2 font-mono">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg border border-slate-600 bg-slate-900/50 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all resize-none"
                        placeholder="Tell me about your project..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="group relative w-full"
                    >
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-purple-500 rounded-lg opacity-75 group-hover:opacity-100 blur transition-all duration-300" />
                      <div className="relative w-full inline-flex items-center justify-center px-6 py-4 text-base font-medium rounded-lg text-white bg-slate-900 border border-primary-500/50 group-hover:border-primary-500 transition-all">
                        Send Message
                        <Send className="ml-2 w-5 h-5" />
                      </div>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
