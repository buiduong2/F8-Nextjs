import { InputHTMLAttributes, useId } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	label: string
}

export default function MindMapShareInput(props: Props) {
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

			<input
				type="text"
				id={id}
				className="peer h-10 w-full rounded-md bg-gray-50 px-4 drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 outline-none"
				{...rest}
			/>
		</fieldset>
	)
}
