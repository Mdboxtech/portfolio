import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const projectsDirectory = path.join(process.cwd(), 'data/projects')

export type ProjectMatter = {
  title: string
  description: string
  date: string
  tags: string[]
  featured: boolean
}

export type Project = {
  slug: string
  content: string
  data: ProjectMatter
}

export function getProjectBySlug(slug: string): Project | null {
  try {
    const fullPath = path.join(projectsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      content,
      data: data as ProjectMatter,
    }
  } catch (error) {
    return null
  }
}

export function getAllProjects(): Project[] {
  try {
    const fileNames = fs.readdirSync(projectsDirectory)
    const projects = fileNames
      .filter((fileName) => fileName.endsWith('.md'))
      .map((fileName) => {
        const slug = fileName.replace(/\.md$/, '')
        return getProjectBySlug(slug)
      })
      .filter((project): project is Project => project !== null)
      .sort((a, b) => {
        return new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
      })

    return projects
  } catch (error) {
    return []
  }
}

export function getAllProjectSlugs(): string[] {
  try {
    const fileNames = fs.readdirSync(projectsDirectory)
    return fileNames
      .filter((fileName) => fileName.endsWith('.md'))
      .map((fileName) => fileName.replace(/\.md$/, ''))
  } catch (error) {
    return []
  }
}
