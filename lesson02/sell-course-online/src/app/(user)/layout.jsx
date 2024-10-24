import Link from 'next/link'
import React from 'react'

export default function ProfileLayout({ children }) {
	return (
		<div className="container mx-auto p-3 mt-5">
			<div className="flex gap-5">
				<div className="w-1/4">
					<aside className="w-full bg-slate-100 rounded-md">
						<ul>
							<li>
								<Link
									className="w-full px-5 py-3 inline-block hover:bg-slate-500 hover:text-slate-100"
									href="/profile"
								>
									Hồ Sơ
								</Link>
							</li>
							<li>
								<Link
									className="w-full px-5 py-3 inline-block hover:bg-slate-500 hover:text-slate-100"
									href="/subscribe"
								>
									Nạp tiền
								</Link>
							</li>
						</ul>
					</aside>
				</div>
				<div className="w-3/4">{children}</div>
			</div>
		</div>
	)
}
