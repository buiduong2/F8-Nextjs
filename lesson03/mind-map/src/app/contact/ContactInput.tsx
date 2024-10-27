import { InputHTMLAttributes } from 'react'

type Props = InputHTMLAttributes<HTMLInputElement>

export default function ContactInput(props: Props) {
	const { className } = props

	return (
		<input
			{...props}
			className={
				'border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 text-indigo-600 ' +
				className
			}
		/>
	)
}
