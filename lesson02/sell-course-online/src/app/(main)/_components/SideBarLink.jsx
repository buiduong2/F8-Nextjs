'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function SideBarLink({ children, href }) {
	const pathname = usePathname()

	return (
		<Link
			href={href}
			className={`${
				pathname === href ? 'text-blue-400' : ''
			} hover:text-blue-400`}
			scroll={false}
		>
			{children}
		</Link>
	)
}
