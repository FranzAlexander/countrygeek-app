/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['Roboto', 'Arial', 'sans-serif'],
			heading: ['Montserrat', 'Arial', 'sans-serif'],
			body: ['Open Sans', 'Arial', 'sans-serif']
		},
		extend: {},
		colors: {
			primary: '#203583',
			'primary-20': '#1A2A69',
			secondary: '#ffffff',
			accent: '#2086d5',
			logo: '#F9CC0B'
		}
	}
};
