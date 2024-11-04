import {
	BorderRadius,
	borderRadiusValues,
	BorderWidth,
	borderWidthValue
} from '../global/border'
import {
	bgColors,
	borderColors,
	Color,
	strokesColors,
	textColors
} from '../global/color'
import {
	StrokeStyle,
	strokeStyleValues,
	StrokeWidth,
	strokeWidthValues
} from '../global/svg'

export function getTextColorClass(color: Color | undefined): string {
	return textColors[color || 'black']
}

export function getBgColorClass(color: Color | undefined) {
	return bgColors[color || 'white']
}

export function getBorderColorClass(color: Color | undefined) {
	return borderColors[color || 'black']
}

export function getBorderWitdhClass(width: BorderWidth | undefined) {
	return borderWidthValue[width || '0']
}

export function getBorderRadiusClass(radius: BorderRadius | undefined) {
	return borderRadiusValues[radius || 'none']
}

export function getStrokeColorClass(color: Color | undefined) {
	return strokesColors[color || 'blue']
}

export function getStrokeWidthClass(witdh: StrokeWidth | undefined) {
	return strokeWidthValues[witdh || '1']
}

export function getStrokeStyleClass(style: StrokeStyle | undefined) {
	return style ? strokeStyleValues[style] : ''
}
