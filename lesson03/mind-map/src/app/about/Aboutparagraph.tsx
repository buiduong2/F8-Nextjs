import React from 'react'

interface Props extends React.HTMLAttributes<HTMLHeadElement> {
	children: React.ReactNode
}

export default function Aboutparagraph({
	children,
	className = '',
	...rest
}: Props) {
	return (
		<h2
			{...rest}
			className={'leading-6 text-gray-600 text-base ' + className}
		>
			{children}
		</h2>
	)
}
