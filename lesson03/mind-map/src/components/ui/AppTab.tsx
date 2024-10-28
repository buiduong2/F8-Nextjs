'use client'

import React, { createContext, useEffect, useState } from 'react'

type Props = {
	children: React.ReactNode
	setCurrenTab: React.Dispatch<React.SetStateAction<ValueType>>
	defaultTabKey: ValueType
}

export type ValueType = string | number

export type TabContextType = {
	activeTab: ValueType
	setActiveTab: React.Dispatch<React.SetStateAction<ValueType>>
}
export const TabContext = createContext<TabContextType | null>(null)

export default function AppTab(props: Props) {
	const { children, defaultTabKey, setCurrenTab } = props
	const [activeTab, setActiveTab] = useState<ValueType>(defaultTabKey)

	useEffect(() => {
		setCurrenTab(activeTab)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [activeTab])

	return (
		<TabContext.Provider value={{ activeTab, setActiveTab }}>
			{children}
		</TabContext.Provider>
	)
}
