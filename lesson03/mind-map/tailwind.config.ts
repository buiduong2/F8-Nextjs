import type { Config } from 'tailwindcss'
const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app-mind-map/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			screens: {
				sm: '540px',
				md: '720px',
				lg: '960px',
				'lg-max': { max: '960px' },
				xl: '1140px',
				'2xl': '1320px'
			}
		}
	},
	plugins: []
}
export default config
