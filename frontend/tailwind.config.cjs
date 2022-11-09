/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': [ {'min': '280px', 'max': '640px'},]
      }
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}
