import {
    addEdge,
    Background,
    BackgroundVariant,
    Controls,
    MiniMap,
    OnConnect,
    ReactFlow,
    useEdgesState,
    useNodesState
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import { useCallback } from 'react'
const initialNodes = [
	{ id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
	{ id: '2', position: { x: 0, y: 100 }, data: { label: '2' } }
]
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }]
export default function MindMap() {
	const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
	const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

	const onConnect: OnConnect = useCallback(
		connection => setEdges(eds => addEdge(connection, eds)),
		[setEdges]
	)

	return (
		<div className="p-5 relative h-[90vh]">
			<ReactFlow
				nodes={nodes}
				edges={edges}
				onNodesChange={onNodesChange}
				onEdgesChange={onEdgesChange}
				onConnect={onConnect}
			>
	
			</ReactFlow>

			<Controls />
			<MiniMap nodeStrokeWidth={1} />
			<Background variant={BackgroundVariant.Dots} gap={12} size={1} />
		</div>
	)
}
