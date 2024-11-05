import { Edge } from '@xyflow/react'
import { BsArrowDownRight } from 'react-icons/bs'
import { FaCircle } from 'react-icons/fa6'
import { RxBorderWidth } from 'react-icons/rx'
import { TbArrowCurveLeft, TbBorderStyle2 } from 'react-icons/tb'
import { Color, colorNames } from '../global/color'
import { EdgeShape, edgeShapesValues } from '../global/shape'
import {
	StrokeStyle,
	strokeStyles,
	StrokeWidth,
	strokeWidths
} from '../global/svg'
import { EdgeData, EdgeRecord } from '../type/edgeType'
import {
	getBgColorClass,
	getStrokeStyleClass,
	getStrokeWidthClass,
	getTextColorClass
} from '../utils'
import ToolBarItemAbstractPick from './ToolBarItemPick'
import { PiBezierCurveDuotone, PiSteps } from 'react-icons/pi'
import { IoReturnDownForwardOutline } from 'react-icons/io5'

interface Props {
	selected: Edge<EdgeRecord>
	applyChange: (style: EdgeData) => void
}
export default function ToolBarListEdge(props: Props) {
	const { selected, applyChange } = props
	return (
		<>
			<li>
				<ToolBarItemAbstractPick<Color>
					tooltip="Màu Đường kẻ"
					Icon={
						<FaCircle
							className={
								'size-5 ' +
								getTextColorClass(selected.data?.line?.color)
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
					onClickType={color => applyChange({ line: { color } })}
				/>
			</li>
			<li>
				<ToolBarItemAbstractPick<StrokeStyle>
					tooltip="Kiểu nét"
					Icon={<TbBorderStyle2 className={'size-5 rotate-180'} />}
					pickItemsSupplier={style => (
						<svg
							width="100%"
							height="20"
							viewBox="0 0 100 20"
							className={getStrokeStyleClass(style)}
						>
							<line
								x1="0"
								y1="10"
								x2="100"
								y2="10"
								stroke="black"
								strokeWidth="2"
							/>
						</svg>
					)}
					vertical
					types={strokeStyles}
					onClickType={style => applyChange({ line: { style } })}
				/>
			</li>
			<li>
				<ToolBarItemAbstractPick<StrokeWidth>
					tooltip="Độ dày nét"
					Icon={<RxBorderWidth className={'size-5'} />}
					pickItemsSupplier={style => (
						<svg
							width="100%"
							height="20"
							viewBox="0 0 100 20"
							className={getStrokeWidthClass(style)}
						>
							<line
								x1="0"
								y1="10"
								x2="100"
								y2="10"
								stroke="black"
							/>
						</svg>
					)}
					vertical
					types={strokeWidths}
					onClickType={width => applyChange({ line: { width } })}
				/>
			</li>
			<li>
				<ToolBarItemAbstractPick<EdgeShape>
					tooltip="Loại nét"
					Icon={<PiBezierCurveDuotone className={'size-5'} />}
					pickItemsSupplier={style => getStrokeShapePickItem(style)}
					vertical
					types={edgeShapesValues}
					onClickType={shape => applyChange({ shape })}
				/>
			</li>
		</>
	)
}

const items: Record<EdgeShape, React.ReactNode> = {
	bezier: (
		<p className="text-black flex items-center gap-2 ">
			<TbArrowCurveLeft className="size-5" />
			Uốn cong
		</p>
	),
	smoothstep: (
		<p className="text-black flex items-center gap-2 ">
			<PiSteps className="size-5" />
			Gấp khúc
		</p>
	),
	simple: (
		<p className="text-black flex items-center gap-2 ">
			<IoReturnDownForwardOutline className="size-5" />
			Đơn giản
		</p>
	),
	straight: (
		<p className="text-black flex items-center gap-2 ">
			<BsArrowDownRight className="size-5" />
			Thẳng
		</p>
	)
}

function getStrokeShapePickItem(shape: EdgeShape = 'bezier') {
	return items[shape]
}
