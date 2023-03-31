/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'country-geek-gold':'#F9CC0B',
        'country-geek-dark-purple': '#4F1ABC',
        'country-geek-light-purple':'#9B4E98',
        'country-geek-blue': '#203583',
        'country-geek-test':'#203583',
        'country-geek-test-two': '#152A45',
        'country-geek-test-purple':'#8B00FF',
        'country-geek-test-text': '#F8F8F8',
        'country-geek-test-accent': '#2086D5',
        'country-geek-white':'#F8F8F8',
        'country-geek-dark-gray':'#707070'
      },
      fontFamily:{
        sans: ['Roboto','sans-serif']
      },
      spacing:{
        '128':'32rem',
      },
      padding:{
        '1/2':'50%',
      }
    },
  },
  plugins: [],
}

