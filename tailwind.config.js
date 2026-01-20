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
        'background-primary': '#1a202c',
        'text-primary': '#edf2f7',
        'text-secondary': '#a0aec0', 
        'accent-primary': '#4299e1',
        'accent-secondary': '#BF616A',
        'border-light': '#4a5568',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};