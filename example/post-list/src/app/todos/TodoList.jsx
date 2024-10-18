'use client'

import React from 'react'
import { useState } from 'react'
import TodoForm from './TodoForm'

export default function TodoList({ todos: data }) {
	const [todos, setTodos] = useState(data || [])

	async function addTodo(title) {
		const response = await fetch('http://localhost:3000/api/todos', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ title })
		})

		if (response.ok) {
			const newToto = await response.json()
			setTodos(todos => [...todos, newToto])
		}
	}

	return (
		<>
			<div className="mx-10 my-10">
				<ul>
					{todos.map(todo => (
						<li key={todo.id}>{todo.title}</li>
					))}
				</ul>
				<TodoForm onSubmit={addTodo} />
			</div>
		</>
	)
}
