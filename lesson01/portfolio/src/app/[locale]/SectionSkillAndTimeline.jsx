import { Card, CardBody, CardHeader } from '@nextui-org/card'
import { Image } from '@nextui-org/image'
import { useTranslations } from 'next-intl'
import React from 'react'

export default function SectionSkillAndTimeline({ skills, timelines }) {
	const t = useTranslations('HomePage.sectionSkillAndTimeline')

	return (
		<Card shadow="none">
			<CardHeader className="flex-col">
				<Image
					isBlurred
					isZoomed
					width={280}
					height={280}
					src="/img/f8.jpg"
					alt="My Avatar"
					className="mb-0 mt-0"
					shadow="sm"
				/>
				<p>{t('avatarTitle')}</p>
			</CardHeader>
			<CardBody>
				<div>
					<h4 className="text-foreground">{t('skillTitle')} </h4>
					<ul>
						{skills.map(skill => (
							<li key={skill.label}>
								<b>{skill.label} </b> {skill.value}
							</li>
						))}
					</ul>
				</div>
				<div>
					<h4 className="text-foreground">{t('timelineTitle')} </h4>
					<ul>
						{timelines.map(timeline => (
							<li key={timeline.label}>
								<b>{timeline.label}: </b> {timeline.value}
							</li>
						))}
					</ul>
				</div>
			</CardBody>
		</Card>
	)
}
