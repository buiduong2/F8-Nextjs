import { Metadata } from 'next'
import MindMapPageClient from './MindMapClientPage'
import { fetchMindMapById } from '@/services/mindmap'
import { MindMap } from '@/app/api/mindmap/route'
import { getSession } from '@auth0/nextjs-auth0'
import { notFound, redirect } from 'next/navigation'
interface Props {
	params: { id: string }
}
export async function generateMetadata(ctx: Props): Promise<Metadata> {
	const id = ctx.params.id
	const { data: mindmap } = await getMindmap(id)
	const title = mindmap.title
	const description = mindmap.description
	return {
		title,
		description,
		openGraph: {
			title,
			description,
			images: ['/imgs/so-do-tu-duy.webp']
		}
	}
}

export default async function MindMapPage({ params }: Props) {
	const { data: mindmap, owner } = await getMindmap(params.id)
	return <MindMapPageClient mindmap={mindmap} isOwner={owner} />
}

async function getMindmap(
	id: string
): Promise<{ data: MindMap; owner: boolean }> {
	const session = await getSession()
	const mindmap = await fetchMindMapById(id)
	if (mindmap) {
		if (session?.user?.sub === mindmap.userId) {
			return {
				data: mindmap,
				owner: true
			}
		}
		if (!mindmap.isPublic && !session?.user) {
			return redirect('/api/auth/login')
		}
		if (mindmap.isPublic) {
			return {
				data: mindmap,
				owner: false
			}
		}
	}

	return notFound()
}
