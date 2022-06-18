/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        logo: ['Lobster', 'cursive'],
      },
      colors: {
        sapphire: '#065A82',
        'blue-gray': '#1C7293',
        gray: '#EDF2F4',
      },
    },
  },
  plugins: [],
};
