/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        darkCyan: 'hsl(158, 36%, 37%)',
        hoveredDarkCyan: 'hsl(156.32deg 42.22% 17.65%)',
        cream : 'hsl(30, 38%, 92%)',
        veryDarkBlue: 'hsl(212, 21%, 14%)',
        darkGrayishBlue: 'hsl(228, 12%, 48%)',
        white: 'hsl(0, 0%, 100%)'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        fraunces: ['Fraunces', 'serif']
      }
    },
  },
  plugins: [],
}

