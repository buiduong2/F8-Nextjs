'use client'
import React, { HTMLAttributes, useContext } from 'react'
import { TabContext } from './AppTab'
interface Props extends HTMLAttributes<HTMLDivElement> {
	value: string | number
	children: React.ReactNode
}

export default function AppTabPanel({ value, children, ...rest }: Props) {
	const { activeTab } = useContext(TabContext)!
	return activeTab === value ? <div {...rest}>{children}</div> : null
}
