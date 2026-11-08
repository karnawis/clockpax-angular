/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        'clockpax-dark': '#fefbe9',
        primary: '#0f1115',
        dark: '#000000',
        light: '#fefbe9',
        completed: '#cf375c',
      },
    },
  },
  plugins: [],
};
