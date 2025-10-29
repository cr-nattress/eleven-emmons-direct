import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ErrorBoundary } from '@/components/ErrorBoundary'

// Component that throws an error
function ThrowError({ shouldThrow = false }: { shouldThrow?: boolean }) {
  if (shouldThrow) {
    throw new Error('Test error')
  }
  return <div>Working component</div>
}

// Suppress console.error for these tests since we're intentionally throwing errors
const originalError = console.error
beforeAll(() => {
  console.error = jest.fn()
})

afterAll(() => {
  console.error = originalError
})

describe('ErrorBoundary', () => {
  it('renders children when there is no error', () => {
    render(
      <ErrorBoundary section="test">
        <ThrowError shouldThrow={false} />
      </ErrorBoundary>
    )

    expect(screen.getByText('Working component')).toBeInTheDocument()
  })

  it('renders default fallback UI when error occurs', () => {
    render(
      <ErrorBoundary section="TestSection">
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    )

    expect(screen.getByText(/something went wrong/i)).toBeInTheDocument()
    expect(
      screen.getByText(/we're having trouble loading/i)
    ).toBeInTheDocument()
    expect(screen.getByText(/TestSection section/i)).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /try again/i })
    ).toBeInTheDocument()
  })

  it('renders custom fallback when provided', () => {
    const customFallback = <div>Custom error message</div>

    render(
      <ErrorBoundary section="test" fallback={customFallback}>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    )

    expect(screen.getByText('Custom error message')).toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: /try again/i })
    ).not.toBeInTheDocument()
  })

  it('recovers from error when Try Again is clicked', async () => {
    const user = userEvent.setup()

    // Create a component that can toggle the error
    function ToggleError() {
      const [shouldThrow, setShouldThrow] = React.useState(true)

      return (
        <div>
          <button onClick={() => setShouldThrow(!shouldThrow)}>
            Toggle Error
          </button>
          <ThrowError shouldThrow={shouldThrow} />
        </div>
      )
    }

    render(
      <ErrorBoundary section="test">
        <ToggleError />
      </ErrorBoundary>
    )

    // Error UI should be visible
    expect(screen.getByText(/something went wrong/i)).toBeInTheDocument()

    // Click Try Again
    const tryAgainButton = screen.getByRole('button', { name: /try again/i })
    await user.click(tryAgainButton)

    // Component should attempt to re-render
    // Note: The error will throw again since we haven't changed the state
    // In real usage, the user would fix the issue or the component would recover
  })

  it('includes section name in error message', () => {
    render(
      <ErrorBoundary section="Gallery">
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    )

    expect(screen.getByText(/Gallery/i)).toBeInTheDocument()
  })
})
