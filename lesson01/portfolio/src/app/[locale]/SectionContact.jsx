import { Card, CardBody, CardHeader } from '@nextui-org/card'
import { Link } from '@nextui-org/link'
import { useTranslations } from 'next-intl'

import React from 'react'

export default function SectionContact({ contacts }) {
	const t = useTranslations('HomePage.sectionContact')
	return (
		<Card shadow="none">
			<CardHeader className="justify-center">
				<h4 className="mt-4">{t('title')}</h4>
			</CardHeader>
			<CardBody>
				<ul>
					{contacts.map(contact => (
						<li key={contact.label}>
							{contact.label}
							<Link
								isExternal
								color="warning"
								target="_blank"
								href={contact.href}
							>
								{contact.value}
							</Link>
						</li>
					))}
				</ul>
			</CardBody>
		</Card>
	)
}
