import React from 'react'
import PriceCardItem, { Props as CardProp } from './PriceCardItem'
import { Metadata } from 'next'
import { meta } from '@/constants'

export const metadata: Metadata = {
	...meta,
	title: 'Bảng giá - ' + meta.title
}

const plans: CardProp[] = [
	{
		title: 'Basic',
		price: '10',
		descriptions: [
			<>
				Get started with{' '}
				<strong className="text-black">messaging</strong>
			</>,
			<>
				Flexible team <strong className="text-black">meetings</strong>
			</>,
			<>
				<strong className="text-black">5 TB</strong> cloud storage
			</>
		],
		action: '/',
		imageSrc: '/imgs/price-img-1.jpg',
		isPriority: false
	},
	{
		title: 'Startup',
		price: '24',
		descriptions: [
			<>
				All features in <strong className="text-white">Basic</strong>
			</>,
			<>
				Flexible <strong className="text-white">call scheduling</strong>
			</>,
			<>
				<strong className="text-white">15 TB</strong> cloud storage
			</>
		],
		action: '/',
		imageSrc: '/imgs/price-img-2.jpg',
		isPriority: true
	},
	{
		title: 'Enterprise',
		price: '35',
		descriptions: [
			<>
				All features in <strong className="text-black">Startup</strong>
			</>,
			<>
				Growth <strong className="text-black">oriented</strong>
			</>,
			<>
				<strong className="text-black">Unlimited</strong> cloud storage
			</>
		],
		action: '/',
		imageSrc: '/imgs/price-img-3.jpg',
		isPriority: false
	}
]

export default function PagePrice() {
	return (
		<div className="container mx-auto pt-10 pb-36 px-4">
			<div className="max-w-96 w-full mx-auto text-center mb-14">
				<h1 className="text-5xl font-semibold mb-6">
					<span className="text-indigo-600">Flexible</span> Plans
				</h1>
				<p className="text-xl text-gray-500 font-medium">
					Choose a plan that works best for you and your team.
				</p>
			</div>

			<div className="flex flex-wrap justify-center md:flex-wrap-reverse lg:flex-wrap">
				{plans.map((plan, index) => (
					<div
						className={`w-full md:w-1/2 lg:w-1/3 max-w-96 
							${!plan.isPriority ? 'py-8 order-3 md:order-2 lg:order-1' : 'order-2 md:order-3 lg:order-1'}`}
						key={index}
					>
						<PriceCardItem
							className={
								index === 0
									? 'rounded-r-none'
									: index === 2
									? 'rounded-l-none'
									: ''
							}
							isPriority={plan.isPriority}
							title={plan.title}
							imageSrc={plan.imageSrc}
							price={plan.price}
							descriptions={plan.descriptions}
							action={plan.action}
						/>
					</div>
				))}
			</div>
		</div>
	)
}
