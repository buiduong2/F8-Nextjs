import {
	FaBold,
	FaCircle,
	FaCircleDot,
	FaItalic,
	FaUnderline
} from 'react-icons/fa6'
import { MdOutlineFormatColorText } from 'react-icons/md'
import { RxBorderWidth } from 'react-icons/rx'
import { TbBorderCornerIos } from 'react-icons/tb'
import {
	BorderRadius,
	BorderWidth,
	borderWidths,
	rounds
} from '../global/border'
import { Color, colorNames } from '../global/color'
import {
	getBgColorClass,
	getBorderColorClass,
	getBorderRadiusClass,
	getBorderWitdhClass,
	getTextColorClass
} from '../utils'
import ToolBarItemAbstractPick from './ToolBarItemPick'
import ToolBarItemAbstractToggle from './ToolBarItemToggle'
import { Node } from '@xyflow/react'
import { NodeData, NodeRecord } from '../type/nodeType'

interface Props {
	selected: Node<NodeRecord>
	applyChange: (style: NodeData) => void
}

export default function ToolBarNode(props: Props) {
	const { selected, applyChange } = props
	return (
		<>
			<li>
				<ToolBarItemAbstractPick<Color>
					tooltip="Màu"
					Icon={
						<FaCircle
							className={
								'size-5 ' +
								getTextColorClass(selected.data.bgColor)
							}
						/>
					}
					pickItemsSupplier={color => (
						<div
							className={
								'rounded-full size-10 border ' +
								getBgColorClass(color)
							}
						></div>
					)}
					types={colorNames}
					onClickType={color => applyChange({ bgColor: color })}
				/>
			</li>
			<li>
				<ToolBarItemAbstractPick<Color>
					tooltip="Màu viền"
					Icon={
						<FaCircleDot
							className={
								'size-5 ' +
								getTextColorClass(selected.data.border?.color)
							}
						/>
					}
					pickItemsSupplier={color => (
						<div
							className={
								'rounded-full size-10 border-4 ' +
								getBorderColorClass(color)
							}
						></div>
					)}
					types={colorNames}
					onClickType={color => applyChange({ border: { color } })}
				/>
			</li>
			<li>
				<ToolBarItemAbstractPick<BorderWidth>
					tooltip="Độ dày viền"
					Icon={<RxBorderWidth className={'size-5 '} />}
					pickItemsSupplier={width => (
						<div
							className={
								'w-full border-black mt-2 ' +
								getBorderWitdhClass(width)
							}
						></div>
					)}
					types={borderWidths}
					onClickType={width => applyChange({ border: { width } })}
					vertical
				/>
			</li>
			<li>
				<ToolBarItemAbstractPick<BorderRadius>
					tooltip="Độ cong viền"
					Icon={<TbBorderCornerIos className={'size-5 '} />}
					pickItemsSupplier={radius => (
						<div
							className={
								'w-10 h-8 border-black border mt-2 ' +
								getBorderRadiusClass(radius)
							}
						></div>
					)}
					types={rounds}
					onClickType={radius => applyChange({ border: { radius } })}
				/>
			</li>
			<li>
				<ToolBarItemAbstractPick<Color>
					tooltip="Màu chữ"
					Icon={
						<MdOutlineFormatColorText
							className={
								'size-5 ' +
								getTextColorClass(selected.data?.text?.color)
							}
						/>
					}
					pickItemsSupplier={color => (
						<MdOutlineFormatColorText
							className={
								'size-10 border rounded-full ' +
								getTextColorClass(color)
							}
						/>
					)}
					types={colorNames}
					onClickType={color => applyChange({ text: { color } })}
				/>
			</li>
			<li>
				<ToolBarItemAbstractToggle
					tooltip="Chữ Đậm"
					applyChange={applyChange}
					node={selected}
					Icon={FaBold}
					applyChangeSupplier={isActive => ({
						text: { bold: !isActive }
					})}
					isActiveFn={node => !!node.data.text?.bold}
				/>
			</li>
			<li>
				<ToolBarItemAbstractToggle
					tooltip="Chữ nghiêng"
					node={selected}
					applyChange={applyChange}
					Icon={FaItalic}
					applyChangeSupplier={isActive => ({
						text: { italic: !isActive }
					})}
					isActiveFn={node => !!node.data.text?.italic}
				/>
			</li>
			<li>
				<ToolBarItemAbstractToggle
					applyChange={applyChange}
					node={selected}
					tooltip="Chữ gạch chân"
					Icon={FaUnderline}
					applyChangeSupplier={isActive => ({
						text: { underline: !isActive }
					})}
					isActiveFn={node => !!node.data.text?.underline}
				/>
			</li>
		</>
	)
}
