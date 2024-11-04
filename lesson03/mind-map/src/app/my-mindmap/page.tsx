import { meta } from '@/constants'
import { fetchMindMapByUserId } from '@/services/mindmap'
import { getSession } from '@auth0/nextjs-auth0'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import MindMapList from './MindMapTable'

export const metadata: Metadata = {
	...meta,
	title: 'Mindmap của tôi - ' + meta.title
}

export default async function PageMyMindmap() {
	const session = await getSession()
	const mindmaps = await fetchMindMapByUserId(session!.user.sub)
	if (!mindmaps) {
		return notFound()
	}

	return (
		<div className="container py-20 mx-auto">
			<div className="flex flex-col justify-center items-center mb-16">
				<h2 className="mb-4 text-4xl font-medium">Mindmap của tôi </h2>
			</div>

			<MindMapList mindmaps={mindmaps} />
		</div>
	)
}
