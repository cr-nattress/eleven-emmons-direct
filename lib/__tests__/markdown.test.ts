import fs from 'fs'
import path from 'path'
import { getMarkdownContent, getAllContentSlugs } from '@/lib/markdown'
import { logger } from '@/lib/logger'

// Mock fs module
jest.mock('fs')
jest.mock('@/lib/logger', () => ({
  logger: {
    error: jest.fn(),
  },
}))

const mockFs = fs as jest.Mocked<typeof fs>

describe('markdown utility', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('getMarkdownContent', () => {
    it('successfully parses markdown file with frontmatter', async () => {
      const mockContent = `---
title: Test Post
description: A test post
---
# Hello World

This is test content.`

      mockFs.readFileSync.mockReturnValue(mockContent)

      const result = await getMarkdownContent('test')

      expect(result.slug).toBe('test')
      expect(result.title).toBe('Test Post')
      expect(result.data.description).toBe('A test post')
      expect(result.source).toContain('# Hello World')
      expect(result.source).toContain('This is test content.')
    })

    it('handles markdown without frontmatter', async () => {
      const mockContent = `# Simple Content\n\nNo frontmatter here.`

      mockFs.readFileSync.mockReturnValue(mockContent)

      const result = await getMarkdownContent('simple')

      expect(result.slug).toBe('simple')
      expect(result.title).toBeUndefined()
      expect(result.data).toEqual({})
      expect(result.source).toContain('# Simple Content')
    })

    it('returns default content when file does not exist', async () => {
      mockFs.readFileSync.mockImplementation(() => {
        throw new Error('ENOENT: no such file or directory')
      })

      const result = await getMarkdownContent('nonexistent')

      expect(result.slug).toBe('nonexistent')
      expect(result.source).toBe('<p>Content coming soon...</p>')
      expect(result.data).toEqual({})
      expect(logger.error).toHaveBeenCalledWith(
        'Error reading markdown file:',
        'nonexistent',
        expect.any(Error)
      )
    })

    it('constructs correct file path', async () => {
      const mockContent = `---\ntitle: Test\n---\nContent`
      mockFs.readFileSync.mockReturnValue(mockContent)

      await getMarkdownContent('about')

      expect(mockFs.readFileSync).toHaveBeenCalledWith(
        expect.stringContaining('content'),
        'utf8'
      )
      expect(mockFs.readFileSync).toHaveBeenCalledWith(
        expect.stringContaining('about.md'),
        'utf8'
      )
    })
  })

  describe('getAllContentSlugs', () => {
    it('returns array of markdown file slugs', () => {
      mockFs.readdirSync.mockReturnValue([
        'post1.md',
        'post2.mdx',
        'post3.md',
        'image.jpg',
        'data.json',
      ] as any)

      const result = getAllContentSlugs()

      expect(result).toEqual(['post1', 'post2', 'post3'])
      expect(result).not.toContain('image')
      expect(result).not.toContain('data')
    })

    it('handles empty content directory', () => {
      mockFs.readdirSync.mockReturnValue([] as any)

      const result = getAllContentSlugs()

      expect(result).toEqual([])
    })

    it('returns empty array when directory read fails', () => {
      mockFs.readdirSync.mockImplementation(() => {
        throw new Error('Directory not found')
      })

      const result = getAllContentSlugs()

      expect(result).toEqual([])
      expect(logger.error).toHaveBeenCalledWith(
        'Error reading content directory',
        expect.any(Error)
      )
    })

    it('filters both .md and .mdx files', () => {
      mockFs.readdirSync.mockReturnValue([
        'markdown.md',
        'extended.mdx',
        'text.txt',
      ] as any)

      const result = getAllContentSlugs()

      expect(result).toEqual(['markdown', 'extended'])
      expect(result.length).toBe(2)
    })
  })
})
