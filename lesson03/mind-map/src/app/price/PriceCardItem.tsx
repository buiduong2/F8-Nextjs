import AppButton from '@/components/ui/AppButton'
import Image from 'next/image'
import React from 'react'
import { FaArrowRight, FaCheck } from 'react-icons/fa6'

export type Props = {
	title: string
	price: string | number
	descriptions: React.ReactNode[]
	action: string
	imageSrc: string
	isPriority: boolean
	className?: string
}

export default function PriceCardItem(props: Props) {
	const {
		title,
		price,
		descriptions,
		action,
		isPriority,
		className = '',
		imageSrc
	} = props
	return (
		<form
			className={`p-8 rounded-3xl shadow-xl h-full flex flex-col
				${isPriority ? 'bg-gray-900 text-gray-400' : 'text-gray-500'} 
				${className}`}
			action={action}
			method="POST"
		>
			<div className="flex pb-7 mb-7 border-b border-gray-300">
				<div className="rounded-3xl overflow-hidden w-20 h-20 mr-5">
					<Image
						src={imageSrc}
						height={80}
						width={80}
						alt={title + ' image'}
						className="w-auto h-auto"
					/>
				</div>
				<div>
					<h5
						className={`text-2xl font-semibold 
						${isPriority ? 'text-white' : 'text-black'}`}
					>
						{title}
					</h5>
					<p>
						<span className="font-medium  text-xl align-top">
							$
						</span>
						<span
							className={`text-3xl font-bold 
							${isPriority ? 'text-white' : 'text-black'}`}
						>
							{price}
						</span>
						<span className=" font-medium"> / user</span>
					</p>
				</div>
			</div>
			<div className="mb-7 flex-grow">
				<ul className="flex flex-col justify-around gap-2 h-full">
					{descriptions.map((desc, index) => (
						<li key={index} className="text-xl">
							<FaCheck className="mr-3 inline-block" /> {desc}
						</li>
					))}
				</ul>
			</div>
			<div>
				<AppButton
					className="rounded-xl text-xl px-4 py-5 flex items-center justify-center gap-2"
					fullWidth={true}
				>
					Choose Plan <FaArrowRight className="inline-block" />
				</AppButton>
			</div>
		</form>
	)
}
