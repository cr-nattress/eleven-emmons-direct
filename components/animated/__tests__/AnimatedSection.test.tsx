import { render, screen } from '@testing-library/react'
import AnimatedSection from '@/components/animated/AnimatedSection'
import { mockIntersectionObserver } from '@/lib/__tests__/test-utils'

describe('AnimatedSection Component', () => {
  beforeAll(() => {
    mockIntersectionObserver()
  })

  it('renders children content', () => {
    render(
      <AnimatedSection>
        <div>Section Content</div>
      </AnimatedSection>
    )
    expect(screen.getByText('Section Content')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(
      <AnimatedSection className="custom-section-class">
        <div>Content</div>
      </AnimatedSection>
    )
    const section = container.firstChild as HTMLElement
    expect(section).toHaveClass('custom-section-class')
  })

  it('renders as a section element', () => {
    const { container } = render(
      <AnimatedSection>
        <div>Content</div>
      </AnimatedSection>
    )
    expect(container.firstChild).toBeInstanceOf(HTMLElement)
    expect(container.firstChild?.nodeName).toBe('SECTION')
  })

  it('renders with custom threshold', () => {
    render(
      <AnimatedSection threshold={0.5}>
        <div>Threshold Section</div>
      </AnimatedSection>
    )
    expect(screen.getByText('Threshold Section')).toBeInTheDocument()
  })

  it('renders with delay', () => {
    render(
      <AnimatedSection delay={0.2}>
        <div>Delayed Section</div>
      </AnimatedSection>
    )
    expect(screen.getByText('Delayed Section')).toBeInTheDocument()
  })

  it('renders complex children', () => {
    render(
      <AnimatedSection>
        <h2>Section Heading</h2>
        <p>Section paragraph</p>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
      </AnimatedSection>
    )
    expect(screen.getByText('Section Heading')).toBeInTheDocument()
    expect(screen.getByText('Section paragraph')).toBeInTheDocument()
    expect(screen.getByText('Item 1')).toBeInTheDocument()
    expect(screen.getByText('Item 2')).toBeInTheDocument()
  })

  it('can render multiple sections', () => {
    render(
      <>
        <AnimatedSection>
          <div>Section 1</div>
        </AnimatedSection>
        <AnimatedSection>
          <div>Section 2</div>
        </AnimatedSection>
      </>
    )
    expect(screen.getByText('Section 1')).toBeInTheDocument()
    expect(screen.getByText('Section 2')).toBeInTheDocument()
  })
})
