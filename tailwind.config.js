/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        logo: ['Lobster', 'cursive'],
      },
      colors: {
        'light-sapphire': '#8ecae6',
        sapphire: '#219ebc',
        'dark-sapphire': '#023047',
        gray: '#EDF2F4',
      },
    },
  },
  plugins: [],
};
