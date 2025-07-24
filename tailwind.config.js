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
        background: '#050505',
        surface: '#111111',
        primary: '#6366F1', // Indigo
        secondary: '#A855F7', // Purple
        accent: '#00FFFF', // Cyan/Neon
        'primary-hover': '#4F46E5',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      keyframes: {
        'subtle-glow': {
          '0%, 100%': { 'box-shadow': '0 0 15px 0px rgba(0, 255, 255, 0.1)' },
          '50%': { 'box-shadow': '0 0 25px 5px rgba(0, 255, 255, 0.15)' },
        },
        'aurora': {
          from: {
            backgroundPosition: '50% 50%, 50% 50%',
          },
          to: {
            backgroundPosition: '350% 50%, 350% 50%',
          },
        },
      },
      animation: {
        'subtle-glow': 'subtle-glow 8s ease-in-out infinite',
        'aurora': 'aurora 60s linear infinite',
      },
    },
  },
  plugins: [],
};
