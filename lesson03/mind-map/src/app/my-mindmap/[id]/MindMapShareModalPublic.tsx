'use client'
import { MindMap } from '@/app/api/mindmap/route'
import { ChangeEvent, useEffect, useState } from 'react'
import MindMapShareInput from './MindMapShareInput'
import MindMapShareTextarea from './MindMapShareTextarea'

type Props = {
	mindmap: MindMap
	onChange: (mindmap: MindMap) => void
}

export default function MindMapShareModalPublic({ mindmap, onChange }: Props) {
	const [origin, setOrigin] = useState('')
	useEffect(() => {
		setOrigin(window.location.origin)
	}, [])

	function handleOnChange(
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) {
		onChange({ ...mindmap, [e.target.name]: e.target.value })
	}

	return (
		<div>
			<MindMapShareInput
				label="Liên kết chia sẻ"
				value={origin + '/my-mindmap/' + mindmap.id}
				readOnly
			/>
			<MindMapShareInput
				label="Tiêu đề"
				defaultValue={mindmap.title}
				name="title"
				onChange={handleOnChange}
			/>
			<MindMapShareTextarea
				label="Mô tả"
				defaultValue={mindmap.description}
				name="description"
				onChange={handleOnChange}
			/>
			<MindMapShareInput
				label="Ảnh chia sẻ"
				value={origin + '/imgs/so-do-tu-duy.webp'}
				readOnly
			/>
		</div>
	)
}
