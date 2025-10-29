import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { logger } from './logger'

const contentDirectory = path.join(process.cwd(), 'content')

export interface MarkdownContent {
  slug: string
  title?: string
  source: string
  data: Record<string, unknown>
}

/**
 * Get and parse a markdown file from the content directory
 * @param slug - The name of the markdown file (without .md extension)
 * @returns Parsed markdown content with frontmatter data and raw source
 */
export async function getMarkdownContent(
  slug: string
): Promise<MarkdownContent> {
  try {
    const fullPath = path.join(contentDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Parse frontmatter and content
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title,
      source: content,
      data,
    }
  } catch (error) {
    logger.error('Error reading markdown file:', slug, error)
    // Return default content if file doesn't exist
    return {
      slug,
      source: '<p>Content coming soon...</p>',
      data: {},
    }
  }
}

/**
 * Get all markdown files in the content directory
 * @returns Array of file slugs
 */
export function getAllContentSlugs(): string[] {
  try {
    const fileNames = fs.readdirSync(contentDirectory)
    return fileNames
      .filter(
        (fileName) => fileName.endsWith('.md') || fileName.endsWith('.mdx')
      )
      .map((fileName) => fileName.replace(/\.mdx?$/, ''))
  } catch (error) {
    logger.error('Error reading content directory', error)
    return []
  }
}
