import { MetadataRoute } from 'next'
import { getAllProjectSlugs } from '@/lib/projects'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mdali.dev'
  const currentDate = new Date()

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/skills`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]

  // Dynamic project pages
  const projectSlugs = getAllProjectSlugs()
  const projectPages = projectSlugs.map((slug) => ({
    url: `${baseUrl}/projects/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...projectPages]
}
