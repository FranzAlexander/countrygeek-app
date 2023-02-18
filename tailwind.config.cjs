/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'country-geek-gold':'#F9CC0B',
        'country-geek-dark-purple': '#4F1ABC',
        'country-geek-light-purple':'#63339A',
        'country-geek-blue': '#16335F'
        // 'country-geek-background':'#101627',
        // 'country-geek-light-blue':'#1bcdda',
        // 'country-geek-purple':'#b950da',
        // 'country-geek-dark-purple':'#530066',
        // 'country-geek-test-purple':'#7e04eb',
        // 'test-gold':'#a8a824',
        // 'oxford-blue':'#0c1d36',
        // 'metallic-yellow':'#f9cc0b',
        // 'american-violet':'#4f1a8c',
        // 'teal-blue':'#077187',
        // 'test-aqua-marine':'#40e0d0',
        // 'booking-purple':'#9014dd',
        // 'booking-blue':'#4c6de7',
        // 'booking-dark-blue:':'#1f6ad9',
        // 'Test-book':'#0C2D48',
        // 'Test-purp':"#214759",
        // 'Test-grad':'#405BC0',
        // 'Test-blue':'#0E34A0',
        // 'prussian-blue':"#0E2B43"
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

