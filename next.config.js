/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Prefer modern image formats for better compression
    formats: ['image/avif', 'image/webp'],
    // Responsive image sizes for different devices
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // Image sizes for different layouts
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Cache optimized images for 1 year
    minimumCacheTTL: 31536000,
    // Disable static imports to allow dynamic optimization
    dangerouslyAllowSVG: false,
    // Content security policy for images
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Optimize for Netlify deployment
  output: 'standalone',
  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Production optimizations
  swcMinify: true,
  // Reduce bundle size by removing unused code
  modularizeImports: {
    '@/components': {
      transform: '@/components/{{member}}',
    },
  },
}

module.exports = nextConfig
