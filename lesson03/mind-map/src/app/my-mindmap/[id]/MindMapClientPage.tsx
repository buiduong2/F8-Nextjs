'use client'
import AppButton from '@/components/ui/AppButton'
import { FaSave } from 'react-icons/fa'
import { FaShare } from 'react-icons/fa6'
import MindMapShareModal from './MindMapShareModal'
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { MindMap } from '@/app/api/mindmap/route'
import MindMapApp from '@/app-mind-map/Main'

interface Props {
	mindmap: MindMap
	isOwner: boolean
}

async function fetchSave(mindmap: MindMap) {
	const res = await fetch('/api/mindmap/' + mindmap.id, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(mindmap)
	})

	if (res.ok) {
		return mindmap
	}
	return null
}

export default function MindMapPageClient({ mindmap, isOwner }: Props) {
	const [isOpenModal, setIsOpenModal] = useState(false)
	const [data, setData] = useState(mindmap)
	const [isEditing, setIsEditing] = useState<string | null>(null)
	const titleRef = useRef<HTMLTitleElement>()

	async function handleSaveData() {
		const newData = await fetchSave(data)
		if (newData) {
			setData(newData)
		}
	}

	async function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
		const input = e.target
		setData(prev => ({ ...prev, [input.name]: input.value }))
		if (input.name === 'title') {
			titleRef.current!.innerText = input.value
		}
	}

	async function handleOnSubmitModal(mindmap: MindMap) {
		const newData = await fetchSave(mindmap)
		if (newData) {
			setData(newData)
			titleRef.current!.textContent = newData.title
		}
	}

	useEffect(() => {
		titleRef.current = document.querySelector(
			'head title'
		) as HTMLTitleElement
	}, [])

	return (
		<div>
			<div className="container mx-auto">
				<div className="flex items-center justify-between py-5">
					<div className="flex-grow">
						{isEditing && isOwner ? (
							<>
								<input
									className="text-2xl md:text-4xl font-medium my-2 outline-0 w-full"
									value={data.title}
									name="title"
									autoFocus={isEditing === 'title'}
									onChange={handleOnChange}
								/>
								<input
									className="outline-0"
									name="descripton"
									autoFocus={isEditing === 'description'}
									value={data.description}
									onChange={handleOnChange}
								/>
							</>
						) : (
							<>
								<h1
									className="text-2xl md:text-4xl font-medium my-2"
									onClick={() => setIsEditing('title')}
								>
									{data.title}
								</h1>
								<p onClick={() => setIsEditing('description')}>
									{data.description}
								</p>
							</>
						)}
					</div>
					{isOwner && (
						<div className="flex gap-3">
							<AppButton
								className="flex gap-3 items-center"
								color="purple"
								onClick={handleSaveData}
							>
								<FaSave /> Lưu thay đổi
							</AppButton>
							<AppButton
								onClick={() => setIsOpenModal(true)}
								className="flex gap-3 items-center"
							>
								<FaShare /> Chia sẻ
							</AppButton>
						</div>
					)}
				</div>
			</div>
			<MindMapApp />
			<MindMapShareModal
				isOpenModal={isOpenModal}
				setIsOpenModal={setIsOpenModal}
				mindmap={data}
				onSubmit={handleOnSubmitModal}
			/>
		</div>
	)
}
