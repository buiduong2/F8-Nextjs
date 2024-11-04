import { fetchMindMapByIdAndIsPublic } from '@/services/mindmap'
import { NextResponse } from 'next/server'
type Context = {
	params: Promise<{ id: string }>
}

export const GET = async function getMindmapByIdAndIsPublic(
	req: Request,
	ctx: Context
) {
	const { id } = await ctx.params
	const mindmap = fetchMindMapByIdAndIsPublic(id)
	if (mindmap) {
		return NextResponse.json(mindmap, { status: 200 })
	}
	return NextResponse.json({ message: 'not Found' }, { status: 404 })
}
