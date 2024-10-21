/** @type {import('tailwindcss').Config} */
const { nextui } = require('@nextui-org/theme')

module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/_components/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			typography: ({ theme }) => ({
				DEFAULT: {
					css: {
						'--tw-prose-headings':
							'hsl(var(--nextui-foreground) / var(--nextui-foreground-opacity, var(--tw-text-opacity)))'
					}
				}
			})
		},
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px'
		}
	},
	darkMode: 'class',
	plugins: [nextui({}), require('@tailwindcss/typography')]
}
