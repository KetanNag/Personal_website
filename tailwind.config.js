/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3b82f6', // blue-500
        'primary-hover': '#2563eb', // blue-600
        'dark-card': '#1f2937', // gray-800
        'dark-bg': '#111827', // gray-900
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
