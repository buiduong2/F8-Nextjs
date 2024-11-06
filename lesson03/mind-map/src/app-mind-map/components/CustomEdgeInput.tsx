import { useReactFlow } from '@xyflow/react'
import {
	ChangeEventHandler,
	FocusEvent,
	HTMLAttributes,
	useCallback,
	useEffect,
	useRef,
	useState
} from 'react'

interface Props extends HTMLAttributes<HTMLInputElement> {
	labelX: number
	labelY: number
	label: string
	selected: boolean
	id: string
}

export default function CustomEdgeInput(props: Props) {
	const { labelX, labelY, label, selected, id } = props
	const { updateEdgeData } = useReactFlow()

	const [value, setValue] = useState<string>(label)

	const inputRef = useRef<HTMLInputElement | null>(null)

	const handleOnChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
		e => {
			setValue(e.target.value)
			const input = e.target
			input.style.width = input.value.length + 2 + 'ch'
		},
		[]
	)

	const handleOnBlur = useCallback((e: FocusEvent<HTMLInputElement>) => {
		updateEdgeData(id, {
			label: e.target.value
		})
	}, [])

	useEffect(() => {
		if (!inputRef.current) return
		inputRef.current.style.width = inputRef.current.value.length + 2 + 'ch'
	}, [])
	return (
		<input
			type="text"
			onChange={handleOnChange}
			onBlur={handleOnBlur}
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
