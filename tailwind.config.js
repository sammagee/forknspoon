const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.zinc,
        brand: colors.red,
      },
      fontFamily: {
        sans: [
          'Ubuntu',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
      },
      maxWidth: {
        '2xs': '14rem',
      },
      opacity: {
        3: '0.03',
      },
      ringColor: (theme) => ({
        DEFAULT: theme('colors.gray.500'),
      }),
      ringOffsetWidth: {
        DEFAULT: '0',
      },
      ringOpacity: (theme) => ({
        DEFAULT: theme('opacity.50'),
      }),
      ringWidth: {
        DEFAULT: '2px',
      },
      scale: {
        98: '0.98',
        102: '1.02',
      },
    },
    fill: (theme) => theme('colors'),
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
