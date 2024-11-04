'use client'
import AppButton from '@/components/ui/AppButton'
import AppModal from '@/components/ui/AppModal'
import AppTab from '@/components/ui/AppTab'
import AppTabItem from '@/components/ui/AppTabItem'
import AppTabPanel from '@/components/ui/AppTabPanel'
import { SetStateAction, useEffect, useState } from 'react'
import MindMapShareModalPrivate from './MindMapShareModalPrivate'
import MindMapShareModalPublic from './MindMapShareModalPublic'
import { FaPlus } from 'react-icons/fa6'
import { FaTimes } from 'react-icons/fa'
import { MindMap } from '@/app/api/mindmap/route'

type Props = {
	onSubmit?: (mindmap: MindMap) => void
	mindmap: MindMap
	isOpenModal: boolean
	setIsOpenModal: React.Dispatch<SetStateAction<boolean>>
}

export default function MindMapShareModal(props: Props) {
	const { onSubmit, isOpenModal, setIsOpenModal } = props
	const [currentTab, setCurrentTab] = useState<number | string>(
		props.mindmap.isPublic ? 'public' : 'private'
	)
	const [mindmap, setMindmap] = useState<MindMap>(props.mindmap)

	function handleOnChange(mindmap: MindMap) {
		setMindmap(prev => ({ ...mindmap, isPublic: prev.isPublic }))
	}

	useEffect(() => {
		if (currentTab === 'private') {
			setMindmap(prev => ({ ...prev, isPublic: false }))
		} else {
			setMindmap(prev => ({ ...prev, isPublic: true }))
		}
	}, [currentTab])

	const tabs = [
		{
			id: 'private',
			label: 'Riêng tư',
			panel: <MindMapShareModalPrivate />
		},
		{
			id: 'public',
			label: 'Công khai',
			panel: (
				<MindMapShareModalPublic
					mindmap={mindmap}
					onChange={handleOnChange}
				/>
			)
		}
	]
	const defaultTabId = props.mindmap.isPublic ? 'public' : 'private'

	return (
		<AppModal
			isOpen={isOpenModal}
			handleClickOverlay={() => setIsOpenModal(false)}
		>
			<AppTab defaultTabKey={defaultTabId} setCurrenTab={setCurrentTab}>
				<div className="p-6 pb-4 flex items-center justify-center gap-5">
					{tabs.map(tab => (
						<AppTabItem value={tab.id} key={tab.id}>
							<label className="cursor-pointer flex items-center">
								<div
									className={
										'size-4 mr-4 rounded-full border-2 ' +
										(currentTab === tab.id
											? 'border-white ring-1 bg-blue-600'
											: '')
									}
								/>
								<span
									className={
										currentTab === tab.id
											? 'text-blue-400'
											: ''
									}
								>
									{tab.label}
								</span>
							</label>
						</AppTabItem>
					))}
				</div>

				<div className="p-6 pb-4 pt-2">
					{tabs.map(tab => (
						<AppTabPanel key={tab.id} value={tab.id}>
							{tab.panel}
						</AppTabPanel>
					))}
				</div>

				<div className="py-3 px-4 bg-gray-200 flex justify-end gap-3">
					<AppButton
						onClick={handleOnClickConfirm}
						color="blue"
						variant="filled"
						className="flex items-center gap-1"
					>
						<FaPlus /> Lưu lại
					</AppButton>
					<AppButton
						onClick={handleOnClickCancel}
						color="red"
						variant="outlined"
						className="flex items-center gap-1"
					>
						<FaTimes />
						Đóng
					</AppButton>
				</div>
			</AppTab>
		</AppModal>
	)

	function handleOnClickConfirm() {
		onSubmit?.(mindmap)
		setIsOpenModal(false)
	}

	function handleOnClickCancel() {
		setIsOpenModal(false)
	}
}
