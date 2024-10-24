import Link from 'next/link'
import React from 'react'

export default function NavBarLink({ children, ...rest }) {
	return (
		<Link
			className="rounded-sm text-xl py-5 px-3 inline-block hover:bg-slate-300 hover:text-black transition-colors"
			{...rest}
		>
			{children}
		</Link>
	)
}
