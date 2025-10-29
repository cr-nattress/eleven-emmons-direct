import { render, screen } from '@testing-library/react'
import AnimatedCard from '@/components/animated/AnimatedCard'
import { mockIntersectionObserver } from '@/lib/__tests__/test-utils'

describe('AnimatedCard Component', () => {
  beforeAll(() => {
    mockIntersectionObserver()
  })

  it('renders children content', () => {
    render(
      <AnimatedCard>
        <div>Card Content</div>
      </AnimatedCard>
    )
    expect(screen.getByText('Card Content')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(
      <AnimatedCard className="custom-card-class">
        <div>Content</div>
      </AnimatedCard>
    )
    const card = container.firstChild as HTMLElement
    expect(card).toHaveClass('custom-card-class')
  })

  it('renders with enableHover enabled by default', () => {
    render(
      <AnimatedCard>
        <div>Hoverable Card</div>
      </AnimatedCard>
    )
    expect(screen.getByText('Hoverable Card')).toBeInTheDocument()
  })

  it('renders with enableHover disabled', () => {
    render(
      <AnimatedCard enableHover={false}>
        <div>Static Card</div>
      </AnimatedCard>
    )
    expect(screen.getByText('Static Card')).toBeInTheDocument()
  })

  it('renders with custom threshold', () => {
    render(
      <AnimatedCard threshold={0.5}>
        <div>Threshold Card</div>
      </AnimatedCard>
    )
    expect(screen.getByText('Threshold Card')).toBeInTheDocument()
  })

  it('renders with delay', () => {
    render(
      <AnimatedCard delay={0.3}>
        <div>Delayed Card</div>
      </AnimatedCard>
    )
    expect(screen.getByText('Delayed Card')).toBeInTheDocument()
  })

  it('renders as a div element', () => {
    const { container } = render(
      <AnimatedCard>
        <div>Content</div>
      </AnimatedCard>
    )
    expect(container.firstChild).toBeInstanceOf(HTMLDivElement)
  })

  it('renders complex children', () => {
    render(
      <AnimatedCard>
        <h3>Card Title</h3>
        <p>Card description</p>
        <button>Action</button>
      </AnimatedCard>
    )
    expect(screen.getByText('Card Title')).toBeInTheDocument()
    expect(screen.getByText('Card description')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Action' })).toBeInTheDocument()
  })
})
