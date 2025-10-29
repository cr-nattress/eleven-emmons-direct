# TASK-004: Create Animated Wrapper Components

## Task Description

Create reusable animated wrapper components that will be used throughout the application to add consistent animations to sections, cards, and buttons.

## Priority

CRITICAL

## Estimated Effort

2-3 hours

## Acceptance Criteria

- [ ] `/components/animated/` directory created
- [ ] `AnimatedSection.tsx` created with scroll-triggered animations
- [ ] `AnimatedCard.tsx` created with hover and entrance animations
- [ ] `AnimatedButton.tsx` created with interactive animations
- [ ] All components are client components ('use client')
- [ ] All components support reduced motion
- [ ] Components accept animation variant props for customization
- [ ] TypeScript interfaces defined for all props
- [ ] JSDoc documentation added
- [ ] Components tested and rendering correctly

## Technical Details

### Component Architecture

Each wrapper component should:

- Be a client component ('use client')
- Accept children to wrap
- Accept optional animation variant customization
- Use the hooks from TASK-003
- Use the variants from TASK-002
- Respect reduced motion preferences
- Forward className for styling
- Be composable with other components

### Required Components

1. **AnimatedSection**
   - Wraps entire sections for scroll-triggered entrance
   - Uses `useScrollAnimation` hook
   - Default: fadeIn or slideUp
   - Accepts custom variants

2. **AnimatedCard**
   - Wraps cards/boxes with entrance and hover effects
   - Entrance: slideUp on scroll
   - Hover: subtle scale or lift effect
   - Accepts custom variants

3. **AnimatedButton**
   - Wraps buttons with interactive animations
   - Hover: scale up
   - Tap: scale down
   - Optional pulse or glow effects

## Agent Prompt

You are tasked with creating animated wrapper components for the Eleven Emmons vacation rental website.

**Context:**

- Framer Motion is installed (TASK-001 complete)
- Animation utilities created (TASK-002 complete)
- Custom hooks created (TASK-003 complete)
- These wrapper components will be used across ALL pages
- Must support server/client component boundaries properly

**Instructions:**

1. **Create Directory:**

   ```bash
   mkdir -p components/animated
   ```

2. **Create `/components/animated/AnimatedSection.tsx`:**

   ```typescript
   'use client'

   import { motion } from 'framer-motion'
   import { useScrollAnimation } from '@/lib/animations/hooks'
   import { fadeInVariants, slideUpVariants } from '@/lib/animations/variants'
   import { ReactNode } from 'react'
   import type { Variants } from 'framer-motion'

   interface AnimatedSectionProps {
     children: ReactNode
     className?: string
     variant?: 'fadeIn' | 'slideUp' | 'slideDown'
     customVariants?: Variants
     threshold?: number
     delay?: number
   }

   /**
    * Animated wrapper for sections with scroll-triggered entrance animations
    *
    * @param children - Content to animate
    * @param className - Additional CSS classes
    * @param variant - Preset animation variant
    * @param customVariants - Custom Framer Motion variants
    * @param threshold - Scroll trigger threshold (0-1)
    * @param delay - Delay before animation starts (seconds)
    *
    * @example
    * <AnimatedSection variant="slideUp" className="py-20">
    *   <h2>Section Title</h2>
    *   <p>Section content...</p>
    * </AnimatedSection>
    */
   export default function AnimatedSection({
     children,
     className = '',
     variant = 'fadeIn',
     customVariants,
     threshold = 0.1,
     delay = 0,
   }: AnimatedSectionProps) {
     const { ref, controls } = useScrollAnimation({ threshold, triggerOnce: true })

     // Select variant based on prop
     let selectedVariants = fadeInVariants
     if (variant === 'slideUp') selectedVariants = slideUpVariants
     if (customVariants) selectedVariants = customVariants

     return (
       <motion.section
         ref={ref as any}
         initial="hidden"
         animate={controls}
         variants={selectedVariants}
         transition={{ delay }}
         className={className}
       >
         {children}
       </motion.section>
     )
   }
   ```

3. **Create `/components/animated/AnimatedCard.tsx`:**

   ```typescript
   'use client'

   import { motion } from 'framer-motion'
   import { useScrollAnimation } from '@/lib/animations/hooks'
   import { slideUpVariants } from '@/lib/animations/variants'
   import { ReactNode } from 'react'
   import type { Variants } from 'framer-motion'

   interface AnimatedCardProps {
     children: ReactNode
     className?: string
     customVariants?: Variants
     enableHover?: boolean
     threshold?: number
     delay?: number
   }

   /**
    * Animated wrapper for cards with entrance and hover effects
    *
    * @param children - Card content
    * @param className - Additional CSS classes
    * @param customVariants - Custom Framer Motion variants
    * @param enableHover - Enable hover animation
    * @param threshold - Scroll trigger threshold
    * @param delay - Animation delay
    *
    * @example
    * <AnimatedCard enableHover className="bg-white p-6 rounded-lg shadow">
    *   <h3>Card Title</h3>
    *   <p>Card content...</p>
    * </AnimatedCard>
    */
   export default function AnimatedCard({
     children,
     className = '',
     customVariants,
     enableHover = true,
     threshold = 0.1,
     delay = 0,
   }: AnimatedCardProps) {
     const { ref, controls } = useScrollAnimation({ threshold, triggerOnce: true })

     const variants = customVariants || slideUpVariants

     const hoverAnimation = enableHover
       ? {
           scale: 1.02,
           y: -4,
           transition: { duration: 0.2 },
         }
       : {}

     return (
       <motion.div
         ref={ref as any}
         initial="hidden"
         animate={controls}
         variants={variants}
         whileHover={hoverAnimation}
         transition={{ delay }}
         className={className}
       >
         {children}
       </motion.div>
     )
   }
   ```

