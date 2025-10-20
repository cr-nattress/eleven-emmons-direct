# TASK-001: Create Base Component Map

**Task ID:** TASK-001
**User Story:** US-002 - Create MDX Component Mapping
**Status:** To Do
**Estimated Time:** 15 minutes

## Task Description

Create the base MDX component mapping file that overrides default HTML elements with Next.js optimized components.

## Agent Prompt

```
Create a new file at /components/mdx-components.tsx with the following content:

The file should:
1. Import MDXComponents type from 'mdx/types'
2. Import Next.js Link and Image components
3. Export a useMDXComponents function
4. Override the <a> tag to use Next.js Link
5. Override the <img> tag to use Next.js Image with proper sizing
6. Apply appropriate Tailwind CSS classes for styling

Use this structure:

```typescript
import type { MDXComponents } from 'mdx/types'
import Link from 'next/link'
import Image from 'next/image'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Override anchor tags with Next.js Link
    a: (props) => (
      <Link
        href={String(props.href)}
        className="text-primary hover:text-primary-dark underline transition-colors"
      >
        {props.children}
      </Link>
    ),

    // Override img tags with Next.js Image
    img: (props: any) => (
      <Image
        src={props.src}
        alt={props.alt ?? ''}
        width={props.width ?? 1200}
        height={props.height ?? 600}
        className="rounded-lg my-6 w-full h-auto"
      />
    ),

    ...components,
  }
}
```

After creation:
1. Verify the file exists at the correct path
2. Check that TypeScript has no errors
3. Ensure imports resolve correctly
```

## File to Create

**Path:** `/components/mdx-components.tsx`

## Verification Steps

1. File exists at correct location
2. No TypeScript errors
3. Can be imported without errors
4. Exports useMDXComponents function

## Expected Output

- New mdx-components.tsx file created
- TypeScript compiles without errors
- Function signature matches MDXComponents type

## Notes

- This provides the base for all MDX component overrides
- Will be enhanced with custom components in next task
- Follows Next.js best practices for optimized links and images
