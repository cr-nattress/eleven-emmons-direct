# US-009: Implement Accessibility Improvements (WCAG 2.1 AA)

**Story ID:** US-009
**Epic:** EPIC-012 - Code Quality, Testing & Production Readiness
**Status:** 📋 To Do
**Priority:** 🟡 Medium
**Story Points:** 8
**Estimated Time:** 2-3 hours

## User Story

**As a** user with disabilities (screen reader, keyboard-only navigation),
**I want** the website to be fully accessible,
**So that** I can browse the property, view images, and complete bookings independently.

## Acceptance Criteria

1. ✅ WCAG 2.1 AA compliance achieved
2. ✅ Keyboard navigation works for all interactive elements
3. ✅ Screen reader announces all content correctly
4. ✅ ARIA attributes added to dynamic elements
5. ✅ Skip links implemented for keyboard users
6. ✅ Focus visible styles implemented
7. ✅ Gallery lightbox keyboard accessible
8. ✅ Axe accessibility audit: 0 critical issues
9. ✅ Color contrast meets WCAG AA (4.5:1)

## Problem Statement

While the site has some accessibility features, gaps exist:

- Mobile menu state not announced to screen readers
- Gallery lightbox not keyboard accessible
- No skip links for keyboard navigation
- Missing ARIA labels on interactive elements
- Inconsistent focus indicators

**Impact:**

- ~15% of population excluded
- Legal compliance risk (ADA)
- SEO ranking affected
- Poor experience for keyboard users

## Solution

### 1. Add Skip Links

```typescript
// components/Header.tsx (UPDATE)
<header>
  {/* ✅ Skip link for keyboard users */}
  <a
    href="#main-content"
    className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-primary focus:text-white"
  >
    Skip to main content
  </a>

  {/* ... rest of header */}
</header>
```

```typescript
// app/page.tsx (UPDATE)
<main id="main-content" className="min-h-screen">
  {/* Content */}
</main>
```

### 2. Update Header with ARIA

```typescript
// components/Header.tsx (UPDATE)
<button
  onClick={() => setIsOpen(!isOpen)}
  aria-expanded={isOpen}  // ✅ Dynamic state
  aria-controls="mobile-menu"  // ✅ Links to menu
  aria-label={isOpen ? 'Close main menu' : 'Open main menu'}
>
  {/* ... */}
</button>

<div
  id="mobile-menu"  // ✅ ID for aria-controls
  role="navigation"
  aria-label="Mobile navigation"
>
  {/* ... */}
</div>
```

### 3. Make Gallery Keyboard Accessible

```typescript
// components/Gallery.tsx (UPDATE)
export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  // ✅ Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setSelectedImage(index)
    }
  }

  // ✅ Lightbox keyboard controls
  useEffect(() => {
    if (selectedImage === null) return

    const handleLightboxKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null)
      } else if (e.key === 'ArrowRight') {
        setSelectedImage((prev) => ((prev ?? 0) + 1) % images.length)
      } else if (e.key === 'ArrowLeft') {
        setSelectedImage((prev) =>
          ((prev ?? 0) - 1 + images.length) % images.length
        )
      }
    }

    window.addEventListener('keydown', handleLightboxKeyDown)
    return () => window.removeEventListener('keydown', handleLightboxKeyDown)
  }, [selectedImage])

  return (
    <div
      role="list"
      aria-label="Property photo gallery"
    >
      {images.map((image, index) => (
        <div
          key={index}
          role="listitem"
          tabIndex={0}  // ✅ Keyboard focusable
          onClick={() => setSelectedImage(index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          aria-label={`View ${image.alt} in lightbox`}
        >
          <Image src={image.src} alt={image.alt} />
        </div>
      ))}
    </div>
  )
}
```

### 4. Add Focus Visible Styles

```css
/* app/globals.css (ADD) */

/* ✅ Clear focus indicators */
*:focus-visible {
  outline: 2px solid theme('colors.primary.DEFAULT');
  outline-offset: 2px;
}

/* ✅ Remove outline for mouse/touch */
*:focus:not(:focus-visible) {
  outline: none;
}
```

### 5. Lightbox ARIA Attributes

