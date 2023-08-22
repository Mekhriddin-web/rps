/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'barlow': ['Barlow', 'sans-serif'],
      'bebas': ['Bebas Neue', 'sans-serif'],
      'urbanist': ['Urbanist', 'sans-serif'],
    },
    colors: {
      'gray': '#afa8a8',
      'white': '#ffffff',
      'black': '#000000',
      'blackOpacity': 'rgba(0, 0, 0, 0.50)',
      'neutralBlack': '#121212',
      'orange': '#FEC00F',
      'purple': '#A259FF',
      'green': '#19D520',
      'red': '#F00',
      'transparent': 'transparent',
    }
  },
  plugins: [],
}