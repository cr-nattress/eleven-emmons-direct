import { render, screen } from '@testing-library/react'
import Hero from '@/components/Hero'
import { mockIntersectionObserver } from '@/lib/__tests__/test-utils'

// Mock HeroContent component
jest.mock('@/components/HeroContent', () => {
  return function MockHeroContent() {
    return <div data-testid="hero-content">Hero Content</div>
  }
})

describe('Hero Component', () => {
  beforeAll(() => {
    mockIntersectionObserver()
  })

  it('renders hero section with correct id', () => {
    const { container } = render(<Hero />)
    const section = container.querySelector('#home')
    expect(section).toBeInTheDocument()
  })

  it('renders hero image with correct attributes', () => {
    render(<Hero />)
    const image = screen.getByAltText(
      '11 Emmons Road Vacation Rental in Crested Butte'
    )
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src')
  })

  it('renders HeroContent component', () => {
    render(<Hero />)
    expect(screen.getByTestId('hero-content')).toBeInTheDocument()
  })

  it('renders scroll indicator with link to about section', () => {
    render(<Hero />)
    expect(screen.getByText('Scroll to explore')).toBeInTheDocument()

    const link = screen.getByText('Scroll to explore').closest('a')
    expect(link).toHaveAttribute('href', '#about')
  })

  it('has proper semantic structure', () => {
    const { container } = render(<Hero />)
    const section = container.querySelector('section')
    expect(section).toBeInTheDocument()
    expect(section).toHaveAttribute('id', 'home')
  })

  it('renders scroll icon with correct attributes', () => {
    const { container } = render(<Hero />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveClass('animate-bounce')
  })
})