```typescript
// components/Gallery.tsx - Lightbox (UPDATE)
<div
  role="dialog"  // ✅ Dialog role
  aria-modal="true"  // ✅ Modal flag
  aria-label="Image lightbox"
  className="fixed inset-0 z-50"
>
  <button
    onClick={() => setSelectedImage(null)}
    aria-label="Close lightbox"  // ✅ Descriptive label
  >
    <svg>...</svg>
  </button>

  <div
    aria-live="polite"  // ✅ Announce image changes
    aria-atomic="true"
  >
    Image {selectedImage + 1} of {images.length}
  </div>

  {/* Navigation buttons */}
  <button aria-label="Previous image">←</button>
  <button aria-label="Next image">→</button>
</div>
```

## Technical Implementation

### Files to Update

1. **`components/Header.tsx`** - ARIA attributes, skip link
2. **`components/Gallery.tsx`** - Keyboard navigation, ARIA
3. **`app/page.tsx`** - Main content ID
4. **`app/globals.css`** - Focus visible styles

### Testing Tools

**Automated Testing:**

```bash
# Install Axe CLI
npm install --save-dev @axe-core/cli

# Add script to package.json
"a11y": "npm run build && npx @axe-core/cli http://localhost:3000"

# Run test
npm run a11y
```

**Manual Testing:**

1. **Keyboard Navigation:**
   - Tab through entire page
   - All interactive elements reachable
   - Visible focus indicators
   - Skip link appears on first Tab

2. **Screen Reader:**
   - macOS: VoiceOver (Cmd+F5)
   - Windows: NVDA (free)
   - Test all sections
   - Verify announcements

3. **Browser Extensions:**
   - [WAVE](https://wave.webaim.org/extension/)
   - [Axe DevTools](https://www.deque.com/axe/devtools/)
   - [Lighthouse Accessibility](https://developer.chrome.com/docs/lighthouse/)

## Definition of Done

- [ ] Skip links implemented and working
- [ ] All ARIA attributes added
- [ ] Keyboard navigation fully functional
- [ ] Focus visible styles implemented
- [ ] Gallery lightbox keyboard accessible
- [ ] Axe audit: 0 critical issues
- [ ] Lighthouse accessibility: 95+
- [ ] Screen reader tested (VoiceOver or NVDA)
- [ ] Color contrast verified (WCAG AA)
- [ ] Documentation added to README

## Testing Checklist

### Keyboard Navigation

- [ ] Tab through entire page
- [ ] Skip link visible on Tab
- [ ] Gallery images focusable
- [ ] Lightbox opens with Enter/Space
- [ ] Lightbox closes with Escape
- [ ] Arrow keys navigate images
- [ ] All buttons reachable

### Screen Reader

- [ ] Header navigation announced
- [ ] Image alt text read correctly
- [ ] Button purposes clear
- [ ] Form labels (if any) associated
- [ ] Landmarks properly labeled

### Automated Tests

- [ ] Axe: 0 critical, 0 serious issues
- [ ] Lighthouse: 95+ accessibility score
- [ ] WAVE: 0 errors

## Benefits

1. **Inclusivity** - 15% more users can access site
2. **Legal** - ADA/WCAG compliance reduces risk
3. **SEO** - Better rankings (Google considers a11y)
4. **UX** - Benefits all users (keyboard shortcuts)
5. **Professionalism** - Shows attention to quality

## Dependencies

- @axe-core/cli for testing
- Screen reader software (VoiceOver, NVDA)

## Related Stories

- **Related:** US-001 (Testing) - Add a11y tests
- **Related:** US-005 (CI/CD) - Automate a11y checks

## WCAG 2.1 AA Requirements

**Perceivable:**

- ✅ Text alternatives (alt text)
- ✅ Color contrast 4.5:1 minimum

**Operable:**

- ✅ Keyboard accessible
- ✅ No keyboard traps
- ✅ Focus visible

**Understandable:**

- ✅ Consistent navigation
- ✅ ARIA labels
- ✅ Error messages clear

**Robust:**

- ✅ Valid HTML
- ✅ ARIA used correctly

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Axe Accessibility Testing](https://www.deque.com/axe/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [A11y Project](https://www.a11yproject.com/)

## Notes

- Test with real assistive technology
- Automated tests catch ~30% of issues
- Manual testing essential
- Consider hiring a11y consultants for audit
