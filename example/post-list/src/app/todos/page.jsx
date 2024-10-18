import React from 'react'
import TodoList from './TodoList'

export default async function TodoPage() {
	const response = await fetch('http://localhost:3000/api/todos')
	const data = await response.json()
	return (
		<div>
			<h1>Todo Page</h1>
			<TodoList todos={data} />
		</div>
	)
}