4. **Create `/components/animated/AnimatedButton.tsx`:**

   ```typescript
   'use client'

   import { motion } from 'framer-motion'
   import { ReactNode } from 'react'

   interface AnimatedButtonProps {
     children: ReactNode
     className?: string
     onClick?: () => void
     disabled?: boolean
     type?: 'button' | 'submit' | 'reset'
     enableScale?: boolean
     enablePulse?: boolean
   }

   /**
    * Animated wrapper for buttons with interactive hover and tap animations
    *
    * @param children - Button content
    * @param className - Additional CSS classes
    * @param onClick - Click handler
    * @param disabled - Disabled state
    * @param type - Button type
    * @param enableScale - Enable scale animation on hover/tap
    * @param enablePulse - Enable pulse animation
    *
    * @example
    * <AnimatedButton
    *   onClick={handleClick}
    *   className="bg-blue-600 text-white px-6 py-3 rounded"
    *   enableScale
    * >
    *   Book Now
    * </AnimatedButton>
    */
   export default function AnimatedButton({
     children,
     className = '',
     onClick,
     disabled = false,
     type = 'button',
     enableScale = true,
     enablePulse = false,
   }: AnimatedButtonProps) {
     const scaleAnimation = enableScale
       ? {
           whileHover: { scale: 1.05 },
           whileTap: { scale: 0.95 },
         }
       : {}

     const pulseAnimation = enablePulse
       ? {
           animate: {
             scale: [1, 1.02, 1],
             transition: {
               duration: 2,
               repeat: Infinity,
               ease: 'easeInOut',
             },
           },
         }
       : {}

     return (
       <motion.button
         type={type}
         onClick={onClick}
         disabled={disabled}
         className={className}
         {...scaleAnimation}
         {...pulseAnimation}
         transition={{ duration: 0.2 }}
       >
         {children}
       </motion.button>
     )
   }
   ```

5. **Create Index File (Optional but Recommended):**
   Create `/components/animated/index.ts` to simplify imports:

   ```typescript
   export { default as AnimatedSection } from './AnimatedSection'
   export { default as AnimatedCard } from './AnimatedCard'
   export { default as AnimatedButton } from './AnimatedButton'
   ```

6. **Key Implementation Details:**
   - All files must start with `'use client'` directive
   - Use TypeScript interfaces for all props
   - Support className passthrough for Tailwind styling
   - Use `useScrollAnimation` hook for scroll-triggered animations
   - Components should be composable (can wrap each other)
   - Support reduced motion via hooks (automatic)
   - Use semantic HTML elements (section, div, button)

7. **TypeScript:**
   - Import ReactNode type for children
   - Import Variants type from framer-motion
   - Define clear interfaces for props
   - Use optional parameters with defaults

8. **Documentation:**
   - Add JSDoc comments to each component
   - Include usage examples
   - Document all props
   - Explain animation behavior

**Component Usage Patterns:**

These components will be used like this in other parts of the app:

```typescript
// In a page or component
import { AnimatedSection, AnimatedCard, AnimatedButton } from '@/components/animated'

<AnimatedSection variant="slideUp">
  <h2>Amenities</h2>
  <div className="grid grid-cols-3 gap-4">
    <AnimatedCard delay={0.1}>
      <h3>WiFi</h3>
    </AnimatedCard>
    <AnimatedCard delay={0.2}>
      <h3>Kitchen</h3>
    </AnimatedCard>
    <AnimatedCard delay={0.3}>
      <h3>Parking</h3>
    </AnimatedCard>
  </div>
  <AnimatedButton enableScale enablePulse>
    Book Now
  </AnimatedButton>
</AnimatedSection>
```

**Server/Client Boundary:**

- These are CLIENT components (they use hooks and browser APIs)
- Parent components can be SERVER components
- Pass server data as props to these components
- Don't fetch data inside these components

**Success Criteria:**

- All three components created with 'use client'
- No TypeScript errors
- Components can be imported and used
- Animations work when components are rendered
- Respect reduced motion preferences
- Proper TypeScript typing

**Testing:**

- Verify TypeScript compilation: `npm run build`
- Verify imports work
- Test in browser by temporarily adding to a page
- Verify animations trigger on scroll
- Verify hover/tap effects work
- Check console for errors

## Dependencies

- TASK-001: Install Framer Motion (required)
- TASK-002: Create animation utilities (imports variants)
- TASK-003: Create custom hooks (imports hooks)

## Related Tasks

- US-002 through US-009: All future user stories will use these components

## References

- [Framer Motion Components](https://www.framer.com/motion/component/)
- [Next.js Client Components](https://nextjs.org/docs/app/building-your-application/rendering/client-components)
- [React Children Props](https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children)

**Created**: 2025-10-20
**Status**: Not Started
