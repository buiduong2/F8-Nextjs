export const style = ['underline', 'italic', 'bold'] as const

export const textStyleValues: TextStyles = {
	underline: 'underline',
	italic: 'italic',
	bold: 'font-bold'
}

type TextStyles = Record<TextStyle, string>
export type TextStyle = (typeof style)[number]
