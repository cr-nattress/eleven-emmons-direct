import { render, screen } from '@testing-library/react'
import BookingWidget from '@/components/BookingWidget'
import { mockIntersectionObserver } from '@/lib/__tests__/test-utils'
import { siteConfig } from '@/config/site'

describe('BookingWidget Component', () => {
  beforeAll(() => {
    mockIntersectionObserver()
  })

  it('renders the booking section', () => {
    render(<BookingWidget />)

    expect(screen.getByText('Book Your Stay')).toBeInTheDocument()
    expect(
      screen.getByText('Check availability and reserve your dates')
    ).toBeInTheDocument()
  })

  it('shows placeholder widget message', () => {
    render(<BookingWidget />)

    expect(screen.getByText('Hospitable Booking Widget')).toBeInTheDocument()
    expect(
      screen.getByText(/booking widget will appear here/i)
    ).toBeInTheDocument()
  })

  it('displays contact information', () => {
    render(<BookingWidget />)

    expect(screen.getByText('Email Us')).toBeInTheDocument()
    expect(screen.getByText('Call Us')).toBeInTheDocument()
    expect(screen.getByText(siteConfig.contact.email)).toBeInTheDocument()
    expect(
      screen.getByText(siteConfig.contact.phone.display)
    ).toBeInTheDocument()
  })

  it('has clickable email link', () => {
    render(<BookingWidget />)

    const emailLink = screen.getByText(siteConfig.contact.email).closest('a')
    expect(emailLink).toHaveAttribute(
      'href',
      `mailto:${siteConfig.contact.email}`
    )
  })

  it('has clickable phone link', () => {
    render(<BookingWidget />)

    const phoneLink = screen
      .getByText(siteConfig.contact.phone.display)
      .closest('a')
    expect(phoneLink).toHaveAttribute(
      'href',
      `tel:${siteConfig.contact.phone.tel}`
    )
  })

  it('has semantic section element with id', () => {
    render(<BookingWidget />)

    const section = document.querySelector('section#booking')
    expect(section).toBeInTheDocument()
  })

  it('displays environment setup hint', () => {
    render(<BookingWidget />)

    expect(
      screen.getByText(/NEXT_PUBLIC_HOSPITABLE_WIDGET_ID/i)
    ).toBeInTheDocument()
  })
})
