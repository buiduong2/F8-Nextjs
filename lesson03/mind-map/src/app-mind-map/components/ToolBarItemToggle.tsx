import { IconButton, Tooltip } from '@material-tailwind/react'
import { Node } from '@xyflow/react'
import { useMemo } from 'react'
import { IconType } from 'react-icons'
import { NodeData, NodeRecord } from '../type/nodeType'

interface Props {
	isActiveFn: (node: Node<NodeRecord>) => boolean
	tooltip: string
	Icon: IconType
	applyChangeSupplier: (isActive: boolean) => NodeData
	node: Node<NodeRecord>
	applyChange: (data: NodeData) => void
}

export default function ToolBarItemAbstractToggle(props: Props) {
	const {
		node,
		applyChange,
		isActiveFn,
		applyChangeSupplier,
		Icon,
		tooltip
	} = props

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const isActive = useMemo<boolean>(() => isActiveFn(node), [node])

	function handleOnClick() {
		applyChange(applyChangeSupplier(isActive))
	}

	return (
		<>
			<div>
				<Tooltip content={tooltip}>
					<IconButton
						color={isActive ? 'blue' : 'white'}
						className="border-2"
						size='sm'
						onClick={handleOnClick}
					>
						<Icon className="size-5 text-black " />
					</IconButton>
				</Tooltip>
			</div>
		</>
	)
}
