# TASK-001: Update Amenities Component

**Task ID:** TASK-001
**User Story:** US-006 - Update Amenities Component
**Status:** To Do
**Estimated Time:** 10 minutes

## Task Description

Update the Amenities component to use MDX rendering instead of dangerouslySetInnerHTML.

## Agent Prompt

````
Update /components/Amenities.tsx to use the MDX client wrapper.

Follow the same pattern as About component:

1. **Add import** at the top:

```typescript
import MDXClient from './mdx-remote-client'
````

2. **Find the content rendering** (around line 18-20):

Current:

```tsx
<div className="prose prose-lg max-w-none">
  <div dangerouslySetInnerHTML={{ __html: content.contentHtml }} />
</div>
```

3. **Replace with**:

```tsx
<div className="prose prose-lg max-w-none">
  <MDXClient mdxSource={content.mdxSource} />
</div>
```

After making changes:

1. Save the file
2. Check the Amenities section in browser
3. Verify the amenity icon grid still displays below the content
4. Check console for errors
5. Confirm all styling is preserved

The icon grid (lines 23-77) should remain unchanged.

```

## File to Update

**Path:** `/components/Amenities.tsx`

## Verification Steps

1. MDXClient import added
2. dangerouslySetInnerHTML removed
3. MDXClient component used
4. Icon grid displays correctly
5. No console errors

## Expected Output

- Amenities section renders with MDX
- Icon grid still displays
- No visual changes

## Notes

- Keep the icon grid section unchanged (it's hard-coded, not from content)
- Only update the content rendering part
- Same pattern as About component
```
