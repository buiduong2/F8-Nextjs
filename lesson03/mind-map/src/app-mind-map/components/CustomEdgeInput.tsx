import {
	ChangeEventHandler,
	HTMLAttributes,
	useEffect,
	useMemo,
	useRef,
	useState
} from 'react'

interface Props extends HTMLAttributes<HTMLInputElement> {
	labelX: number
	labelY: number
	label: string
	selected: boolean
}

export default function CustomEdgeInput(props: Props) {
	const { labelX, labelY, label, selected } = props

	const [value, setValue] = useState<string>(label)

	const inputRef = useRef<HTMLInputElement | null>(null)

	const handleOnChange = useMemo<ChangeEventHandler<HTMLInputElement>>(
		() => e => {
			setValue(e.target.value)
			const input = e.target
			input.style.width = input.value.length + 2 + 'ch'
		},
		[]
	)

	useEffect(() => {
		if (!inputRef.current) return
		inputRef.current.style.width = inputRef.current.value.length + 2 + 'ch'
	}, [])
	return (
		<input
			type="text"
			onChange={handleOnChange}
			ref={inputRef}
			value={value}
			className={`outline-none focus:ring-1 focus:ring-blue w-auto text-center py-2 max-w-lg 
				${value.length !== 0 ? 'bg-white' : 'bg-transparent'} 
				${selected ? 'ring-1' : ''}`}
			style={{
				position: 'absolute',
				transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
				pointerEvents: 'all'
			}}
		/>
	)
}
