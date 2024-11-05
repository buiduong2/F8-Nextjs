import Image from 'next/image'
import React from 'react'
import AboutHeading from './AboutHeading'
import AboutParaghpah from './Aboutparagraph'
import { Metadata } from 'next'
import { meta } from '@/constants'

export const metadata: Metadata = {
	...meta,
	title: 'Giới thiệu - ' + meta.title
}

export default function PageAbout() {
	const sections = {
		us: {
			title: 'About Us',
			description:
				'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from',
			img: {
				alt: 'our team image',
				height: 500,
				width: 880,
				src: '/imgs/about-main.png'
			}
		},
		story: {
			title: 'Our Story',
			description:
				'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from',
			imgs: [
				{
					alt: 'Alexa',
					height: 160,
					width: 184,
					src: '/imgs/about-person-1.png'
				},

				{
					alt: 'Olivia',
					height: 160,
					width: 184,
					src: '/imgs/about-person-2.png'
				},

				{
					alt: 'Liam',
					height: 160,
					width: 184,
					src: '/imgs/about-person-3.png'
				},

				{
					alt: 'Elijah',
					height: 160,
					width: 184,
					src: '/imgs/about-person-4.png'
				}
			]
		}
	}
	return (
		<div>
			<div className="container mx-auto py-16 px-4">
				<div className="flex flex-col gap-20">
					<section>
						<div className="grid grid-cols-12 gap-8">
							<div className="w-10/12 col-span-full mx-auto text-center lg:col-span-5 lg:text-start lg:w-full">
								<div className="h-full flex flex-col justify-center">
									<AboutHeading>
										{sections.us.title}
									</AboutHeading>
									<AboutParaghpah>
										{sections.us.description}
									</AboutParaghpah>
								</div>
							</div>
							<div className="col-span-full lg:col-span-7">
								<Image
									{...sections.us.img}
									alt={sections.us.img.alt}
									priority={true}
									className="w-full"
								/>
							</div>
						</div>
					</section>
					<section>
						<div className="grid grid-cols-12 gap-8  items-center">
							<div className="w-10/12 col-span-full mx-auto text-center lg:col-span-5 lg:text-start lg:w-full">
								<div className="h-full flex flex-col justify-center">
									<AboutHeading>
										{sections.story.title}
									</AboutHeading>
									<AboutParaghpah>
										{sections.story.description}
									</AboutParaghpah>
								</div>
							</div>
							<div className="col-span-full lg:col-span-7">
								<div>
									<ul className="flex gap-4 shadow-lg rounded-md">
										{sections.story.imgs.map(
											(img, index) => (
												<li
													key={index}
													className="pb-6 p-4"
												>
													<figure>
														<Image
															{...img}
															alt={img.alt}
														/>
														<figcaption className="font-medium text-xl leading-5 text-gray-800 mt-4 text-center">
															{img.alt}
														</figcaption>
													</figure>
												</li>
											)
										)}
									</ul>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	)
}
