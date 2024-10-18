import { revalidatePath } from 'next/cache'

export function GET() {
	return fetch('http://localhost:3001/todos')
}

export async function POST(request) {
	const body = await request.text()
	const response = fetch('http://localhost:3001/todos', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: body
	})

	revalidatePath('/todos')

	return response
}
