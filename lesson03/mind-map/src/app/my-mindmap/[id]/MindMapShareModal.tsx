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

export type ActionType = { type: string; payload: object }

type Props = {
	onSubmit?: (action: ActionType) => void
	isOpenModal: boolean
	setIsOpenModal: React.Dispatch<SetStateAction<boolean>>
}

export default function MindMapShareModal(props: Props) {
	const { onSubmit, isOpenModal, setIsOpenModal } = props
	const [currentTab, setCurrentTab] = useState<number | string>('private')
	const [action, setAction] = useState<ActionType>({
		type: 'private',
		payload: {}
	})
	const tabs = [
		{
			id: 'private',
			label: 'Riêng tư',
			panel: <MindMapShareModalPrivate />
		},
		{
			id: 'public',
			label: 'Công khai',
			panel: <MindMapShareModalPublic onChange={handleOnChange} />
		}
	]

	useEffect(() => {
		if (currentTab === 'private') {
			setAction({ type: 'private', payload: {} })
		} else {
			setAction({ type: 'public', payload: {} })
		}
	}, [currentTab])

	return (
		<AppModal
			isOpen={isOpenModal}
			handleClickOverlay={() => setIsOpenModal(false)}
		>
			<AppTab defaultTabKey={tabs[0].id} setCurrenTab={setCurrentTab}>
				<div className="p-6 pb-4 flex items-center justify-center gap-5">
					{tabs.map(tab => (
						<AppTabItem value={tab.id} key={tab.id}>
							<label className="cursor-pointer flex items-center">
								<input
									type="radio"
									name="tab"
									checked={currentTab === tab.id}
									className="mr-2 size-4"
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
		onSubmit?.(action)
		setIsOpenModal(false)
	}

	function handleOnClickCancel() {
		setIsOpenModal(false)
	}

	function handleOnChange(action: ActionType) {
		console.log(action)
	}
}
