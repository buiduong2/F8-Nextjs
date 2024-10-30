import { BorderRadius, BorderStyle, BorderWidth } from '../global/border'
import { Color } from '../global/color'

export interface NodeData {
	label?: string | React.ReactNode
	shape?: 'square' | 'RoundedSquare' | 'circle'
	bgColor?: Color
	text?: {
		color?: Color
		italic?: boolean
		underline?: boolean
		bold?: boolean
	}
	border?: {
		color?: Color
		width?: BorderWidth
		radius?: BorderRadius
		style?: BorderStyle
	}
}

export type NodeRecord = {
	label?: string | React.ReactNode
	shape?: 'square' | 'RoundedSquare' | 'circle'
	bgColor?: Color
	text?: {
		color: Color
		italic?: boolean
		underline?: boolean
		bold?: boolean
	}
	border?: {
		color?: Color
		width?: BorderWidth
		radius?: BorderRadius
		style?: BorderStyle
	}
}
