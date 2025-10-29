import { render, screen } from '@testing-library/react'
import Location from '@/components/Location'
import { getMarkdownContent } from '@/lib/markdown'

jest.mock('@/lib/markdown', () => ({
  getMarkdownContent: jest.fn(),
}))

// Mock LocationClient component
jest.mock('@/components/location/LocationClient', () => {
  return function MockLocationClient({ data }: any) {
    return <div data-testid="location-client">Location Client with {data.title}</div>
  }
})

const mockGetMarkdownContent = getMarkdownContent as jest.MockedFunction<typeof getMarkdownContent>

describe('Location Component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders section with correct id', async () => {
    mockGetMarkdownContent.mockResolvedValue({
      slug: 'area',
      source: '',
      data: {
        title: 'Location & Area',
        subtitle: 'Discover Crested Butte',
      },
    })

    const component = await Location()
    const { container } = render(component)
    const section = container.querySelector('#location')
    expect(section).toBeInTheDocument()
  })

  it('loads location content from markdown', async () => {
    mockGetMarkdownContent.mockResolvedValue({
      slug: 'area',
      source: '',
      data: {
        title: 'Location',
        subtitle: 'Mountain Paradise',
      },
    })

    const component = await Location()
    render(component)

    expect(mockGetMarkdownContent).toHaveBeenCalledWith('area')
  })

  it('renders title and subtitle from frontmatter', async () => {
    mockGetMarkdownContent.mockResolvedValue({
      slug: 'area',
      source: '',
      data: {
        title: 'Prime Location',
        subtitle: 'Heart of the Rockies',
      },
    })

    const component = await Location()
    render(component)

    expect(screen.getByRole('heading', { name: 'Prime Location' })).toBeInTheDocument()
    expect(screen.getByText('Heart of the Rockies')).toBeInTheDocument()
  })

  it('renders LocationClient with frontmatter data', async () => {
    mockGetMarkdownContent.mockResolvedValue({
      slug: 'area',
      source: '',
      data: {
        title: 'Amazing Location',
        subtitle: 'Best spot in town',
      },
    })

    const component = await Location()
    render(component)

    expect(screen.getByTestId('location-client')).toBeInTheDocument()
    // Title appears both in heading and in mocked component
    const titles = screen.getAllByText(/Amazing Location/i)
    expect(titles.length).toBeGreaterThan(0)
  })

  it('has proper layout structure', async () => {
    mockGetMarkdownContent.mockResolvedValue({
      slug: 'area',
      source: '',
      data: {
        title: 'Location',
        subtitle: 'Details',
      },
    })

    const component = await Location()
    const { container } = render(component)

    const section = container.querySelector('section')
    expect(section).toHaveClass('py-16', 'md:py-20', 'bg-gray-50')
  })
})
