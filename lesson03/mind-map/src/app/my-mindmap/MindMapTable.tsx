'use client'
import AppButton from '@/components/ui/AppButton'
import Link from 'next/link'
import { useState } from 'react'
import { FaTrash } from 'react-icons/fa'
import { FaPenToSquare } from 'react-icons/fa6'
import { MindMap } from '../api/mindmap/route'
import css from './mindmap.module.css'
import { useRouter } from 'next/navigation'

type Props = {
	mindmaps: MindMap[]
}

export default function MindMapList({ mindmaps: initialMindmap }: Props) {
	const [mindmaps, setMindmaps] = useState(initialMindmap)
	const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set())
	const [isLoading, setIsLoading] = useState<'create' | 'delete' | null>(null)
	const router = useRouter()

	async function handleOnClickCreate() {
		setIsLoading('create')
		try {
			const res = await fetch('/api/mindmap', {
				method: 'POST'
			})

			if (res.ok) {
				const data: MindMap = await res.json()

				router.push('/my-mindmap/' + data.id)
			}
		} finally {
			setIsLoading(null)
		}
	}

	async function handleOnClickDeleteItem(mindmapId: string) {
		const res = await fetch('/api/mindmap/' + mindmapId, {
			method: 'DELETE'
		})
		if (res.ok) {
			setMindmaps(prev => prev.filter(map => map.id !== mindmapId))
			if (selectedIds.has(mindmapId)) {
				setSelectedIds(prev => prev.difference(new Set([mindmapId])))
			}
		}
	}

	function handleOnChangeSelectedId(mindmapId: string) {
		if (selectedIds.has(mindmapId)) {
			setSelectedIds(prev => prev.difference(new Set([mindmapId])))
		} else {
			setSelectedIds(prev => {
				return prev.union(new Set([mindmapId]))
			})
		}
	}

	function handleOnClickCheckAll() {
		if (selectedIds.size < mindmaps.length) {
			setSelectedIds(prev =>
				prev.union(new Set(mindmaps.map(map => map.id)))
			)
		} else {
			setSelectedIds(new Set())
		}
	}

	async function handleOnClickDeleteGroup() {
		setIsLoading('delete')
		try {
			if (selectedIds.size === 0) return
			const res = await fetch('/api/mindmap', {
				method: 'DELETE',
				body: JSON.stringify(
					mindmaps
						.map(map => map.id)
						.filter(id => selectedIds.has(id))
				)
			})

			if (res.ok) {
				setMindmaps(prev =>
					prev.filter(prev => !selectedIds.has(prev.id))
				)
				setSelectedIds(new Set())
			}
		} finally {
			setIsLoading(null)
		}
	}

	return (
		<div className="rounded overflow-hidden shadow">
			<div className="flex justify-between bg-indigo-400 py-4 px-7 items-center">
				<h3 className="text-2xl text-white">
					Danh sách <strong>Mindmap</strong>
				</h3>
				<div className="flex gap-2">
					<AppButton
						onClick={handleOnClickCreate}
						className="px-10 bg-white"
						variant="text"
						color="blue"
						isLoading={isLoading === 'create'}
					>
						Tạo mới
					</AppButton>
					<AppButton
						className="px-10 bg-white"
						variant="text"
						color="red"
						onClick={handleOnClickDeleteGroup}
						isLoading={isLoading === 'delete'}
					>
						Xóa
					</AppButton>
				</div>
			</div>

			<div className="py-4 px-7">
				<table className={css.table}>
					<thead className="">
						<tr>
							<th className={css.thCheckbox}>
								<input
									type="checkbox"
									checked={
										selectedIds.size === mindmaps.length
									}
									onChange={handleOnClickCheckAll}
								/>
							</th>
							<th className={css.thName}>Tên</th>
							<th className={css.thCreatedAt}>Tạo lúc</th>
							<th className={css.thAction}>Hành động</th>
						</tr>
					</thead>
					<tbody>
						{mindmaps.length === 0 && (
							<tr>
								<td
									colSpan={4}
									className="italic text-xl !text-center"
								>
									Chưa có Mindmap
								</td>
							</tr>
						)}
						{mindmaps.map(mindmap => (
							<tr key={mindmap.id}>
								<td className={css.tdCheckbox}>
									<input
										type="checkbox"
										checked={selectedIds.has(mindmap.id)}
										onChange={() =>
											handleOnChangeSelectedId(mindmap.id)
										}
									/>
								</td>
								<td className={css.tdName}>
									<Link href={'/my-mindmap/' + mindmap.id}>
										<h5>{mindmap.title}</h5>
										<p>{mindmap.description}</p>
									</Link>
								</td>
								<td className={css.tdCreatedAt}>
									{mindmap.createdAt}
								</td>
								<td className={css.tdAction}>
									<Link href={'/my-mindmap/' + mindmap.id}>
										<FaPenToSquare />
									</Link>
									<button
										onClick={() =>
											handleOnClickDeleteItem(mindmap.id)
										}
									>
										<FaTrash />
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}
