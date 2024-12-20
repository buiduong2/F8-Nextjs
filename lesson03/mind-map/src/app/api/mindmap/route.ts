import { EdgeRecord } from '@/app-mind-map/type/edgeType'
import { NodeRecord } from '@/app-mind-map/type/nodeType'
import {
	createMindmap,
	deleteMindMapByIdInAndUserId,
	fetchMindMapByUserId
} from '@/services/mindmap'
import { getSession } from '@auth0/nextjs-auth0'
import { Edge, Node } from '@xyflow/react'
import { revalidatePath } from 'next/cache'
import { NextResponse } from 'next/server'
export type MindMap = {
	userId: string
	id: string
	title: string
	description: string
	isPublic: boolean
	nodes: Node<NodeRecord>[]
	edges: Edge<EdgeRecord>[]
	createdAt: string
}
export const POST = async function createMindMap() {
	const session = await getSession()
	const userId = session!.user.sub
	const mindmap = await createMindmap(userId)
	if (mindmap) {
		revalidatePath('/my-mindmap/' + mindmap.id)
		return NextResponse.json(mindmap)
	}
	return NextResponse.json(
		{
			message: 'Error'
		},
		{ status: 500 }
	)
}

export const GET = async function getUserMindMaps() {
	const session = await getSession()
	const userId = session!.user.sub
	const mindmaps = await fetchMindMapByUserId(userId)

	if (mindmaps) {
		return Response.json(mindmaps)
	}
	return NextResponse.json(
		{
			error: 'Not Found',
			description: 'The Resource does not Exists'
		},
		{ status: 404 }
	)
}

export const DELETE = async function deleteByIdIn(req: Request) {
	const session = await getSession()
	const userId = session!.user.sub
	const ids: string[] = await req.json()
	const mindmap = await deleteMindMapByIdInAndUserId(ids, userId)

	if (mindmap) {
		mindmap
			.map(map => map.id)
			.forEach(id => revalidatePath('/my-mindmap/' + id))
		revalidatePath('/my-mindmap/')
		return NextResponse.json({ message: 'Success' })
	}

	return NextResponse.json(
		{
			error: 'Not Found',
			description: 'The Resource does not Exists'
		},
		{ status: 404 }
	)
}
