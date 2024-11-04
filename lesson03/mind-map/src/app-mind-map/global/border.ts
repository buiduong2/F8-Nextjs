export const borderWidths = ['0', '1', '2', '4', '8'] as const
export const rounds = [
	'none',
	'sm',
	'default',
	'md',
	'lg',
	'xl',
	'full'
] as const
export const style = ['none', 'solid', 'dashed', 'dotted'] as const

export const borderWidthValue: BorderWitdthes = {
	'0': 'border',
	'1': 'border',
	'2': 'border-2',
	'4': 'border-4',
	'8': 'border-8'
}

export const borderRadiusValues: BorderRadiuses = {
	none: 'rounded-none',
	sm: 'rounded-sm',
	default: 'rounded',
	md: 'rounded-md',
	lg: 'rounded-lg',
	xl: 'rounded-xl',
	full: 'rounded-full'
}

export const borderStyleValues: BorderStyles = {
	none: 'border-none',
	solid: 'border-solid',
	dashed: 'border-dashed',
	dotted: 'border-dotted'
}

type BorderWitdthes = Record<BorderWidth, string>
type BorderRadiuses = Record<BorderRadius, string>
type BorderStyles = Record<BorderStyle, string>
export type BorderWidth = (typeof borderWidths)[number]
export type BorderRadius = (typeof rounds)[number]
export type BorderStyle = (typeof style)[number]
