import {
	addEdge,
	Background,
	BackgroundVariant,
	Controls,
	EdgeTypes,
	MiniMap,
	Node,
	NodeTypes,
	OnConnect,
	OnConnectEnd,
	Panel,
	ReactFlow,
	useEdgesState,
	useNodesState,
	useReactFlow
} from '@xyflow/react'
import { useCallback, useContext, useEffect } from 'react'

import '@xyflow/react/dist/style.css'
import CustomEdge from './components/CustomEdge'
import TextUpdateNode from './components/NodeTextUpdater'
import ToolBar from './components/ToolBar'
import { NodeRecord } from './type/nodeType'
import { MindMapContext } from '@/app/my-mindmap/[id]/MindMapClientPage'
import { nanoid } from 'nanoid'

const initialNodes: Node<NodeRecord>[] = [
	{
		id: '1',
		position: { x: 0, y: 0 },
		data: {
			label: 'Root',
			text: {
				color: 'black'
			},
			bgColor: 'orange',
			border: {
				width: '2'
			}
		},
		type: 'updater',
		deletable: false
	}
]

const nodeTypes: NodeTypes = {
	updater: TextUpdateNode
}
const edgeTypes: EdgeTypes = {
	'custom-edge': CustomEdge
}
const connectionLineStyle = { stroke: '#2563eb', strokeWidth: 2 }
const defaultEdgeOptions = { type: 'custom-edge' }
export default function App() {
	const { mindmapRef } = useContext(MindMapContext)!
	const [nodes, setNodes, onNodesChange] = useNodesState(
		mindmapRef.current?.nodes.length !== 0
			? mindmapRef.current?.nodes || initialNodes
			: initialNodes
	)
	const [edges, setEdges, onEdgesChange] = useEdgesState(
		mindmapRef.current?.edges || []
	)
	const { screenToFlowPosition } = useReactFlow()

	const onConnect: OnConnect = useCallback(
		params => {
			if (params.target !== params.source) {
				return setEdges(eds => addEdge(params, eds))
			}
		},
		[setEdges]
	)
	const onConnectEnd: OnConnectEnd = useCallback(
		(event, connectionState) => {
			// when a connection is dropped on the pane it's not valid
			if (
				!connectionState.isValid &&
				connectionState.fromHandle?.type === 'source'
			) {
				// we need to remove the wrapper bounds, in order to get the correct position
				const id = nanoid()
				const { clientX, clientY } =
					'changedTouches' in event ? event.changedTouches[0] : event
				const newNode: Node = {
					id,
					position: screenToFlowPosition({
						x: clientX,
						y: clientY
					}),
					data: { label: `New Node ` },
					origin: [0.5, 0.0],
					type: 'updater'
				}

				setNodes(nds => nds.concat(newNode))
				setEdges(eds =>
					eds.concat({
						id,
						source: connectionState.fromNode?.id || '',
						sourceHandle: connectionState.fromHandle?.id || '',
						target: id,
						targetHandle: 'target-top'
					})
				)
			}
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[screenToFlowPosition]
	)

	useEffect(() => {
		if (mindmapRef && mindmapRef.current) {
			mindmapRef.current.nodes = nodes
			mindmapRef.current.edges = edges
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [nodes, edges])

	return (
		<div className="w-screen h-[80vh]">
			<ReactFlow
				nodes={nodes}
				edges={edges}
				onNodesChange={onNodesChange}
				onEdgesChange={onEdgesChange}
				onConnect={onConnect}
				nodeTypes={nodeTypes}
				edgeTypes={edgeTypes}
				defaultEdgeOptions={defaultEdgeOptions}
				connectionLineStyle={connectionLineStyle}
				onConnectEnd={onConnectEnd}
				fitView
			>
				<Controls />
				<MiniMap
					nodeColor={node => String(node.data.bgColor || 'orange')}
				/>
				<Panel position="top-center">
					<ToolBar />
				</Panel>

				<Background
					variant={BackgroundVariant.Dots}
					gap={12}
					size={1}
				/>
			</ReactFlow>
		</div>
	)
}
