import { render, screen } from '@testing-library/react'
import About from '@/components/About'
import { getMarkdownContent } from '@/lib/markdown'

jest.mock('@/lib/markdown', () => ({
  getMarkdownContent: jest.fn(),
}))

const mockGetMarkdownContent = getMarkdownContent as jest.MockedFunction<typeof getMarkdownContent>

describe('About Component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders section with correct id', async () => {
    mockGetMarkdownContent.mockResolvedValue({
      slug: 'property',
      source: '',
      data: {
        guests: 4,
        bedrooms: 1,
        bathrooms: 1,
        squareFeet: 650,
        rating: 4.98,
        features: ['Feature 1', 'Feature 2'],
      },
    })

    const component = await About()
    const { container } = render(component)
    const section = container.querySelector('#about')
    expect(section).toBeInTheDocument()
  })

  it('displays property stats from frontmatter', async () => {
    mockGetMarkdownContent.mockResolvedValue({
      slug: 'property',
      source: '',
      data: {
        guests: 6,
        bedrooms: 2,
        bathrooms: 2,
        squareFeet: 1200,
        rating: 4.95,
      },
    })

    const component = await About()
    render(component)

    expect(screen.getByText('6')).toBeInTheDocument()
    // "2" appears for both Bedroom and Bathroom
    const twos = screen.getAllByText('2')
    expect(twos.length).toBeGreaterThan(0)
    expect(screen.getByText('1200')).toBeInTheDocument()
    expect(screen.getByText('4.95 ⭐')).toBeInTheDocument()
  })

  it('uses default values when frontmatter is missing', async () => {
    mockGetMarkdownContent.mockResolvedValue({
      slug: 'property',
      source: '',
      data: {},
    })

    const component = await About()
    render(component)

    expect(screen.getByText('4')).toBeInTheDocument()
    expect(screen.getByText('Guests')).toBeInTheDocument()
    // "1" appears for both Bedroom and Bathroom
    const ones = screen.getAllByText('1')
    expect(ones.length).toBeGreaterThan(0)
    expect(screen.getByText('650')).toBeInTheDocument()
  })

  it('renders features from frontmatter', async () => {
    mockGetMarkdownContent.mockResolvedValue({
      slug: 'property',
      source: '',
      data: {
        features: [
          'Ski-in/ski-out access',
          'Smart home controls',
          'High-speed WiFi',
        ],
      },
    })

    const component = await About()
    render(component)

    expect(screen.getByText('Ski-in/ski-out access')).toBeInTheDocument()
    expect(screen.getByText('Smart home controls')).toBeInTheDocument()
    expect(screen.getByText('High-speed WiFi')).toBeInTheDocument()
  })

  it('renders opening narrative when provided', async () => {
    mockGetMarkdownContent.mockResolvedValue({
      slug: 'property',
      source: '',
      data: {
        opening: 'Welcome to our beautiful mountain retreat.',
      },
    })

    const component = await About()
    render(component)

    expect(screen.getByText('Welcome to our beautiful mountain retreat.')).toBeInTheDocument()
  })

  it('renders closing narrative when provided', async () => {
    mockGetMarkdownContent.mockResolvedValue({
      slug: 'property',
      source: '',
      data: {
        closing: 'Book your stay today and create lasting memories.',
      },
    })

    const component = await About()
    render(component)

    expect(screen.getByText('Book your stay today and create lasting memories.')).toBeInTheDocument()
  })

  it('has proper accessibility attributes', async () => {
    mockGetMarkdownContent.mockResolvedValue({
      slug: 'property',
      source: '',
      data: {
        guests: 4,
        bedrooms: 1,
        bathrooms: 1,
        squareFeet: 650,
      },
    })

    const component = await About()
    const { container } = render(component)

    const statsList = container.querySelector('[role="list"]')
    expect(statsList).toHaveAttribute('aria-label', 'Property statistics')

    const listItems = container.querySelectorAll('[role="listitem"]')
    expect(listItems.length).toBeGreaterThan(0)
  })

  it('renders section heading', async () => {
    mockGetMarkdownContent.mockResolvedValue({
      slug: 'property',
      source: '',
      data: {},
    })

    const component = await About()
    render(component)

    expect(screen.getByRole('heading', { name: /About This Property/i })).toBeInTheDocument()
  })
})
