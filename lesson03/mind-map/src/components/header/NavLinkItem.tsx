'use client'
import Link, { LinkProps } from 'next/link'
import React from 'react'
import AppButton from '../ui/AppButton'
import { usePathname } from 'next/navigation'
interface Props extends LinkProps {
	variant?: 'filled' | 'outlined' | 'text'
	color?: 'blue' | 'gray'
	children: React.ReactNode
}

export default function NavLinkItem(props: Props) {
	const { children, href } = props
	const pathname = usePathname()

	return (
		<li>
			<AppButton
				fullWidth
				as={Link}
				variant={pathname === href ? 'filled' : 'text'}
				color={pathname === href ? 'blue' : 'gray'}
				href={href}
			>
				{children}
			</AppButton>
		</li>
	)
}
