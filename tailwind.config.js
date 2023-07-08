/** @type {import('tailwindcss').Config} */

export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['Roboto', 'Arial', 'sans-serif'], // For bodies of text
			heading: ['Montserrat', 'Arial', 'sans-serif'], // For headings
			body: ['Open Sans', 'Arial', 'sans-serif'] // for accents like button and such
		},
		extend: {}
	},
	plugins: []
};
