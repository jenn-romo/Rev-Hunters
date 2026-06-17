/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FFFFFF', // main background
          navy: '#2E3748', // dark sections, footer, header
        },
        secondary: {
          gray: '#4C5564', // muted slate for text
          light: '#F9FAFC', // off-white surface for light sections
        },
        accent: {
          cyan: '#0CB5D2', // electric cyan for buttons, highlights
          deep: '#0A93AB', // deep cyan for hovers
        }
      },
      fontFamily: {
        heading: ['Orbitron', 'sans-serif'],
        body: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}