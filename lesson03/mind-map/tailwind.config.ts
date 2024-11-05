import type { Config } from 'tailwindcss'
import withMT from '@material-tailwind/react/utils/withMT'
import colors from 'tailwindcss/colors'

const defaultColor = {
	...colors,
	stone: colors.warmGray,
	sky: colors.lightBlue,
	neutral: colors.trueGray,
	gray: colors.coolGray,
	slate: colors.blueGray
}

const config: Config = {
	content: [
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
			},
			colors: {
				...defaultColor
			}
		}
	},
	plugins: []
}
export default withMT(config)
