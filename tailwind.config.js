/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#3b82f6',
        secondary: '#404040',
        dark: '#0f172a',
      },
      screens: {
        '2xl': '1321px',
      },
    },
  },
  plugins: [],
}

