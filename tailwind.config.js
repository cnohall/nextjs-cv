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
        'background-primary': '#F9FAFB', // Very light gray/off-white
        'text-primary': '#334155', // Dark charcoal gray for main text
        'accent-primary': '#AEC6CF', // Soft, muted cadet blue for primary accents
        'accent-secondary': '#DCCDB4', // Warm, soft beige/sand tone for secondary accents
        'border-light': '#CBD5E1', // Light, clean gray for borders and subtle elements
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};