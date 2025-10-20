# US-006: Ensure Accessibility Compliance (WCAG 2.1 AA)

**Story ID:** US-006
**Epic:** EPIC-010 - About Section Redesign
**Status:** 📋 To Do
**Priority:** 🔴 Critical (High)
**Story Points:** 3
**Estimated Time:** 1.5-2.5 hours

## User Story

**As a** user with accessibility needs (vision impairment, screen reader, keyboard-only navigation),
**I want** the About section to meet WCAG 2.1 AA standards,
**So that** I can access all property information regardless of my abilities.

## Acceptance Criteria

1. ✅ Semantic HTML structure using proper elements (section, h2, p, div)
2. ✅ Color contrast meets WCAG AA (4.5:1 minimum for normal text)
3. ✅ All text is readable by screen readers in logical order
4. ✅ Decorative elements (checkmarks) marked with `aria-hidden="true"`
5. ✅ Section has proper ID for skip navigation (`id="about"`)
6. ✅ Heading hierarchy is correct (h2 for section heading)
7. ✅ Passes Lighthouse accessibility audit (100/100)
8. ✅ Tested with screen reader (NVDA, JAWS, or VoiceOver)

## Technical Notes

### Semantic HTML Requirements

```typescript
// Proper semantic structure
<section id="about" className="...">  {/* Landmark element */}
  <div className="...">
    <h2>About This Property</h2>  {/* Heading level 2 */}
    <p>Opening narrative...</p>  {/* Paragraph element */}

    <div role="list" aria-label="Property statistics">
      {/* Stats cards - consider role="list" if semantically a list */}
    </div>

    <ul className="grid sm:grid-cols-2 gap-4">
      {/* Features - use <ul> since it's a list */}
      <li className="flex items-start gap-3">
        <span aria-hidden="true">✓</span>
        <span>Feature text</span>
      </li>
    </ul>
  </div>
</section>
```

### Color Contrast Requirements

Test all color combinations:
- **Text on white:** gray-900 (#111827) - Contrast: 15.3:1 ✅
- **Body text:** gray-700 (#374151) - Contrast: 9.7:1 ✅
- **Labels:** gray-600 (#6B7280) at 14px+ - Contrast: 7.0:1 ✅
- **Green checkmark:** green-600 (#10B981) - Contrast: 3.4:1 ⚠️ (decorative only)

### Screen Reader Considerations

**Reading Order:**
1. Section announcement: "About This Property, section"
2. Heading: "About This Property, heading level 2"
3. Opening paragraph
4. Stats (in logical order: guests, bedrooms, bathrooms, sqft, rating)
5. Features list (each feature item)
6. Closing paragraph

**Aria Labels (if needed):**
```typescript
// Only if needed for clarity
<div role="region" aria-label="Property details and features">
  {/* Content */}
</div>
```

### Keyboard Navigation

Since this section has no interactive elements:
- No keyboard traps to worry about
- Skip link should allow jumping to `#about`
- If stat cards become interactive, add `tabindex="0"` and visible focus styles

### ARIA Best Practices
- Avoid redundant ARIA labels
- Only use ARIA when HTML semantics aren't sufficient
- Checkmarks: `aria-hidden="true"` (decorative, text conveys meaning)
- Don't add `role="button"` to non-interactive stat cards

## Definition of Done

- [ ] Semantic HTML elements used correctly
- [ ] All color contrast ratios pass WCAG AA (tested with WebAIM tool)
- [ ] Screen reader testing completed (NVDA or VoiceOver)
- [ ] Content reads in logical order
- [ ] Lighthouse accessibility score: 100/100
- [ ] WAVE browser extension shows no errors
- [ ] Decorative elements properly hidden from screen readers
- [ ] Heading hierarchy validated (no skipped levels)

## Dependencies

- **Requires:** US-001, US-002, US-003 (All components must exist)
- **Blocked by:** None (can test incrementally)
- **Blocks:** US-008 (Accessibility testing is part of QA)

## Tasks

1. **TASK-018:** Audit semantic HTML and fix any issues
2. **TASK-019:** Test color contrast ratios with WebAIM tool
3. **TASK-020:** Test with screen reader and fix reading order issues
4. **TASK-021:** Run Lighthouse and WAVE audits, fix all errors

## Related Stories

- **Previous:** US-005 (Implement responsive design)
- **Next:** US-007 (Content migration and copywriting)
- **Related:** US-008 (QA includes accessibility testing)

## Notes

- Use WebAIM Contrast Checker: https://webaim.org/resources/contrastchecker/
- Test with NVDA (Windows) or VoiceOver (Mac)
- Install WAVE browser extension for quick checks
- Consider using `<ul>` for features list (semantic list element)
- Don't over-use ARIA - HTML semantics are preferred
- Checkmark (✓) should be decorative since text describes the feature
- Ensure focus indicators are visible if hover states are interactive

## Testing Tools

1. **Lighthouse:** Built into Chrome DevTools
2. **WAVE:** Browser extension (https://wave.webaim.org/)
3. **WebAIM Contrast Checker:** https://webaim.org/resources/contrastchecker/
4. **Screen Readers:**
   - Windows: NVDA (free)
   - Mac: VoiceOver (built-in)
   - Windows: JAWS (paid, industry standard)

## Common Issues to Avoid

- ❌ Missing heading hierarchy (h1 → h3, skipping h2)
- ❌ Using `<div>` instead of semantic elements
- ❌ Insufficient color contrast
- ❌ Missing alt text on images (N/A for this component)
- ❌ Using ARIA roles unnecessarily
- ❌ Forgetting `aria-hidden` on decorative elements

## WCAG 2.1 AA Criteria Checklist

- [ ] **1.3.1 Info and Relationships:** Proper semantic HTML
- [ ] **1.4.3 Contrast (Minimum):** All text meets 4.5:1 ratio
- [ ] **2.1.1 Keyboard:** All functionality keyboard accessible (N/A - no interactive elements)
- [ ] **2.4.1 Bypass Blocks:** Skip link to #about exists
- [ ] **2.4.6 Headings and Labels:** Clear, descriptive headings
- [ ] **3.1.1 Language of Page:** HTML lang attribute set (page-level)
- [ ] **4.1.2 Name, Role, Value:** Proper ARIA usage
