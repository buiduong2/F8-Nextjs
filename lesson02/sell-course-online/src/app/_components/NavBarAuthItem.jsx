'use client'
import { signOut, useSession } from 'next-auth/react'
import NavBarLink from './NavBarLink'

export default function NavBarAuthItem() {
	const { data: session, status } = useSession()

	return (
		<ul className="flex">
			{status === 'authenticated' ? (
				<>
					<li>
						<NavBarLink href="/profile">
							{session.user.name}
						</NavBarLink>
					</li>
					<li>
						<NavBarLink href="#" onClick={() => signOut()}>
							Đăng Xuất
						</NavBarLink>
					</li>
				</>
			) : (
				<>
					<li>
						<NavBarLink href="/login">Đăng nhập</NavBarLink>
					</li>
				</>
			)}
		</ul>
	)
}
