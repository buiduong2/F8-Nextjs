import {
	Handle,
	NodeResizer,
	Position,
	useReactFlow,
	type Node,
	type NodeProps
} from '@xyflow/react'
import { FocusEvent, useCallback, useEffect, useRef, useState } from 'react'
import { NodeRecord } from '../type/nodeType'
import WrapperNode from './NodeWrapper'
import TextUpdaterNodeToolbar from './NodeTextUpdaterToolbar'

export type TextUpdateNode = Node<NodeRecord, 'text-update'>

export default function TextUpdateNode({
	data,
	selected,
	id
}: NodeProps<TextUpdateNode>) {
	const { updateNodeData } = useReactFlow()
	const [isEditing, setIsEditing] = useState(false)

	const input = useRef<HTMLInputElement>(null)
	const wrapper = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (!input.current) return

		if (isEditing) {
			input.current.classList.remove('pointer-events-none')
		} else {
			input.current.classList.add('pointer-events-none')
		}

		return () => {}
	}, [isEditing])

	function handleOnDoubleClick() {
		setIsEditing(true)
		input.current?.focus()
	}

	const handleOnClickEdit = useCallback(() => {
		setIsEditing(true)
	}, [])

	const onBlur = useCallback((evt: FocusEvent<HTMLInputElement>) => {
		updateNodeData(id, { label: evt.target.value })
		setIsEditing(false)
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	return (
		<>
			<TextUpdaterNodeToolbar onEdit={handleOnClickEdit} id={id} />
			<NodeResizer
				handleClassName={selected ? '!w-4 !h-4 !border' : '!hidden'}
				color="#ff0071"
				isVisible={selected}
				minWidth={210}
				minHeight={80}
			/>
			<Handle
				type={'target'}
				id="target-top"
				position={Position.Top}
				className="!w-6 !h-3 !rounded !bg-blue-400"
			/>
			<Handle
				type={'source'}
				id="source-top"
				position={Position.Bottom}
				className="!w-6 !h-3 !rounded !bg-blue-400"
			/>
			<WrapperNode
				selected={selected}
				{...data}
				onDoubleClick={handleOnDoubleClick}
				tabIndex={1}
				wrapperRef={wrapper}
			>
				{!isEditing ? (
					<p>{data.label}</p>
				) : (
					<input
						ref={input}
						id="text"
						name="text"
						onBlur={onBlur}
						defaultValue={String(data.label)}
						autoFocus
						className="bg-transparent nodrag outline-none focus:ring-1 focus:ring-white text-center"
						style={{
							color: 'inherit',
							fontStyle: 'inherit',
							textDecoration: 'inherit'
						}}
					/>
				)}
			</WrapperNode>
		</>
	)
}
