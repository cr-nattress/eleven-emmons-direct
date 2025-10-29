# TASK-001: Update Library Imports and Plugin Configuration

**Task ID:** TASK-001
**User Story:** US-003 - Update Markdown Library
**Status:** To Do
**Estimated Time:** 25 minutes

## Task Description

Update the /lib/markdown.ts file to import next-mdx-remote and configure the plugin pipeline.

## Agent Prompt

````
Update /lib/markdown.ts file to use next-mdx-remote with the following changes:

1. **Update imports** - Replace marked imports with next-mdx-remote:

```typescript
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import type { MDXRemoteSerializeResult } from 'next-mdx-remote'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
// @ts-ignore - optional
import rehypePrettyCode from 'rehype-pretty-code'
````

2. **Update the MarkdownContent interface**:

```typescript
export interface MarkdownContent {
  slug: string
  title?: string
  mdxSource: MDXRemoteSerializeResult // Changed from contentHtml: string
  data: { [key: string]: any }
}
```

3. **Add compileMDX helper function** before getMarkdownContent:

```typescript
/**
 * Compile MDX with all plugins
 */
async function compileMDX(source: string): Promise<MDXRemoteSerializeResult> {
  return serialize(source, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'append' }],
        [
          rehypePrettyCode,
          {
            theme: 'github-dark',
            keepBackground: true,
          },
        ],
      ],
      format: 'mdx',
    },
    parseFrontmatter: true,
  })
}
```

4. **Update getMarkdownContent function** to use serialize instead of marked:

Replace this line:

```typescript
const contentHtml = await marked(content)
```

With:

```typescript
const mdxSource = await compileMDX(content)
```

And update the return statement:

```typescript
return {
  slug,
  title: data.title,
  mdxSource, // Changed from contentHtml
  data,
}
```

5. **Update error handling** fallback:

```typescript
catch (error) {
  console.error(`Error reading markdown file: ${slug}.md`, error)
  const fallbackMdx = await compileMDX('<p>Content coming soon...</p>')
  return {
    slug,
    mdxSource: fallbackMdx,
    data: {},
  }
}
```

6. **Update getAllContentSlugs** to support .mdx files:

```typescript
.filter((fileName) => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
.map((fileName) => fileName.replace(/\.mdx?$/, ''))
```

After making changes:

1. Save the file
2. Verify TypeScript compilation succeeds
3. Check that no errors appear in the console
4. Verify the dev server still runs

```

## File to Update

**Path:** `/lib/markdown.ts`

## Verification Steps

1. All imports resolve correctly
2. No TypeScript errors
3. compileMDX function properly typed
4. MarkdownContent interface updated
5. File compiles successfully

## Expected Output

- Updated markdown.ts with MDX serialization
- No compilation errors
- Proper TypeScript types
- Plugin pipeline configured

## Notes

- Keep gray-matter import (still needed for frontmatter)
- Remove marked import (no longer needed)
- Add @ts-ignore for rehype-pretty-code if needed
- Plugin order matters: remark runs first, then rehype
```
