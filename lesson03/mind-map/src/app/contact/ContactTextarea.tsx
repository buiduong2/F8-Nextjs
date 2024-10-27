import { TextareaHTMLAttributes } from 'react'
type Props = TextareaHTMLAttributes<HTMLTextAreaElement>
export default function ContactTextarea(props: Props) {
	const { className, rows = 5 } = props

	return (
		<textarea
			{...props}
			className={
				'border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 text-indigo-600 ' +
				className
			}
			rows={rows}
		/>
	)
}
