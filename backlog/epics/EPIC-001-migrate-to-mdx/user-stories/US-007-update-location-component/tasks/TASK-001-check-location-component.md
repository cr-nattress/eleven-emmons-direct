# TASK-001: Check and Update Location Component

**Task ID:** TASK-001
**User Story:** US-007 - Update Location Component
**Status:** To Do
**Estimated Time:** 15 minutes

## Task Description

Check if the Location component uses markdown content, and if so, update it to use MDX rendering.

## Agent Prompt

```
Check and potentially update /components/Location.tsx:

1. **Read the file** to see if it uses markdown content:

```bash
Read /components/Location.tsx
```

2. **Look for these patterns**:
   - Import of `getMarkdownContent` from '@/lib/markdown'
   - Call to `getMarkdownContent('area')` or similar
   - Usage of `dangerouslySetInnerHTML`

3. **If it uses markdown content**:
   - Add import: `import MDXClient from './mdx-remote-client'`
   - Replace dangerouslySetInnerHTML with MDXClient
   - Change `content.contentHtml` to `content.mdxSource`

4. **If it doesn't use markdown**:
   - No changes needed
   - Document that component doesn't use markdown

Example update (if needed):

Before:
```tsx
<div dangerouslySetInnerHTML={{ __html: content.contentHtml }} />
```

After:
```tsx
<MDXClient mdxSource={content.mdxSource} />
```

After checking:
1. Report whether component needs updating
2. If updated, verify it renders correctly
3. Check console for errors
4. Confirm styling is preserved
```

## File to Check

**Path:** `/components/Location.tsx`

## Verification Steps

1. Component file reviewed
2. Markdown usage identified (or not)
3. If uses markdown, updated to MDXClient
4. Page renders correctly
5. No console errors

## Expected Outcomes

**Scenario A - Uses Markdown:**
- Component updated to use MDXClient
- Renders correctly
- No errors

**Scenario B - Doesn't Use Markdown:**
- No changes needed
- Documented that component is static

## Notes

- Check if there's a /content/area.md file
- The component might use static HTML instead of markdown
- Only update if it actually uses markdown content
