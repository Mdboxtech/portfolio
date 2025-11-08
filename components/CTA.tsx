import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-20 bg-primary-600 dark:bg-primary-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Let's Work Together
          </h2>
          <p className="text-lg text-primary-100 mb-8">
            I'm always interested in hearing about new projects and opportunities. 
            Whether you have a question or just want to say hi, feel free to reach out.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg text-primary-600 bg-white hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
          >
            Get In Touch
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
