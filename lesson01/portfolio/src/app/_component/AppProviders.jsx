"use client";
import { NextUIProvider } from '@nextui-org/system'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import React from 'react'

export default function Providers({ children }) {
	return (
		<NextUIProvider>
			<NextThemesProvider attribute="class" defaultTheme='light'>
				{children}
			</NextThemesProvider>
		</NextUIProvider>
	)
}
