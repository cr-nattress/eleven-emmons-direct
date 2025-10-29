# TASK-001: Create Client Wrapper Component

**Task ID:** TASK-001
**User Story:** US-004 - Create Client Wrapper Component
**Status:** To Do
**Estimated Time:** 10 minutes

## Task Description

Create a client-side wrapper component for MDXRemote that can be used by server components.

## Agent Prompt

````
Create a new file at /components/mdx-remote-client.tsx with the following content:

```typescript
'use client'

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { useMDXComponents } from './mdx-components'

export default function MDXClient({
  mdxSource,
}: {
  mdxSource: MDXRemoteSerializeResult
}) {
  const components = useMDXComponents({})
  return <MDXRemote {...mdxSource} components={components} />
}
````

This component:

- Is marked as 'use client' for client-side rendering
- Imports MDXRemote and its types
- Uses the useMDXComponents hook to get component mappings
- Accepts mdxSource as a prop
- Spreads the mdxSource to MDXRemote with component mapping

Usage in server components:

```typescript
import MDXClient from '@/components/mdx-remote-client'
import { getMarkdownContent } from '@/lib/markdown'

export default async function MyComponent() {
  const content = await getMarkdownContent('property')
  return <MDXClient mdxSource={content.mdxSource} />
}
```

After creation:

1. Verify the file exists
2. Check TypeScript compilation
3. Ensure imports resolve
4. Confirm 'use client' directive is at the top

```

## File to Create

**Path:** `/components/mdx-remote-client.tsx`

## Verification Steps

1. File exists at correct location
2. Has 'use client' directive at top
3. No TypeScript errors
4. Imports resolve correctly
5. Component properly exports

## Expected Output

- New mdx-remote-client.tsx file
- Clean client component wrapper
- Ready to use in server components

## Notes

- 'use client' directive MUST be first line
- This is the bridge between server and client rendering
- Keeps server components server-rendered
- Only MDX rendering happens client-side
```
