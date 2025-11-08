import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ArrowLeft, Calendar, Tag } from 'lucide-react'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getProjectBySlug, getAllProjectSlugs } from '@/lib/projects'

type Props = {
  params: { slug: string }
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: `${project.data.title} - Muhammad Abdullahi Ali (MD)`,
    description: project.data.description,
    openGraph: {
      title: project.data.title,
      description: project.data.description,
      type: 'article',
      publishedTime: project.data.date,
      tags: project.data.tags,
    },
  }
}

export default function ProjectPage({ params }: Props) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <article className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-800 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link
            href="/projects"
            className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium mb-8 group"
          >
            <ArrowLeft className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>

          {/* Project Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6">
              {project.data.title}
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
              {project.data.description}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <time dateTime={project.data.date}>
                  {new Date(project.data.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                <Tag className="w-4 h-4" />
                {project.data.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </header>

          {/* Project Content */}
          <div className="prose prose-lg prose-gray dark:prose-invert max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h2: ({ node, ...props }) => (
                  <h2 className="text-3xl font-heading font-bold text-gray-900 dark:text-white mt-12 mb-6" {...props} />
                ),
                h3: ({ node, ...props }) => (
                  <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mt-8 mb-4" {...props} />
                ),
                p: ({ node, ...props }) => (
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4" {...props} />
                ),
                ul: ({ node, ...props }) => (
                  <ul className="list-disc list-inside space-y-2 mb-6 text-gray-600 dark:text-gray-400" {...props} />
                ),
                ol: ({ node, ...props }) => (
                  <ol className="list-decimal list-inside space-y-2 mb-6 text-gray-600 dark:text-gray-400" {...props} />
                ),
                code: ({ node, inline, ...props }: any) =>
                  inline ? (
                    <code className="px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-primary-600 dark:text-primary-400 text-sm font-mono" {...props} />
                  ) : (
                    <code className="block p-4 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-sm font-mono overflow-x-auto" {...props} />
                  ),
                pre: ({ node, ...props }) => (
                  <pre className="mb-6 rounded-lg overflow-hidden" {...props} />
                ),
                a: ({ node, ...props }) => (
                  <a className="text-primary-600 dark:text-primary-400 hover:underline font-medium" {...props} />
                ),
                blockquote: ({ node, ...props }) => (
                  <blockquote className="border-l-4 border-primary-500 pl-4 italic text-gray-600 dark:text-gray-400 my-6" {...props} />
                ),
                hr: ({ node, ...props }) => (
                  <hr className="my-12 border-gray-200 dark:border-gray-700" {...props} />
                ),
              }}
            >
              {project.content}
            </ReactMarkdown>
          </div>

          {/* Back to Projects CTA */}
          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
              <Link
                href="/projects"
                className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium group"
              >
                <ArrowLeft className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                View All Projects
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 transition-colors"
              >
                Discuss Your Project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
