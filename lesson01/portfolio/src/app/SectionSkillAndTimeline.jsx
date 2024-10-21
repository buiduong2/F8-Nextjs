import { Card, CardBody, CardHeader } from '@nextui-org/card'
import { Image } from '@nextui-org/image'
import React from 'react'

export default function SectionSkillAndTimeline() {
	return (
		<Card shadow='none'>
			<CardHeader className="flex-col">
				<Image
					isBlurred
					isZoomed
					width={280}
					height={280}
					src="/img/f8.jpg"
					alt="My Avatar"
					className="mb-0"
				/>
				<p>A Developer</p>
			</CardHeader>
			<CardBody>
				<div>
					<h4 className="text-foreground">Các kĩ năng của tôi: </h4>
					<ul>
						<li>
							<b>Front-End: </b> Javscript, Reactjs, NextJs,
							Redux, VueJs CSS, HTML
						</li>
						<li>
							<b>Back-End: </b> Java, SpringBoot, SQL, (Đang học
							Node, Express)
						</li>
						<li>
							<b>Khác: </b> Git, CTDL&GT
						</li>
					</ul>
				</div>
				<div>
					<h4 className="text-foreground">Lịch sử: </h4>
					<ul>
						<li>
							<b>2015-2020: </b> Học Đại Học Xây Dựng Hà Nội
						</li>
						<li>
							<b>2021-2022: </b> Học lập trình Java web
						</li>
						<li>
							<b>2022-2024: </b> Thực hiện nghĩa vụ quân sự
						</li>
						<li>
							<b>2024-đến nay: </b> Học lập trình tại F8
						</li>
					</ul>
				</div>
			</CardBody>
		</Card>
	)
}
