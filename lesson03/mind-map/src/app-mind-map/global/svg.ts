export const strokeWidths = ['1', '2', '3', '4'] as const

export const strokeStyles = ['dash', 'dot', 'dashdot'] as const

export const strokeWidthValues: StrokeWidths = {
	'1': '!stroke-1',
	'2': '!stroke-2',
	'3': '!stroke-[4px]',
	'4': '!stroke-[8px]'
}

export const strokeStyleValues: StrokeStyles = {
	dash: '!stroke-dash',
	dashdot: '!stroke-dashdot',
	dot: '!stroke-dot'
}

export type StrokeWidth = (typeof strokeWidths)[number]
export type StrokeWidths = Record<StrokeWidth, string>
export type StrokeStyle = (typeof strokeStyles)[number]
export type StrokeStyles = Record<StrokeStyle, string>
