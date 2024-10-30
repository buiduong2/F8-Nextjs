import {
	Edge,
	Node,
	OnSelectionChangeFunc,
	useOnSelectionChange,
	useReactFlow
} from '@xyflow/react'
import { merge } from 'lodash'
import { useCallback, useState } from 'react'
import ToolBarListNode from './ToolBarListNode'
import { NodeData, NodeRecord } from '../type/nodeType'
import ToolBarListEdge from './ToolBarListEdge'
import { EdgeData } from '../type/edgeType'

export default function ToolBar() {
	const [selectedNode, setSelectedNode] = useState<Node<NodeRecord> | null>(
		null
	)

	const [selectedEdge, setSelectedEdge] = useState<Edge | null>(null)

	const { setNodes, setEdges } = useReactFlow()

	const onChange = useCallback<OnSelectionChangeFunc>(({ nodes, edges }) => {
		if (edges.length !== 0) {
			setSelectedNode(null)
			setSelectedEdge(edges[0])
		} else if (nodes.length !== 0) {
			setSelectedNode(nodes[0])
			setSelectedEdge(null)
		} else {
			setSelectedNode(null)
			setSelectedEdge(null)
		}
	}, [])

	useOnSelectionChange({
		onChange
	})
	const applyChange = useCallback(
		(style: NodeData | EdgeData) => {
			if (selectedNode) {
				setNodes(nodes =>
					nodes.map(node => {
						if (node.id === selectedNode.id) {
							setSelectedNode(prev => (prev ? { ...prev } : prev))
							return {
								...merge(node, { data: style })
							}
						}
						return node
					})
				)
			} else if (selectedEdge) {
				setEdges(edges =>
					edges.map(edge => {
						if (edge.id === selectedEdge.id) {
							setSelectedEdge(prev => (prev ? { ...prev } : prev))
							return {
								...merge(edge, { data: style })
							}
						}
						return edge
					})
				)
			}
		},
		[selectedNode, selectedEdge, setEdges, setNodes]
	)
	if (!selectedNode && !selectedEdge) return null

	return (
		<div className="rounded-lg bg-white shadow-md ">
			<ul className="flex gap-2 items-center p-1">
				{selectedNode && (
					<ToolBarListNode
						selected={selectedNode}
						applyChange={applyChange}
					/>
				)}
				{selectedEdge && (
					<ToolBarListEdge
						applyChange={applyChange}
						selected={selectedEdge}
					/>
				)}
			</ul>
		</div>
	)
}
