/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // TODO: Define color scheme based on property branding
        primary: {
          DEFAULT: '#3b82f6', // Placeholder blue
          dark: '#1e40af',
          light: '#93c5fd',
        },
        secondary: {
          DEFAULT: '#f59e0b', // Placeholder amber
          dark: '#b45309',
          light: '#fcd34d',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
