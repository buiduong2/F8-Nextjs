import React from 'react'

export interface Props {
	icon: React.ReactNode
	title: string
	description: string
}

export default function FeatureCardItem(props: Props) {
	const { icon, title, description } = props
	return (
		<article className="p-6 flex flex-col items-center text-center border-2 border-gray-300 rounded h-full">
			<div className="p-4 size-16 text-indigo-600 text-xl">{icon}</div>
			<h5 className="text-xl font-semibold mb-4">{title}</h5>
			<p className="text-gray-600">{description}</p>
		</article>
	)
}
