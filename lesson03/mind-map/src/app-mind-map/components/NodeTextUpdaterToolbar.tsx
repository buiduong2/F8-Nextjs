import { IconButton, Tooltip } from '@material-tailwind/react'
import { Node, NodeToolbar, Position, useReactFlow } from '@xyflow/react'
import { LuCopyPlus, LuTextCursor } from 'react-icons/lu'
import { MdDeleteOutline } from 'react-icons/md'

interface Props {
	onEdit: () => void
	id: string
}

export default function TextUpdaterNodeToolbar({ id, onEdit }: Props) {
	const { deleteElements, addNodes, getEdges, getNode } = useReactFlow()
	const handleOnClickDelete = () => {
		const nodesToDelete = [getNode(id)!]
		const edgesToDelete = getEdges().filter(
			edge => edge.source === id || edge.target === id
		)
		deleteElements({ edges: edgesToDelete, nodes: nodesToDelete })
	}

	const handleOnClickCopy = () => {
		const currentNodes = getNode(id)
		const clone = JSON.parse(JSON.stringify(currentNodes)) as Node
		clone.position.x -= 50
		clone.position.y -= 50
		clone.id = String(Math.random())
		clone.selected = false
		addNodes([clone])
	}

	return (
		<NodeToolbar position={Position.Top} className="-top-5">
			<ul className="flex items-center p-1 shadow bg-white rounded-lg border">
				<li>
					<Tooltip content="Tạo bản sao">
						<IconButton
							color="white"
							size="sm"
							className="border"
							onClick={handleOnClickCopy}
						>
							<LuCopyPlus className="size-5" />
						</IconButton>
					</Tooltip>
				</li>
				<li>
					<Tooltip content="Xóa">
						<IconButton
							color="white"
							size="sm"
							className="border"
							onClick={handleOnClickDelete}
						>
							<MdDeleteOutline className="size-5" />
						</IconButton>
					</Tooltip>
				</li>
				<li>
					<Tooltip content="Chỉnh sửa nội dung">
						<IconButton
							color="white"
							size="sm"
							className="border"
							onClick={onEdit}
						>
							<LuTextCursor className="size-5" />
						</IconButton>
					</Tooltip>
				</li>
			</ul>
		</NodeToolbar>
	)
}
