'use client'
import AppButton from '@/components/ui/AppButton'
import { FaSave } from 'react-icons/fa'
import { FaShare } from 'react-icons/fa6'
import MindMapShareModal from './MindMapShareModal'
import { useState } from 'react'
import MindMap from './MindMap'
import { ReactFlowProvider } from '@xyflow/react'

export default function MindMapPage() {
	const [isOpenModal, setIsOpenModal] = useState(false)

	return (
		<div>
			<MindMapShareModal
				isOpenModal={isOpenModal}
				setIsOpenModal={setIsOpenModal}
			/>
			<div className="container mx-auto">
				<div className="flex items-center justify-between py-5">
					<div className="flex-grow">
						<h1 className="text-2xl md:text-4xl font-medium my-2 outline-0">
							Mind Map không có tên
						</h1>
						<p className="outline-0">Chưa có mô tả</p>
					</div>
					<div className="flex gap-3">
						<AppButton
							className="flex gap-3 items-center"
							color="purple"
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
				</div>
			</div>
			<ReactFlowProvider>
				<MindMap />
			</ReactFlowProvider>
		</div>
	)
}
