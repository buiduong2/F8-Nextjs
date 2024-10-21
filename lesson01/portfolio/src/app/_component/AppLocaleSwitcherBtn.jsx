'use client'
import { Link } from '@/i18n/routing'
import { Button } from '@nextui-org/button'
import { useLocale } from 'next-intl'
import React from 'react'

export default function AppLocaleSwitcherBtn() {
	const locale = useLocale()
	return (
		<Button
			as={Link}
			scroll={false}
			href={'/'}
			locale={locale === 'vi' ? 'en' : 'vi'}
			variant="bordered"
			isIconOnly
		>
			{locale === 'vi' ? 'en' : 'vi'}
		</Button>
	)
}
