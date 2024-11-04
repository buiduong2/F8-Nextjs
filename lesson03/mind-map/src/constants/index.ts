import { Metadata } from 'next'

export const meta: Metadata = {
	title: 'Mindmap Flow',
	description: 'Mindmap Flow - Công cụ xây dựng sơ đồ tư duy mạnh mẽ',
	openGraph: {
		title: 'Mindmap Flow',
		description: 'Mindmap Flow - Công cụ xây dựng sơ đồ tư duy mạnh mẽ',
		images: ['/imgs/so-do-tu-duy.webp']
	}
}

export const resourceUrl: string =
	(process.env.RESOURCE_BASE_URL || '') + '/mindmaps'

export const serverURL: string = process.env.SERVER_URL || ''
