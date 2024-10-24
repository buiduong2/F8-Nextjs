import Link from 'next/link'
import React from 'react'
import NavBarLink from '@/app/_components/NavBarLink'

export default function NavBar() {
	const isAuthenticated = false

	return (
		<header className="w-full bg-slate-500 shadow-lg text-slate-100">
			<div className="container mx-auto px-3">
				<div className="flex justify-between">
					<div>
						<nav>
							<ul className="flex">
								<li>
									<NavBarLink href="/">Home</NavBarLink>
								</li>
								<li>
									<NavBarLink href="/chapter">
										Xem Anime
									</NavBarLink>
								</li>
							</ul>
						</nav>
					</div>
					<div>
						<ul className="flex">
							{isAuthenticated ? (
								<>
									<li>
										<NavBarLink href="/profile">
											Bùi Đức Dương
										</NavBarLink>
									</li>
									<li>
										<NavBarLink href="/">
											Đăng Xuất
										</NavBarLink>
									</li>
								</>
							) : (
								<li>
									<NavBarLink href="/login">Đăng nhập</NavBarLink>
								</li>
							)}
						</ul>
					</div>
				</div>
			</div>
		</header>
	)
}
