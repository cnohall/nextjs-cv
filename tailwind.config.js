/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        'background-primary': '#F8F7F4', // Warmer, creamier off-white
        'text-primary': '#2c3e50', // Softer, more sophisticated dark blue-gray
        'accent-primary': '#81A1C1', // Muted, classic Scandinavian blue
        'accent-secondary': '#BF616A', // Muted, warm terracotta red
        'border-light': '#E5E7EB', // Neutral, light gray for borders
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};