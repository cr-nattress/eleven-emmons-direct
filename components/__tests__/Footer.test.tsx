import { render, screen } from '@testing-library/react'
import Footer from '@/components/Footer'
import { mockIntersectionObserver } from '@/lib/__tests__/test-utils'
import { siteConfig } from '@/config/site'

describe('Footer Component', () => {
  beforeAll(() => {
    mockIntersectionObserver()
  })

  it('renders the property address', () => {
    render(<Footer />)

    expect(screen.getByText(/Unit 324/i)).toBeInTheDocument()
    // "11 Emmons Road" appears multiple times (heading, address, copyright)
    const roadInstances = screen.getAllByText(/11 Emmons Road/i)
    expect(roadInstances.length).toBeGreaterThan(0)
    // "Crested Butte, CO" appears in description and address
    const cityInstances = screen.getAllByText(/Crested Butte/i)
    expect(cityInstances.length).toBeGreaterThan(0)
  })

  it('renders contact information', () => {
    render(<Footer />)

    expect(screen.getByText(siteConfig.contact.email)).toBeInTheDocument()
    expect(
      screen.getByText(siteConfig.contact.phone.display)
    ).toBeInTheDocument()
  })

  it('has mailto link for email', () => {
    render(<Footer />)

    const emailLink = screen.getByText(siteConfig.contact.email).closest('a')
    expect(emailLink).toHaveAttribute(
      'href',
      `mailto:${siteConfig.contact.email}`
    )
  })

  it('has tel link for phone', () => {
    render(<Footer />)

    const phoneLink = screen
      .getByText(siteConfig.contact.phone.display)
      .closest('a')
    expect(phoneLink).toHaveAttribute(
      'href',
      `tel:${siteConfig.contact.phone.tel}`
    )
  })

  it('renders all navigation sections', () => {
    render(<Footer />)

    expect(screen.getByText('Quick Links')).toBeInTheDocument()
    expect(screen.getByText('Get in Touch')).toBeInTheDocument()
  })

  it('renders current year in copyright', () => {
    render(<Footer />)

    const currentYear = new Date().getFullYear()
    expect(
      screen.getByText(new RegExp(currentYear.toString()))
    ).toBeInTheDocument()
  })

  it('includes QR code information', () => {
    render(<Footer />)

    expect(screen.getByText(/Staying with us?/i)).toBeInTheDocument()
    expect(screen.getByText(/QR code/i)).toBeInTheDocument()
  })

  it('has semantic footer element', () => {
    render(<Footer />)

    const footer = document.querySelector('footer')
    expect(footer).toBeInTheDocument()
  })
})
