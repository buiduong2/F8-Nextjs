import AppButton from '@/components/ui/AppButton'
import React from 'react'

import FeatureCardItem, { Props } from './FeatureCardItem'
import { FaBolt, FaCode, FaWrench } from 'react-icons/fa6'
import { Metadata } from 'next'
import { meta } from '@/constants'

export const metadata: Metadata = {
	...meta,
	title: 'Tính năng chính - ' + meta.title
}

const featureCards: Props[] = [
	{
		icon: <FaBolt />,
		title: 'Fresh Design',
		description:
			'FWR blocks bring in an air of fresh design with their creative layouts and blocks, which are easily customizable.'
	},
	{
		icon: <FaCode />,
		title: 'Clean Code',
		description:
			'FWR blocks are the cleanest pieces of HTML blocks, which are built with utmost care to quality and usability.'
	},
	{
		icon: <FaWrench />,
		title: 'Perfect Tool',
		description:
			'FWR blocks is a perfect tool for designers, developers and agencies looking to create stunning websites in no time.'
	}
]

export default function PageFeature() {
	return (
		<div className="py-12 px-4">
			<div className="container  mx-auto">
				<div className="flex flex-col justify-center items-center mb-16">
					<h2 className="mb-4 text-4xl font-medium">Features</h2>
					<p className="text-xl text-center mb-8 max-w-4xl w-full sm:w-10/12">
						The main aim of creating FWR blocks is to help
						designers, developers and agencies create websites and
						web apps quickly and easily. Each and every block uses
						minimal custom styling and is based on the utility first
						Tailwind framework.
					</p>
					<div>
						<AppButton
							variant="outlined"
							size="lg"
							className="!border-2 px-12"
						>
							Learn More
						</AppButton>
					</div>
				</div>
				<div>
					<div className="flex flex-wrap -mx-10 gap-y-10 md:justify-center md:-mx-4 xl:-mx-10">
						{featureCards.map((card, index) => ( 
							<div key={index} className='px-10 md:w-1/2 md:px-4 lg:w-1/3 xl:px-10'>
								<FeatureCardItem
									icon={card.icon}
									description={card.description}
									title={card.title}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
