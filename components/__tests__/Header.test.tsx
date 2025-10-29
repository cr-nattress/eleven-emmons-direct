import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Header from '@/components/Header'
import { mockIntersectionObserver } from '@/lib/__tests__/test-utils'

describe('Header Component', () => {
  beforeAll(() => {
    mockIntersectionObserver()
  })

  it('renders the site logo', () => {
    render(<Header />)
    expect(screen.getByText('11 Emmons Road')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Header />)

    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Amenities')).toBeInTheDocument()
    expect(screen.getByText('Gallery')).toBeInTheDocument()
    expect(screen.getByText('Location')).toBeInTheDocument()

    // Book Now appears twice (desktop + mobile)
    const bookNowLinks = screen.getAllByText('Book Now')
    expect(bookNowLinks.length).toBeGreaterThanOrEqual(1)
  })

  it('toggles mobile menu when button is clicked', async () => {
    const user = userEvent.setup()
    const { container } = render(<Header />)

    const menuButton = screen.getByRole('button', {
      name: /open main menu/i,
    })

    expect(menuButton).toBeInTheDocument()

    // Click to open
    await act(async () => {
      await user.click(menuButton)
    })

    // Wait for any state updates
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 100))
    })

    // Mobile nav items should now be visible
    // Check if duplicate navigation items exist (desktop + mobile)
    const homeLinks = screen.getAllByText('Home')
    expect(homeLinks.length).toBeGreaterThan(1)
  })

  it('has proper semantic HTML structure', () => {
    render(<Header />)

    // Should have a header element
    const header = document.querySelector('header')
    expect(header).toBeInTheDocument()

    // Should have a nav element
    const nav = document.querySelector('nav')
    expect(nav).toBeInTheDocument()
  })

  it('has accessible button with aria attributes', () => {
    render(<Header />)

    const menuButton = screen.getByRole('button')
    expect(menuButton).toHaveAttribute('aria-expanded')
  })

  it('renders Book Now as an external link', () => {
    render(<Header />)

    const bookNowLinks = screen.getAllByText('Book Now')
    const firstBookNow = bookNowLinks[0].closest('a')

    expect(firstBookNow).toHaveAttribute('target', '_blank')
    expect(firstBookNow).toHaveAttribute('rel', 'noopener noreferrer')
    expect(firstBookNow).toHaveAttribute('href', expect.stringContaining('airbnb.com'))
  })
})
