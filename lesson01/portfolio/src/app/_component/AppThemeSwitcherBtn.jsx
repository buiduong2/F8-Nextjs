'use client'
import { Button } from '@nextui-org/button'
import React from 'react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

export default function AppThemeSwitcherBtn() {
	const [mounted, setMounted] = useState(false)
	const { theme, setTheme } = useTheme()

	// useEffect only runs on the client, so now we can safely show the UI
	useEffect(() => {
		setMounted(true)
	}, [])
	const icon = theme === 'dark' ? faSun : faMoon
	if (!mounted) {
		return (
			<Button className="p-0" variant="bordered" isIconOnly>
				<FontAwesomeIcon icon={icon} className="size-6" />
			</Button>
		)
	}

	function handleOnClick() {
		setTheme(theme === 'dark' ? 'light' : 'dark')
	}

	return (
		<div>
			<Button
				className="p-0"
				variant="bordered"
				isIconOnly
				onClick={handleOnClick}
			>
				<FontAwesomeIcon icon={icon} className="size-6" />
			</Button>
		</div>
	)
}
