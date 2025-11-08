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
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-800 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6">
              Get In Touch
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              I&apos;m always interested in hearing about new projects and opportunities. 
              Feel free to reach out if you&apos;d like to work together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-6">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <a
                    href="mailto:mdboxtech@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-lg bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 transition-all group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center group-hover:bg-primary-200 dark:group-hover:bg-primary-900/50 transition-colors">
                      <Mail className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Email</div>
                      <div className="font-medium text-gray-900 dark:text-white">mdboxtech@gmail.com</div>
                    </div>
                  </a>

                  <a
                    href="https://github.com/Mdboxtech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 transition-all group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center group-hover:bg-gray-200 dark:group-hover:bg-gray-600 transition-colors">
                      <Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">GitHub</div>
                      <div className="font-medium text-gray-900 dark:text-white">@Mdboxtech</div>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/muhammad-abdullahi-ali-a47307292"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 transition-all group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
                      <Linkedin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">LinkedIn</div>
                      <div className="font-medium text-gray-900 dark:text-white">Muhammad Abdullahi Ali</div>
                    </div>
                  </a>

                  <a
                    href="tel:+2349039575082"
                    className="flex items-center gap-4 p-4 rounded-lg bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 transition-all group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center group-hover:bg-green-200 dark:group-hover:bg-green-900/50 transition-colors">
                      <Phone className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Phone</div>
                      <div className="font-medium text-gray-900 dark:text-white">+234 903 957 5082</div>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded-lg bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Location</div>
                      <div className="font-medium text-gray-900 dark:text-white">Lagos, Nigeria</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-6 border border-primary-200 dark:border-primary-800">
                <h3 className="font-heading font-bold text-gray-900 dark:text-white mb-2">
                  Looking for my resume?
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Download my full resume to learn more about my experience and qualifications.
                </p>
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 transition-colors w-full"
                >
                  Download Resume
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-6">
                  Send a Message
                </h2>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Thank you!
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      I&apos;ll get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                        placeholder="Tell me about your project..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center px-6 py-4 text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
                    >
                      Send Message
                      <Send className="ml-2 w-5 h-5" />
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
