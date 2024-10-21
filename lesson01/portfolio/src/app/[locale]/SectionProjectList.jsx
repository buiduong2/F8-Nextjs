import { Card, CardBody, CardHeader } from '@nextui-org/card'
import { Link } from '@nextui-org/link'
import { Tooltip } from '@nextui-org/tooltip'
import { useTranslations } from 'next-intl'
import React from 'react'

export default function SectionProjectList({ projects }) {
	const t = useTranslations('HomePage.sectionProjectList')
	return (
		<Card>
			<CardHeader className="justify-center">
				<h4 className="text-foreground">{t('title')}</h4>
			</CardHeader>
			<CardBody>
				<ul>
					{projects.map(project => (
						<li key={project.id}>
							<h5 className="text-xl text-foreground">
								{project.title}
							</h5>
							<p>
								{project.timeConsume}
								<br />
								{project.desc}
							</p>
							<div className="flex gap-4">
								<Tooltip
									color={'success'}
									content={project.demoUrl}
								>
									<Link color='warning' href={project.demoUrl} isExternal>
										Demo
									</Link>
								</Tooltip>
								<Tooltip
									color={'default'}
									content={project.codeUrl}
								>
									<Link color='warning' href={project.codeUrl} isExternal>
										Code
									</Link>
								</Tooltip>
							</div>
							<hr className="my-5" />
						</li>
					))}
				</ul>
			</CardBody>
		</Card>
	)
}
