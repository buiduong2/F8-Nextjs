import { useState } from 'react'

export default function TodoForm({ onSubmit }) {
	const [title, setTitle] = useState('')
	function handleOnSubmit(e) {
		e.preventDefault()

		onSubmit(title)
	}
	return (
		<form onSubmit={handleOnSubmit}>
			<input
				type="text"
				name="title"
				onChange={e => setTitle(e.target.value)}
			/>
			<button>Submit</button>
		</form>
	)
}
