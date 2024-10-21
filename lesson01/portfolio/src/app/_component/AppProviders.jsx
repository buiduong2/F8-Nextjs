'use client'
import { NextUIProvider } from '@nextui-org/system'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { NextIntlClientProvider } from 'next-intl'
import React from 'react'

export default function Providers({ children, messages, locale }) {
	return (
		<NextUIProvider>
			<NextThemesProvider attribute="class" defaultTheme="light">
				<NextIntlClientProvider messages={messages} locale={locale}>
					{children}
				</NextIntlClientProvider>
			</NextThemesProvider>
		</NextUIProvider>
	)
}
