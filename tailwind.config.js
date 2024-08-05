/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      ...colors,
      'header': '#009cde'
    },
    extend: {
      boxShadow: {
        'card': '2px 3px 23px rgba(203, 218, 232, 0.7)',
      }
    },
  },
  plugins: [],
}