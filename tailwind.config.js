/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4ECCA3', // Tealish light green
        secondary: '#E0FFFF', // Light cyan
        accent: '#03045E', // Deep navy
        button: '#45B69C', // Darker teal for buttons
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};