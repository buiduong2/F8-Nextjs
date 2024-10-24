import { cookies } from 'next/headers'
import Link from 'next/link'

export default function Home({req}) {
	console.log(req)
	const user = {
		name: 'Duong'
	}

	return (
		<div className="prose max-w-none flex flex-col items-center justify-center h-96">
			<h2>Chào mừng: {user.name}</h2>
			<p className="lead">
				Vào Trang xem phim
				<Link href="/chapter" className="underline-offset-2">
					tại đây
				</Link>
			</p>
		</div>
	)
}
