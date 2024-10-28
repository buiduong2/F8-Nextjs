import { HTMLAttributes, useId } from 'react'

interface Props extends HTMLAttributes<HTMLTextAreaElement> {
	label: string
}

export default function MindMapShareTextarea(props: Props) {
	const id = useId()
	const { label, ...rest } = props

	return (
		<fieldset className="group mb-2">
			<label
				className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400"
				htmlFor={id}
			>
				{label}
			</label>

			<textarea
				id={id}
				className="peer  w-full rounded-md bg-gray-50 px-4 drop-shadow-sm transition-colors duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 outline-none"
				rows={5}
				{...rest}
			/>
		</fieldset>
	)
}
