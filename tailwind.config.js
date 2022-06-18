/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        logo: ['Lobster', 'cursive'],
      },
    },
  },
  plugins: [],
};
