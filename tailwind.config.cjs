/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
		colors: {
			primary: '#203583',
			'primary-20': '#1A2A69',
			secondary: '#f8f8f8',
			accent: '#2086d5',
			logo: '#F9CC0B'
		}
	},
	plugins: [require('flowbite/plugin')]
};
