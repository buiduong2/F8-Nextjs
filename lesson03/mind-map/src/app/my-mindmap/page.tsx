import { meta } from '@/constants'
import { Metadata } from 'next'
import MindMapList from './MindMapTable'

export const metadata: Metadata = {
	...meta,
	title: 'Mindmap của tôi - ' + meta.title
}

export default async function PageMyMindmap() {
	return (
		<div className="container py-20 mx-auto">
			<div
				className="flex flex-col justify-center items-center mb-16"
		
			>
				<h2 className="mb-4 text-4xl font-medium">Mindmap của tôi </h2>
			</div>

			<MindMapList  />
		</div>
	)
}
