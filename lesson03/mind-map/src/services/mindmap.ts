import { MindMap } from '@/app/api/mindmap/route'
import { resourceUrl } from '@/constants'
import { nanoid } from 'nanoid'
import { formatDate } from './utils'

export async function fetchMindMapByUserId(
	userId: string
): Promise<MindMap[] | null> {
	try {
		const res = await fetch(resourceUrl + `?userId=${userId}`, {
			cache: 'no-store'
		})
		if (res.ok) {
			return res.json()
		}
		throw new Error('Faild when fetch MindMap')
	} catch {
		return null
	}
}

export async function fetchMindMapByIdAndUserId(
	id: string,
	userId: string
): Promise<MindMap | null> {
	try {
		const result = await fetchMindMapByIdInAndUserId([id], userId)
		return result?.[0] || null
	} catch (error) {
		console.warn(error)
		return null
	}
}

export async function fetchMindMapByIdInAndUserId(
	ids: string[],
	userId: string
): Promise<MindMap[] | null> {
	try {
		const res = await fetch(
			resourceUrl + `?userId=${userId}&id=${ids.join('&id=')}`,
			{
				cache: 'no-store'
			}
		)
		if (res.ok) {
			return res.json()
		}
		console.warn('Faild From fetchMindMapByIdInAndUserId')
	} catch (error) {
		console.warn(error)
	}
	return null
}

export async function fetchMindMapByIdAndIsPublic(
	id: string
): Promise<MindMap | null> {
	try {
		const res = await fetch(resourceUrl + `?id=${id}&isPublic=true`)
		if (res.ok) {
			const data: MindMap[] = await res.json()
			if (data.length === 1) {
				return data[0]
			}
		}
	} catch (error) {
		console.warn(error)
	}

	return null
}

export async function createMindmap(userId: string): Promise<MindMap | null> {
	try {
		const mindmap: MindMap = {
			userId,
			id: nanoid(),
			title: 'Mindmap không có tên',
			description: 'Chưa có mô tả',
			edges: [],
			nodes: [],
			isPublic: false,
			createdAt: formatDate(new Date())
		}
		const res = await fetch(resourceUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(mindmap)
		})
		if (res.ok) {
			return res.json()
		}
		console.warn(res)
	} catch (error) {
		console.warn(error)
	}
	return null
}

export async function deleteMindMapByIdAndUserId(
	id: string,
	userId: string
): Promise<MindMap | null> {
	try {
		const result = await deleteMindMapByIdInAndUserId([id], userId)
		return result?.[0] || null
	} catch (error) {
		console.warn(error)
		return null
	}
}

export async function deleteMindMapByIdInAndUserId(
	ids: string[],
	userId: string
): Promise<MindMap[] | null> {
	try {
		const mindmaps = await fetchMindMapByIdInAndUserId(ids, userId)
		if (mindmaps) {
			const promises = mindmaps
				.map(map => map.id)
				.map(id => fetch(resourceUrl + '/' + id, { method: 'DELETE' }))
			await Promise.all(promises)
			return mindmaps
		}
		return null
	} catch (error) {
		console.warn(error)
		return null
	}
}

export async function editMindMapByIdAndUserId(
	id: string,
	userId: string,
	mindmap: MindMap
): Promise<MindMap | null> {
	const old = await fetchMindMapByIdInAndUserId([id], userId)
	if (old) {
		const res = await fetch(resourceUrl + '/' + id, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(mindmap)
		})
		if (res.ok) {
			return mindmap
		}
	}
	return null
}

export async function fetchMindMapById(id: string): Promise<MindMap | null> {
	try {
		const res = await fetch(resourceUrl + '/' + id)
		if (res.ok) {
			return res.json()
		}
	} catch (error) {
		console.warn(error)
	}

	return null
}
