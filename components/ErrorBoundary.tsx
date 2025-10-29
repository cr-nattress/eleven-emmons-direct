'use client'

import { Component, ReactNode } from 'react'
import { trackEvent } from '@/lib/analytics'

interface Props {
  children: ReactNode
  fallback?: ReactNode
  section?: string
}

interface State {
  hasError: boolean
  error?: Error
}

/**
 * Error Boundary component to catch and handle React errors gracefully
 *
 * Prevents entire app from crashing when one component fails.
 * Provides user-friendly fallback UI and tracks errors in analytics.
 *
 * @example
 * <ErrorBoundary section="Gallery">
 *   <Gallery />
 * </ErrorBoundary>
 *
 * @example Custom fallback
 * <ErrorBoundary
 *   section="BookingWidget"
 *   fallback={<CustomErrorUI />}
 * >
 *   <BookingWidget />
 * </ErrorBoundary>
 */
export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Track error in Google Analytics
    trackEvent(
      'error',
      'ErrorBoundary',
      `${this.props.section || 'Unknown'}: ${error.message}`
    )

    // Log detailed error in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', {
        section: this.props.section,
        error,
        errorInfo,
        componentStack: errorInfo.componentStack,
      })
    }
  }

  handleTryAgain = () => {
    // Reset error state to retry rendering
    this.setState({ hasError: false, error: undefined })
  }

  render() {
    if (this.state.hasError) {
      // If custom fallback provided, use it
      if (this.props.fallback) {
        return this.props.fallback
      }

      // Default error UI
      return (
        <div className="my-8 rounded-lg border-2 border-red-200 bg-red-50 p-8 text-center">
          {/* Error Icon */}
          <svg
            className="mx-auto h-12 w-12 text-red-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>

          {/* Error Message */}
          <h3 className="mt-4 text-lg font-semibold text-gray-900">
            Something went wrong
          </h3>
          <p className="mt-2 text-sm text-gray-600">
            We're having trouble loading{' '}
            {this.props.section
              ? `the ${this.props.section} section`
              : 'this section'}
            .
          </p>

          {/* Development-only error details */}
          {process.env.NODE_ENV === 'development' && this.state.error && (
            <details className="mt-4 text-left">
              <summary className="cursor-pointer text-sm font-medium text-gray-700">
                Error Details (Development Only)
              </summary>
              <pre className="mt-2 overflow-auto rounded bg-gray-100 p-4 text-xs text-gray-800">
                {this.state.error.message}
                {'\n\n'}
                {this.state.error.stack}
              </pre>
            </details>
          )}

          {/* Try Again Button */}
          <button
            onClick={this.handleTryAgain}
            className="mt-6 rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Try Again
          </button>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
