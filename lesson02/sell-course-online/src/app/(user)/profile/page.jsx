/* eslint-disable @next/next/no-img-element */

import IconCrown from '@/app/_components/IconCrown'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import SocialList from './SocialList'

export default async function page() {
	const session = await getServerSession(authOptions)

	return (
		<div className="w-full h-full bg-white p-5 rounded-md">
			<div className="flex gap-5">
				<div className="size-20 rounded overflow-hidden">
					<img
						src={session.user.image}
						width={80}
						height={80}
						alt={'Avatar'}
					/>
				</div>
				<div className="prose">
					<h2 className="my-0 ">
						{session.user.name}
						{session.user.role === 'vip' && (
							<IconCrown className="ml-2 size-4 fill-yellow-400 inline-block" />
						)}
					</h2>
					<p className="text-gray-500">{session.user.email}</p>
				</div>
			</div>

			<hr className="my-5" />

			<SocialList  />
		</div>
	)
}
