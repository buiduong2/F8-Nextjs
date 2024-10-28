'use client'
import React, { HTMLAttributes, useContext } from 'react'
import { TabContext } from './AppTab'

interface Props extends HTMLAttributes<HTMLDivElement> {
	value: string | number
	children: React.ReactNode
}

export default function AppTabItem({ value, children, ...rest }: Props) {
	const { activeTab, setActiveTab } = useContext(TabContext)!

	function handleOnClick() {
		if (activeTab !== value) {
			setActiveTab(value)
		}
	}

	return (
		<div {...rest} onClick={handleOnClick}>
			{children}
		</div>
	)
}
