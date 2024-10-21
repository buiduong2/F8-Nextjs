import { Card, CardBody, CardHeader } from '@nextui-org/card'
import { Tooltip } from '@nextui-org/tooltip'
import { getLocale, getTranslations } from 'next-intl/server'
import AppNavBar from '../_component/AppNavBar'
import SectionContact from './SectionContact'
import SectionProjectList from './SectionProjectList'
import SectionSkillAndTimeline from './SectionSkillAndTimeline'
import { getData } from '../data/getData'

export async function generateMetadata({ params: { locale } }) {
	const t = await getTranslations({ locale, namespace: 'HomePage.meta' })

	return {
		icons: {
			icon: "/img/f8.jpg",
			shortcut: "/img/f8.jpg"
		},
		title: t('title'),
		description: t('description'),
		openGraph: {
			title: t('og.title'),
			description: t('og.description'),
			images: [t('og.image')],
			locale: t('og.locale')
		},
	}
}

export default async function Home() {
	const locale = await getLocale()
	const data = await getData(locale)
	const t = await getTranslations('HomePage')

	return (
		<div className="px-4 bg-background min-h-screen !text-foreground">
			<AppNavBar />
			<div className="container mx-auto">
				<Card
					as={'section'}
					fullWidth={true}
					shadow="lg"
					className="mt-5"
				>
					<CardHeader className="justify-center prose max-w-none">
						<Tooltip color="success" content={t('title.tooltip')}>
							<h2 className="text-3xl !text-foreground font-medium">
								{t('title.content')}
							</h2>
						</Tooltip>
					</CardHeader>

					<CardBody>
						<div className="lg:grid lg:grid-cols-4 gap-3 prose-base max-w-none prose-h4:text-2xl prose-ul:list-none prose-a:no-underline prose-a:font-bold prose-success">
							<div>
								<SectionSkillAndTimeline
									timelines={data.timelines}
									skills={data.skills}
								/>
							</div>
							<div className="col-span-3 flex flex-col gap-3">
								<div className='lg:order-1 order-2'>
									<SectionContact contacts={data.contacts} />
								</div>
								<div className='order-1'>
									<SectionProjectList
										projects={data.projects}
									/>
								</div>
							</div>
						</div>
					</CardBody>
				</Card>
			</div>
		</div>
	)
}
