import '@testing-library/jest-dom'

// Mock framer-motion to avoid animation issues in tests
jest.mock('framer-motion', () => {
  const React = require('react')
  return {
    motion: {
      div: React.forwardRef(
        (
          {
            children,
            whileHover,
            whileTap,
            initial,
            animate,
            exit,
            variants,
            transition,
            ...props
          },
          ref
        ) => (
          <div ref={ref} {...props}>
            {children}
          </div>
        )
      ),
      button: React.forwardRef(
        (
          {
            children,
            whileHover,
            whileTap,
            initial,
            animate,
            exit,
            variants,
            transition,
            ...props
          },
          ref
        ) => (
          <button ref={ref} {...props}>
            {children}
          </button>
        )
      ),
      a: React.forwardRef(
        (
          {
            children,
            whileHover,
            whileTap,
            initial,
            animate,
            exit,
            variants,
            transition,
            ...props
          },
          ref
        ) => (
          <a ref={ref} {...props}>
            {children}
          </a>
        )
      ),
      section: React.forwardRef(
        (
          {
            children,
            whileHover,
            whileTap,
            initial,
            animate,
            exit,
            variants,
            transition,
            ...props
          },
          ref
        ) => (
          <section ref={ref} {...props}>
            {children}
          </section>
        )
      ),
      h1: React.forwardRef(
        (
          {
            children,
            whileHover,
            whileTap,
            initial,
            animate,
            exit,
            variants,
            transition,
            ...props
          },
          ref
        ) => (
          <h1 ref={ref} {...props}>
            {children}
          </h1>
        )
      ),
      h2: React.forwardRef(
        (
          {
            children,
            whileHover,
            whileTap,
            initial,
            animate,
            exit,
            variants,
            transition,
            ...props
          },
          ref
        ) => (
          <h2 ref={ref} {...props}>
            {children}
          </h2>
        )
      ),
      h3: React.forwardRef(
        (
          {
            children,
            whileHover,
            whileTap,
            initial,
            animate,
            exit,
            variants,
            transition,
            ...props
          },
          ref
        ) => (
          <h3 ref={ref} {...props}>
            {children}
          </h3>
        )
      ),
      p: React.forwardRef(
        (
          {
            children,
            whileHover,
            whileTap,
            initial,
            animate,
            exit,
            variants,
            transition,
            ...props
          },
          ref
        ) => (
          <p ref={ref} {...props}>
            {children}
          </p>
        )
      ),
    },
    AnimatePresence: ({ children }) => <>{children}</>,
    useAnimation: () => ({
      start: jest.fn(),
      set: jest.fn(),
    }),
  }
})

// Mock Next.js Link component
jest.mock('next/link', () => {
  return ({ children, href, ...props }) => {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    )
  }
})

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    // eslint-disable-next-line jsx-a11y/alt-text
    return <img {...props} />
  },
}))

// Mock Leaflet to avoid window/document issues in tests
jest.mock('react-leaflet', () => ({
  MapContainer: ({ children, ...props }) => (
    <div data-testid="map-container" {...props}>
      {children}
    </div>
  ),
  TileLayer: () => <div data-testid="tile-layer" />,
  Marker: ({ children }) => <div data-testid="marker">{children}</div>,
  Popup: ({ children }) => <div data-testid="popup">{children}</div>,
  Circle: () => <div data-testid="circle" />,
}))

jest.mock('leaflet', () => ({
  Icon: {
    Default: {
      prototype: {},
      mergeOptions: jest.fn(),
    },
  },
}))

// Mock environment variables for tests
process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID = 'G-TEST123'
process.env.NEXT_PUBLIC_HOSPITABLE_WIDGET_ID = 'test-widget-id'
process.env.NODE_ENV = 'test'
