import {
	BaseEdge,
	Edge,
	EdgeLabelRenderer,
	EdgeProps,
	getBezierPath,
	GetBezierPathParams,
	getSimpleBezierPath,
	getSmoothStepPath,
	getStraightPath
} from '@xyflow/react'
import { EdgeRecord } from '../type/edgeType'
import {
	getStrokeColorClass,
	getStrokeStyleClass,
	getStrokeWidthClass
} from '../utils'
import CustomEdgeInput from './CustomEdgeInput'

type CustomEdge = Edge<EdgeRecord, 'custom'>

export default function CustomEdge(props: EdgeProps<CustomEdge>) {
	const { id, sourceX, sourceY, targetX, targetY, data, selected } = props
	const { shape, label, line } = data || {}
	const classes = []

	classes.push(getStrokeColorClass(line?.color))
	classes.push(getStrokeStyleClass(line?.style))
	classes.push(getStrokeWidthClass(line?.width))

	const [edgePath, labelX, labelY] = getPath(shape, {
		sourceX,
		sourceY,
		targetX,
		targetY
	})

	return (
		<>
			<BaseEdge id={id} path={edgePath} className={classes.join(' ')} />(
			<EdgeLabelRenderer>
				<CustomEdgeInput
					selected={!!selected}
					label={label || ''}
					labelX={labelX}
					labelY={labelY}
					id={id}
				/>
			</EdgeLabelRenderer>
			)
		</>
	)
}

function getPath(shape: EdgeRecord['shape'], params: GetBezierPathParams) {
	if (shape === 'bezier') {
		return getBezierPath(params)
	} else if (shape === 'straight') {
		return getStraightPath(params)
	} else if (shape === 'smoothstep') {
		return getSmoothStepPath(params)
	} else if (shape === 'simple') {
		return getSimpleBezierPath(params)
	} else {
		return getBezierPath(params)
	}
}
