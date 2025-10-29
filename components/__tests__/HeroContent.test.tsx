import { render, screen } from '@testing-library/react'
import HeroContent from '@/components/HeroContent'

describe('HeroContent Component', () => {
  it('renders main heading', () => {
    render(<HeroContent />)
    expect(screen.getByText('Your Mountain Escape Awaits')).toBeInTheDocument()
  })

  it('renders property address', () => {
    render(<HeroContent />)
    expect(screen.getByText(/11 Emmons Road, Unit 324/i)).toBeInTheDocument()
    expect(screen.getByText(/Crested Butte, Colorado/i)).toBeInTheDocument()
  })

  it('renders description text', () => {
    render(<HeroContent />)
    expect(
      screen.getByText(/Book direct for the best rates/i)
    ).toBeInTheDocument()
  })

  it('renders Book Your Stay button', () => {
    render(<HeroContent />)
    const bookButton = screen.getByText('Book Your Stay')
    expect(bookButton).toBeInTheDocument()
    expect(bookButton.closest('a')).toHaveAttribute('href', '#booking')
  })

  it('renders Learn More button', () => {
    render(<HeroContent />)
    const learnButton = screen.getByText('Learn More')
    expect(learnButton).toBeInTheDocument()
    expect(learnButton.closest('a')).toHaveAttribute('href', '#about')
  })

  it('has proper semantic structure', () => {
    const { container } = render(<HeroContent />)
    const heading = container.querySelector('h1')
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('Your Mountain Escape Awaits')
  })

  it('renders both call-to-action buttons', () => {
    render(<HeroContent />)
    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(2)
  })
})
