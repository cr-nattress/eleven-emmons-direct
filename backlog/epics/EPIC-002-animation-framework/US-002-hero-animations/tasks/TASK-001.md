# TASK-001: Refactor Hero Component for Animations

## Task Description
Refactor the Hero component to support Framer Motion animations while maintaining server-side rendering where possible.

## Priority
CRITICAL

## Estimated Effort
1-2 hours

## Acceptance Criteria
- [ ] Hero component updated to support animations
- [ ] 'use client' directive added if needed
- [ ] Component structure allows for individual element animations
- [ ] No breaking changes to existing functionality
- [ ] TypeScript types maintained
- [ ] Component still renders correctly

## Technical Details

### Current State
- `/components/Hero.tsx` is a server component
- Contains: title, subtitle, description, 2 CTAs, scroll arrow
- Uses Tailwind for styling
- Scroll arrow has `animate-bounce` class

### Refactoring Strategy
**Option 1**: Convert entire Hero to client component
- Simplest approach
- Add 'use client' at top
- Can use motion components directly

**Option 2**: Hybrid approach (RECOMMENDED)
- Keep Hero as server component
- Create HeroContent client component for animated parts
- Best for performance

### Implementation Pattern
```typescript
// Option 2 structure:
// /components/Hero.tsx (server)
export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full">
      {/* Background image - static, no animation */}
      <HeroContent /> {/* Client component with animations */}
    </section>
  )
}

// /components/HeroContent.tsx (client)
'use client'
export default function HeroContent() {
  // Animated content here
}
```

## Agent Prompt

You are tasked with refactoring the Hero component to support Framer Motion animations.

**Context:**
- Current Hero component at `/components/Hero.tsx` is a server component
- We need to add animations without breaking server-side rendering benefits
- Animation infrastructure is ready (US-001 completed)
- Hero is the first impression - critical for engagement

**Current Hero Structure (lines from Hero.tsx):**
- Line 6: `<section>` wrapper
- Lines 8-17: Background image div (static, no animation needed)
- Lines 20-48: Content div with title, subtitle, description, buttons
- Lines 52-70: Scroll indicator

**Instructions:**

**RECOMMENDED APPROACH - Hybrid (Option 2):**

1. **Read the current Hero.tsx:**
   - Understand the full structure
   - Note the background, content, and scroll indicator sections

2. **Create `/components/HeroContent.tsx` (client component):**
   ```typescript
   'use client'

   import Link from 'next/link'
   import { motion } from 'framer-motion'

   export default function HeroContent() {
     return (
       <div className="relative flex h-full items-center justify-center">
         <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
           {/* Title - will be animated in TASK-002 */}
           <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
             Your Mountain Escape Awaits
           </h1>

           {/* Subtitle - will be animated in TASK-002 */}
           <p className="mb-8 text-xl text-gray-200 sm:text-2xl">
             11 Emmons Road, Unit 324
             <br />
             Crested Butte, Colorado
           </p>

           {/* Description - will be animated in TASK-002 */}
           <p className="mb-10 text-lg text-gray-300 sm:text-xl">
             Book direct for the best rates and experience luxury in the heart of
             the Rockies
           </p>

           {/* Buttons - will be animated in TASK-003 */}
           <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
             <Link
               href="#booking"
               className="rounded-lg bg-primary px-8 py-3 text-lg font-semibold text-white transition-all hover:bg-primary-dark hover:shadow-lg"
             >
               Book Your Stay
             </Link>
             <Link
               href="#about"
               className="rounded-lg border-2 border-white px-8 py-3 text-lg font-semibold text-white transition-all hover:bg-white hover:text-gray-900"
             >
               Learn More
             </Link>
           </div>
         </div>
       </div>
     )
   }
   ```

3. **Update `/components/Hero.tsx`:**
   - Import the new HeroContent component
   - Replace the content div (lines 20-48) with `<HeroContent />`
   - Keep the section wrapper, background, and scroll indicator in the server component
   - Do NOT add 'use client' to Hero.tsx - keep it as server component

   Updated structure:
   ```typescript
   import Image from 'next/image'
   import Link from 'next/link'
   import HeroContent from './HeroContent'

   export default function Hero() {
     return (
       <section id="home" className="relative h-screen w-full">
         {/* Hero Image - keep as-is */}
         <div className="absolute inset-0">
           {/* ... existing background code ... */}
         </div>

         {/* Replace content div with HeroContent component */}
         <HeroContent />

         {/* Scroll indicator - keep as-is for now */}
         <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
           {/* ... existing scroll indicator code ... */}
         </div>
       </section>
     )
   }
   ```

**ALTERNATIVE APPROACH - Full Client (Option 1):**

If you choose this simpler approach:
1. Add `'use client'` to the top of `/components/Hero.tsx`
2. Import `motion` from framer-motion
3. That's it - component is ready for animations

**Important Notes:**
- Do NOT implement animations yet - that's for TASK-002, TASK-003, TASK-004
- Just set up the structure to support animations
- Verify the component still renders correctly
- No visual changes at this stage
- Test that the page loads without errors

**Testing:**
1. Run dev server: `npm run dev`
2. Visit http://localhost:3000
3. Verify hero section renders correctly
4. Verify buttons still work
5. Verify scroll indicator still works
6. Check console for errors
7. Verify TypeScript compilation: no errors

**Success Criteria:**
- Hero component refactored and rendering correctly
- No visual changes to the hero section yet
- Component ready to receive animations in next tasks
- No TypeScript errors
- No runtime errors

**Deliverables:**
- Updated `/components/Hero.tsx`
- New `/components/HeroContent.tsx` (if using Option 2)
- Confirmation that page loads without errors

## Dependencies
- US-001 completed (Framer Motion installed)

## Related Tasks
- TASK-002: Implement title and subtitle animations (next)
- TASK-003: Implement CTA button animations
- TASK-004: Enhance scroll arrow animation

## References
- [Current Hero Component](../../../../components/Hero.tsx)
- [Next.js Client Components](https://nextjs.org/docs/app/building-your-application/rendering/client-components)
- [Framer Motion with Next.js](https://www.framer.com/motion/guide-nextjs/)

**Created**: 2025-10-20
**Status**: Not Started
