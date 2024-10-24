import Link from 'next/link'
import React from 'react'
import NavBarLink from '@/app/_components/NavBarLink'
import NavBarAuthItem from './NavBarAuthItem'

export default function NavBar() {

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
						<NavBarAuthItem />
					</div>
				</div>
			</div>
		</header>
	)
}
