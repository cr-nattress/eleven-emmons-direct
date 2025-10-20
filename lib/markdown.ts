import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

const contentDirectory = path.join(process.cwd(), 'content')

export interface MarkdownContent {
  slug: string
  title?: string
  contentHtml: string
  data: { [key: string]: any }
}

/**
 * Get and parse a markdown file from the content directory
 * @param slug - The name of the markdown file (without .md extension)
 * @returns Parsed markdown content with frontmatter data
 */
export async function getMarkdownContent(
  slug: string
): Promise<MarkdownContent> {
  try {
    const fullPath = path.join(contentDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Parse frontmatter and content
    const { data, content } = matter(fileContents)

    // Convert markdown to HTML
    const contentHtml = await marked(content)

    return {
      slug,
      title: data.title,
      contentHtml,
      data,
    }
  } catch (error) {
    console.error(`Error reading markdown file: ${slug}.md`, error)
    // Return default content if file doesn't exist
    return {
      slug,
      contentHtml: '<p>Content coming soon...</p>',
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
      .filter((fileName) => fileName.endsWith('.md'))
      .map((fileName) => fileName.replace(/\.md$/, ''))
  } catch (error) {
    console.error('Error reading content directory', error)
    return []
  }
}
