import React from 'react'

import AppNavBar from './_component/AppNavBar'
import { Card, CardBody, CardHeader } from '@nextui-org/card'
import { Image } from '@nextui-org/image'
import { Link } from '@nextui-org/link'
import SectionSkillAndTimeline from './SectionSkillAndTimeline'
import SectionContact from './SectionContact'
import { Tooltip } from '@nextui-org/tooltip'
import SectionProjectList from './SectionProjectList'

export default function Home() {
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
						<Tooltip
							color="success"
							content="Dù có thế nào tôi vẫn lặng lẽ cố gắng bước tiếp về phía trước, không ngừng tìm tòi nỗ lực cải thiện kĩ năng bản thân"
						>
							<h2 className="text-3xl !text-foreground">
								My Porfolio
							</h2>
						</Tooltip>
					</CardHeader>

					<CardBody>
						<div className="grid grid-cols-4 gap-3 prose-base  max-w-none  prose-h4:text-2xl prose-ul:list-none prose-a:no-underline prose-a:font-bold prose-success">
							<div>
								<SectionSkillAndTimeline />
							</div>
							<div className="col-span-3 flex flex-col gap-3">
								<div>
									<SectionContact />
								</div>
								<div>
									<SectionProjectList />
								</div>
							</div>
						</div>
					</CardBody>
				</Card>
			</div>
		</div>
	)
}
