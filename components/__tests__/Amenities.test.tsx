import { render, screen } from '@testing-library/react'
import Amenities from '@/components/Amenities'
import { getMarkdownContent } from '@/lib/markdown'

jest.mock('@/lib/markdown', () => ({
  getMarkdownContent: jest.fn(),
}))

// Mock AmenitiesContent component
jest.mock('@/components/AmenitiesContent', () => {
  return function MockAmenitiesContent({ data }: any) {
    return <div data-testid="amenities-content">Amenities Content with {data.title}</div>
  }
})

const mockGetMarkdownContent = getMarkdownContent as jest.MockedFunction<typeof getMarkdownContent>

describe('Amenities Component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders section with correct id', async () => {
    mockGetMarkdownContent.mockResolvedValue({
      slug: 'amenities',
      source: '',
      data: { title: 'Amazing Amenities' },
    })

    const component = await Amenities()
    const { container } = render(component)
    const section = container.querySelector('#amenities')
    expect(section).toBeInTheDocument()
  })

  it('loads amenities content from markdown', async () => {
    mockGetMarkdownContent.mockResolvedValue({
      slug: 'amenities',
      source: '',
      data: { title: 'Luxury Amenities' },
    })

    const component = await Amenities()
    render(component)

    expect(mockGetMarkdownContent).toHaveBeenCalledWith('amenities')
  })

  it('renders AmenitiesContent with frontmatter data', async () => {
    mockGetMarkdownContent.mockResolvedValue({
      slug: 'amenities',
      source: '',
      data: { title: 'Premium Features' },
    })

    const component = await Amenities()
    render(component)

    expect(screen.getByTestId('amenities-content')).toBeInTheDocument()
    expect(screen.getByText(/Premium Features/i)).toBeInTheDocument()
  })

  it('has proper layout structure', async () => {
    mockGetMarkdownContent.mockResolvedValue({
      slug: 'amenities',
      source: '',
      data: {},
    })

    const component = await Amenities()
    const { container } = render(component)

    const section = container.querySelector('section')
    expect(section).toHaveClass('py-20', 'bg-gray-50')
  })
})
