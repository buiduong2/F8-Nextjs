## Custom Node

- HÌnh dạng: Square, Rounded Square, Circle , Triangle Up, Octagon

## Edge

interface Props {
	shape: 'square' | 'RoundedSquare' | 'Circle' | 'Diamond'
	bgColor: Color
	text: {
		color: Color
		// style: 'bold' | 'italic' | 'underlined'
		// align: 'center' | 'justify'
		// leading: number
	}
	border: {
		width: 1 | 2 | 3
		radius: number
		style: 'solid' | 'dashed' | 'dotted' | 'none'
	}
}