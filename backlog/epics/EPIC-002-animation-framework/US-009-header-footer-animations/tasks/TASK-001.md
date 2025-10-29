# TASK-001: Add Header Entrance Animation

## Task Description

Add subtle entrance animation to the header (logo and container) on page load.

## Priority

LOW

## Estimated Effort

1-2 hours

## Acceptance Criteria

- [ ] Header fades in on page load
- [ ] Animation is subtle and quick
- [ ] Logo appears smoothly
- [ ] Sticky/fixed behavior maintained
- [ ] Reduced motion preferences respected

## Agent Prompt

**Instructions:**

1. Header.tsx should already have 'use client' from US-006
2. Add entrance animation for header container
3. Use simple fade-in effect
4. Keep animation quick (200-300ms)
5. Don't use scroll trigger (animate on mount)

**Example:**

```typescript
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="fixed top-0 z-50 w-full bg-white shadow-md"
    >
      {/* Logo and navigation */}
    </motion.header>
  )
}
```

**Important:**

- Keep animation very subtle (don't distract from hero)
- Ensure sticky/fixed positioning works
- Test scroll behavior

**Testing:**

- Reload page
- Verify header fades in quickly
- Test sticky scroll behavior
- Check console for errors

## Dependencies

- US-001: Setup Animation Infrastructure
- US-006: Mobile Menu Animations (Header has 'use client')

## Related Tasks

- TASK-002: Animate navigation links (next)

## References

- [Header Component](../../../../components/Header.tsx)

**Created**: 2025-10-20
**Status**: Not Started
