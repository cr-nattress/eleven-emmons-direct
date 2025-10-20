# TASK-002: Animate Navigation Links

## Task Description
Add subtle staggered entrance animation to desktop navigation links on page load.

## Priority
LOW

## Estimated Effort
1-2 hours

## Acceptance Criteria
- [ ] Desktop nav links stagger in on page load
- [ ] Animation is very subtle
- [ ] Links remain clickable immediately
- [ ] Mobile menu not affected (already animated in US-006)
- [ ] Reduced motion preferences respected

## Agent Prompt

**Instructions:**

1. Locate desktop navigation links in Header.tsx
2. Wrap nav links in motion container
3. Use stagger effect with very short delays (50ms)
4. Keep animation subtle and quick

**Example:**
```typescript
const navItemsVariant = {
  hidden: { opacity: 0, y: -5 },
  visible: {
    opacity: 1,
    y: 0,
  },
}

const navContainerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
}

// In JSX:
<motion.nav
  variants={navContainerVariant}
  initial="hidden"
  animate="visible"
  className="hidden md:flex md:space-x-6"
>
  <motion.a variants={navItemsVariant} href="#home">Home</motion.a>
  <motion.a variants={navItemsVariant} href="#gallery">Gallery</motion.a>
  <motion.a variants={navItemsVariant} href="#amenities">Amenities</motion.a>
  <motion.a variants={navItemsVariant} href="#booking">Book</motion.a>
</motion.nav>
```

**Important:**
- Only animate desktop nav (mobile handled in US-006)
- Keep stagger very subtle (50ms max between items)
- Links should be clickable immediately (pointer-events: auto)

**Testing:**
- Reload page
- Observe subtle nav link stagger
- Verify links clickable immediately
- Test on desktop viewport only

## Dependencies
- TASK-001: Add header entrance animation

## Related Tasks
- TASK-003: Add footer section animations (next)

## References
- [Header Component](../../../../components/Header.tsx)

**Created**: 2025-10-20
**Status**: Not Started
