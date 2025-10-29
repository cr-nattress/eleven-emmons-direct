/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Mountain-inspired color scheme for Crested Butte property
        primary: {
          DEFAULT: '#3b82f6', // Mountain sky blue
          dark: '#1e40af', // Deep mountain blue
          light: '#93c5fd', // Light sky blue
        },
        secondary: {
          DEFAULT: '#f59e0b', // Sunset amber
          dark: '#b45309', // Rich amber
          light: '#fcd34d', // Golden light
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [
    // Hide scrollbar utility
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          /* IE and Edge */
          '-ms-overflow-style': 'none',
          /* Firefox */
          'scrollbar-width': 'none',
          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      })
    },
  ],
}
