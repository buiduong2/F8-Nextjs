import {
	addEdge,
	Background,
	BackgroundVariant,
	Controls,
	Edge,
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
import { useCallback } from 'react'

import '@xyflow/react/dist/style.css'
import CustomEdge from './components/CustomEdge'
import TextUpdateNode from './components/TextUpdaterNode'
import ToolBar from './components/ToolBar'
import { NodeRecord } from './type/nodeType'
import { EdgeRecord } from './type/edgeType'

const initialNodes: Node<NodeRecord>[] = [
	{
		id: '1',
		position: { x: 0, y: 0 },
		data: {
			label: '1',
			text: {
				color: 'black'
			},
			bgColor: 'orange',
			border: {
				width: '2'
			}
		},
		type: 'updater'
	},
	{
		id: '2',
		position: { x: 0, y: 300 },
		data: { label: '2' },
		type: 'updater'
	}
]
const initialEdges: Edge<EdgeRecord>[] = [
	{
		id: 'e1-2',
		source: '1',
		target: '2',
		type: 'custom-edge',
		data: {
			label: 'Hello World'
		}
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
let id = 10
const getId = () => `${id++}`
export default function App() {
	const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
	const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)
	const { screenToFlowPosition } = useReactFlow()
	const onConnect: OnConnect = useCallback(
		params => setEdges(eds => addEdge(params, eds)),
		[setEdges]
	)

	const onConnectEnd: OnConnectEnd = useCallback(
		(event, connectionState) => {
			// when a connection is dropped on the pane it's not valid
			if (!connectionState.isValid) {
				// we need to remove the wrapper bounds, in order to get the correct position
				const id = getId()
				const { clientX, clientY } =
					'changedTouches' in event ? event.changedTouches[0] : event
				const newNode: Node = {
					id,
					position: screenToFlowPosition({
						x: clientX,
						y: clientY
					}),
					data: { label: `Node ${id}` },
					origin: [0.5, 0.0],
					type: 'updater'
				}
				setNodes(nds => nds.concat(newNode))
				setEdges(eds =>
					eds.concat({
						id,
						source: connectionState.fromNode?.id || '',
						target: id
					})
				)
			}
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[screenToFlowPosition]
	)

	return (
		<div className="w-screen h-screen">
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
				<MiniMap />
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
