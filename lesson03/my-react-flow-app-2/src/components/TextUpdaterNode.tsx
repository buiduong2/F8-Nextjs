import { Handle, Position, type Node, type NodeProps } from '@xyflow/react'
import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react'
import { NodeRecord } from '../type/nodeType'
import WrapperNode from './WrapperNode'

type TextUpdateNode = Node<NodeRecord, 'text-update'>

export default function TextUpdateNode({
	data,
	selected
}: NodeProps<TextUpdateNode>) {
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

	const onChange = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
		console.log(evt.target.value)
		console.log(data)
	}, [])
	return (
		<>
			<Handle
				type="target"
				position={Position.Top}
				className="w-8 h-4 rounded bg-blue-400"
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
						onChange={onChange}
						onBlur={() => setIsEditing(false)}
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
			<Handle
				type="source"
				position={Position.Bottom}
				id="a"
				className="w-8 h-4 rounded bg-blue-400"
			/>
		</>
	)
}
