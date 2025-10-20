# TASK-002: Add Custom Shortcode Components

**Task ID:** TASK-002
**User Story:** US-002 - Create MDX Component Mapping
**Status:** To Do
**Estimated Time:** 20 minutes

## Task Description

Add custom shortcode components that content authors can use in markdown files (e.g., Callout, Alert, BookingCTA).

## Agent Prompt

```
Update the /components/mdx-components.tsx file to add custom shortcode components.

Add the following custom components to the return object of useMDXComponents:

1. **Callout Component** - For info boxes, warnings, and success messages
2. **BookingCTA Component** - For booking call-to-action boxes
3. **FeatureHighlight Component** - For highlighting key features

Add these components to the existing mdx-components.tsx file:

```typescript
// Add to the return object inside useMDXComponents:

    Callout: ({ children, type = 'info' }: {
      children: React.ReactNode
      type?: 'info' | 'warning' | 'success' | 'error'
    }) => {
      const styles = {
        info: 'border-blue-500 bg-blue-50 text-blue-900',
        warning: 'border-yellow-500 bg-yellow-50 text-yellow-900',
        success: 'border-green-500 bg-green-50 text-green-900',
        error: 'border-red-500 bg-red-50 text-red-900',
      }

      return (
        <div className={`border-l-4 p-4 my-6 rounded ${styles[type]}`}>
          {children}
        </div>
      )
    },

    BookingCTA: ({ children }: { children: React.ReactNode }) => (
      <div className="bg-primary/10 border-2 border-primary rounded-lg p-6 my-8 text-center">
        <div className="prose prose-lg max-w-none">
          {children}
        </div>
        <a
          href="#booking"
          className="inline-block mt-4 bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-dark transition-colors font-semibold"
        >
          Check Availability
        </a>
      </div>
    ),

    FeatureHighlight: ({ title, children }: {
      title: string
      children: React.ReactNode
    }) => (
      <div className="bg-gray-50 rounded-lg p-6 my-6 border border-gray-200">
        <h4 className="text-xl font-semibold text-gray-900 mb-3">{title}</h4>
        <div className="text-gray-700">
          {children}
        </div>
      </div>
    ),
```

These components can now be used in content files like:

```mdx
<Callout type="success">
Book now and save 15% on stays over 7 nights!
</Callout>

<BookingCTA>
Ready to experience the best of Crested Butte?
</BookingCTA>

<FeatureHighlight title="Ski-In/Ski-Out Access">
Walk right out the door and onto the slopes!
</FeatureHighlight>
```

After updating:
1. Verify TypeScript has no errors
2. Check that all components render properly
3. Test styling matches site theme
```

## File to Update

**Path:** `/components/mdx-components.tsx`

## Verification Steps

1. Custom components added to component map
2. No TypeScript errors
3. Components have proper prop types
4. Styling matches site theme

## Expected Output

- Three new custom components available
- Can be used in .mdx content files
- Properly typed and styled

## Notes

- These are examples - can be customized based on needs
- Additional components can be added later
- Components should follow site's design system
