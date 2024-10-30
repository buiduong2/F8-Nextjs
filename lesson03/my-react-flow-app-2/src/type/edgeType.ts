import { IconType } from 'react-icons'
import { Color } from '../global/color'
import { StrokeStyle, StrokeWidth } from '../global/svg'
import { EdgeShape } from '../global/shape'

export interface EdgeData {
	label?: string
	shape?: EdgeShape
	line?: {
		color?: Color
		width?: StrokeWidth
		style?: StrokeStyle
	}
	marker?: {
		start?: IconType
		end?: IconType
	}
}

export type EdgeRecord = {
	label?: string
	shape?: EdgeShape
	line?: {
		color?: Color
		width?: StrokeWidth
		style?: StrokeStyle
	}
	marker?: {
		start?: IconType
		end?: IconType
	}
}
