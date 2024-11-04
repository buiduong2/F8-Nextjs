import {
	deleteMindMapByIdAndUserId,
	editMindMapByIdAndUserId,
	fetchMindMapByIdAndUserId
} from '@/services/mindmap'
import { getSession } from '@auth0/nextjs-auth0'
import { NextResponse } from 'next/server'
import { MindMap } from '../route'

type Context = {
	params: Promise<{ id: string }>
}

export const GET = async function getMindmapById(req: Request, ctx: Context) {
	const { id } = await ctx.params
	const session = await getSession()

	const mindmap = await fetchMindMapByIdAndUserId(id, session!.user.sub)

	if (mindmap) {
		return NextResponse.json(mindmap)
	}

	return NextResponse.json(
		{
			error: 'Not Found',
			description: 'The Resource does not Exists'
		},
		{ status: 404 }
	)
}

export const PUT = async function editMindmapById(req: Request, ctx: Context) {
	const { id } = await ctx.params
	const session = await getSession()
	const body: MindMap = await req.json()
	const result = await editMindMapByIdAndUserId(id, session!.user.sub, body)
	if (result) {
		return NextResponse.json(result)
	}
	return NextResponse.json(
		{
			error: 'Not Found',
			description: 'The Resource does not Exists'
		},
		{ status: 404 }
	)
}

export const DELETE = async function deleteMindmapById(
	req: Request,
	ctx: Context
) {
	const { id } = await ctx.params
	const session = await getSession()

	const res = await deleteMindMapByIdAndUserId(id, session!.user.sub)
	if (res) {
		return NextResponse.json({})
	}
	return NextResponse.json(
		{
			error: 'Not Found',
			description: 'The Resource does not Exists'
		},
		{ status: 404 }
	)
}
