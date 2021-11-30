const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: {
    files: ['./src/**/*.{js,ts,jsx,tsx}'],
    safelist: [{ pattern: /react-modal-sheet|swiper/ }],
  },
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.zinc,
        brand: colors.emerald,
      },
      cursor: {
        grab: 'grab',
        grabbing: 'grabbing',
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
      maxHeight: (theme) => ({
        ...theme('maxWidth'),
      }),
      maxWidth: {
        '2xs': '14rem',
      },
      opacity: {
        3: '0.03',
      },
      ringColor: (theme) => ({
        DEFAULT: theme('colors.brand.500'),
      }),
      ringOpacity: {
        DEFAULT: '1',
      },
      ringWidth: {
        DEFAULT: '1px',
      },
      scale: {
        98: '0.98',
        102: '1.02',
      },
      screens: {
        standalone: { raw: '(display-mode: standalone)' },
      },
    },
    fill: (theme) => theme('colors'),
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
