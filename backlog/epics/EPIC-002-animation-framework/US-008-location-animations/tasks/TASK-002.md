# TASK-002: Add Map Container Animation

## Task Description

Add scroll-triggered animation to the map container with subtle fade and scale effect.

## Priority

MEDIUM

## Estimated Effort

1-2 hours

## Acceptance Criteria

- [ ] Map container animates on scroll
- [ ] Uses fade + subtle scale
- [ ] Map functionality maintained
- [ ] No impact on map interactions

## Agent Prompt

**Instructions:**

1. Locate map container in Location.tsx (iframe, div, or component)
2. Add scroll animation hook for map
3. Wrap map container in motion.div
4. Use scaleInVariants or similar
5. Ensure map remains interactive after animation

**Example:**

```typescript
const { ref: mapRef, controls: mapControls } = useScrollAnimation()

<motion.div
  ref={mapRef}
  initial="hidden"
  animate={mapControls}
  variants={scaleInVariants}
  className="aspect-video w-full overflow-hidden rounded-lg shadow-lg"
>
  {/* Map iframe or component */}
  <iframe
    src="https://maps.google.com/..."
    className="h-full w-full"
    loading="lazy"
  />
</motion.div>
```

**Important:**

- Don't animate the iframe/map directly, animate the wrapper
- Ensure map remains clickable/draggable after animation
- Test map interactions after animation completes

**Testing:**

- Scroll to map
- Verify container animates
- Test map interactions (zoom, pan)
- Check console for errors

## Dependencies

- TASK-001: Animate section header

## Related Tasks

- TASK-003: Animate nearby attractions cards (next)

## References

- [Location Component](../../../../components/Location.tsx)
- [scaleInVariants](../../../../lib/animations/variants.ts)

**Created**: 2025-10-20
**Status**: Not Started
