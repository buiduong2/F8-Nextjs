import React, { HTMLAttributes, memo, Ref } from 'react'
import {
	borderRadiusValues,
	borderStyleValues,
	borderWidthValue
} from '../global/border'
import { bgColors, borderColors, textColors } from '../global/color'
import { TextStyle, textStyleValues } from '../global/text'
import { NodeData } from '../type/nodeType'

interface Props extends HTMLAttributes<HTMLDivElement>, NodeData {
	children: React.ReactNode
	ringRef?: Ref<HTMLDivElement>
	wrapperRef?: Ref<HTMLDivElement>
	innerRef?: Ref<HTMLDivElement>
	selected?: boolean
}

function WrapperNode(props: Props) {
	const {
		shape,
		bgColor,
		text,
		border,
		children,
		ringRef,
		wrapperRef,
		innerRef,
		selected,
		...rest
	} = props
	const { color: textColor } = text || {}
	const {
		width: borderWidth,
		radius: BorderRadius,
		style: borderStyle,
		color: borderColor
	} = border || {}

	const classes = []
	if (shape === 'circle') {
		classes.push('rounded-full')
	} else if (shape === 'RoundedSquare') {
		classes.push('rounded-lg')
	}

	classes.push(bgColors[bgColor || 'orange'])
	classes.push(textColors[textColor || 'black'])

	if (borderWidth) {
		classes.push(borderWidthValue[borderWidth])
	}
	if (BorderRadius) {
		classes.push(borderRadiusValues[BorderRadius])
	}
	if (borderStyle) {
		classes.push(borderStyleValues[borderStyle])
	}

	if (borderColor) {
		classes.push(borderColors[borderColor])
	}

	if (text) {
		for (const key in textStyleValues) {
			const k = key as TextStyle
			if (text[k]) {
				classes.push(textStyleValues[k])
			}
		}
	}

	return (
		<div
			className={`hover:ring-2 inline-block relative ${
				selected ? 'ring-2' : ''
			}`}
			ref={ringRef}
		>
			<div
				className={`min-w-52 min-h-20 inline-block ${classes.join(
					' '
				)} flex items-center justify-center` }
				ref={wrapperRef}
				{...rest}
			>
				<div className="p-2" ref={innerRef}>
					{children}
				</div>
			</div>
		</div>
	)
}

export default memo(WrapperNode)
