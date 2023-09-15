/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
      'dark-mobile': "url('./images/bg-mobile-dark.jpg')",
      'light-mobile': "url('./images/bg-mobile-light.jpg')",
      'dark-desktop': "url('./images/bg-desktop-dark.jpg')",
      'light-desktop': "url('./images/bg-desktop-light.jpg')",
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}

