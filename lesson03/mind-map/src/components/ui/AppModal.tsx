'use client'
import React, { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode
	isOpen: boolean
	handleClickOverlay: () => void
}

export default function AppModal(props: Props) {
	const { children, isOpen, handleClickOverlay, ...rest } = props
	return (
		<>
			{isOpen && (
				<div className="fixed inset-0">
					<div
						className="bg-slate-900/50 absolute inset-0"
						onClick={handleClickOverlay}
					></div>
					<div className="bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-h-28 max-w-lg w-full rounded-md overflow-hidden">
						<div {...rest}>{children}</div>
					</div>
				</div>
			)}
		</>
	)
}
