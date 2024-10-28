import React from 'react'
import MindMapShareInput from './MindMapShareInput'
import MindMapShareTextarea from './MindMapShareTextarea'
import { ActionType } from './MindMapShareModal'

type Props = {
	onChange: (action: ActionType) => void
}

export default function MindMapShareModalPublic({}: Props) {
	return (
		<div>
			<MindMapShareInput label="Liên kết chia sẻ" />
			<MindMapShareInput label="Tiêu đề" />
			<MindMapShareTextarea label="Mô tả" />
			<MindMapShareInput label="Ảnh chia sẻ" />
		</div>
	)
}
