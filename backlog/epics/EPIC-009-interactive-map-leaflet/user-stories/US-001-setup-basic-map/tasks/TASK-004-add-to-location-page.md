# TASK-004: Add Map to Location Page

**Status**: To Do  
**Priority**: High  
**Estimated Time**: 20 minutes

---

## Task Description

Add the PropertyMap component to a page where users can see the property location and proximity to ski lifts.

## Agent Prompt

```
Add the interactive map component to a page on the website.

Task:
1. Determine which page should display the map (options: About section, dedicated location page, or pillar page)
2. Import the PropertyMap component
3. Add it to the page with appropriate section heading
4. Style to match existing page design
5. Test on desktop and mobile

If no location page exists, add to the About section or homepage.
```

## Implementation

Add to existing page or create new location section:

```typescript
import PropertyMap from '@/components/PropertyMap'

export default function Page() {
  return (
    <main>
      {/* Existing content */}

      <PropertyMap />

      {/* More content */}
    </main>
  )
}
```

## Verification

- [ ] Map displays on the page
- [ ] Section has clear heading
- [ ] Mobile responsive
- [ ] No layout issues
- [ ] Deployed and live

---

**Estimated Effort**: 20 minutes
