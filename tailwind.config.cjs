/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'country-geek-background':'#101627',
        'test-blue':'#1bcdda',
        'oxford-blue':'#0c1d36',
        'metallic-yellow':'#f9cc0b',
        'american-violet':'#4f1a8c',
        'teal-blue':'#077187'
      },
      fontFamily:{
        sans: ['Roboto','sans-serif']
      }
    },
  },
  plugins: [],
}

