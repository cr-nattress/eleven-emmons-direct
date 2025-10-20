# TASK-003: Add Footer Section Animations

## Task Description
Add scroll-triggered entrance animations to footer sections.

## Priority
LOW

## Estimated Effort
2-3 hours

## Acceptance Criteria
- [ ] Footer.tsx has 'use client' directive (add if needed)
- [ ] Footer sections animate when scrolled into view
- [ ] Each section (links, contact, social) animates with stagger
- [ ] Links and functionality maintained
- [ ] Reduced motion preferences respected

## Agent Prompt

**Instructions:**

1. Add 'use client' to Footer.tsx if missing
2. Import animation utilities
3. Add scroll animation hook
4. Animate footer sections with stagger

**Example:**
```typescript
'use client'

import { motion } from 'framer-motion'
import { staggerContainerVariants, staggerItemVariants } from '@/lib/animations/variants'
import { useScrollAnimation } from '@/lib/animations/hooks'

export default function Footer() {
  const { ref: footerRef, controls: footerControls } = useScrollAnimation()

  return (
    <motion.footer
      ref={footerRef}
      initial="hidden"
      animate={footerControls}
      variants={staggerContainerVariants}
      className="bg-gray-900 py-12 text-white"
    >
      <div className="container mx-auto grid gap-8 md:grid-cols-3">
        <motion.div variants={staggerItemVariants}>
          {/* Footer section 1: Links */}
        </motion.div>
        <motion.div variants={staggerItemVariants}>
          {/* Footer section 2: Contact */}
        </motion.div>
        <motion.div variants={staggerItemVariants}>
          {/* Footer section 3: Social */}
        </motion.div>
      </div>
    </motion.footer>
  )
}
```

**Testing:**
- Scroll to footer
- Verify sections stagger in
- Test all links (nav, contact, social)
- Check console for errors

## Dependencies
- US-001: Setup Animation Infrastructure

## Related Tasks
- TASK-001: Add header entrance animation
- TASK-002: Animate navigation links

## References
- [Footer Component](../../../../components/Footer.tsx)
- [Stagger Variants](../../../../lib/animations/variants.ts)

**Created**: 2025-10-20
**Status**: Not Started
