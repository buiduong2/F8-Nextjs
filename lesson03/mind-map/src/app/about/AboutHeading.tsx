import React from 'react'

interface Props extends React.HTMLAttributes<HTMLHeadElement> {
	children: React.ReactNode
}

export default function AboutHeading({
	children,
	className = '',
	...rest
}: Props) {
	return (
		<h2
			{...rest}
			className={
				'text-4xl font-bold leading-9 text-gray-800 pb-4 ' + className
			}
		>
			{children}
		</h2>
	)
}
