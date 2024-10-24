import { getServerSession } from 'next-auth'
import Link from 'next/link'
import { authOptions } from './api/auth/[...nextauth]/route'

export default async function Home({ searchParams }) {
	const session = await getServerSession(authOptions)
	return (
		<div className="prose max-w-none flex flex-col items-center justify-center h-96">
			{searchParams?.error === 'account-linked' && (
				<p className="lead text-red-500">Tài khoản đã có người sử dụng</p>
			)}
			<h2>
				Chào mừng {session ? session.user.name : 'Bạn'} đến với web học
				tập
			</h2>
			<p className="lead">
				Vào Trang học tập
				<Link href="/chapter" className="ml-2 underline-offset-2">
					tại đây
				</Link>
			</p>
		</div>
	)
}
