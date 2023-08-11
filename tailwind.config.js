/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  important: true,
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        primary: '#2866f6',
        'primary-dark': '#1649f3',
        'primary-light': '#c2d7fd',
        'primary-lighter': '#e7effe',
        secondary: '#388e3c',
        success: '#2dd36f',
        info: '#2196f3',
        warning: '#ffc409',
        danger: '#f44336',
        dark: '#212121',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
