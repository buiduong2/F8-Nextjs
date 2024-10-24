/* eslint-disable @next/next/no-img-element */

import IconGithub from '@/app/_components/IconGithub'
import IconGoogle from '@/app/_components/IconGoogle'

export default function page() {
	return (
		<div className="w-full h-full bg-white p-5 rounded-md">
			<div className="flex gap-5">
				<div className="size-20 rounded overflow-hidden">
					<img
						src={
							'https://cdn-icons-png.flaticon.com/512/3607/3607444.png'
						}
						width={80}
						height={80}
						alt="Bui Duc Duong Avatar"
					/>
				</div>
				<div className="prose">
					<h2 className="my-0">Bui Duc Duong</h2>
					<p className="text-gray-500">buiducduong1@gmail.com</p>
				</div>
			</div>

			<hr className="my-5" />

			<div className="prose max-w-none">
				<h3 className="text-lg font-semibold">Tài khoản xã hội </h3>

				<table className="w-full ">
					<tbody>
						<tr>
							<td className="flex gap-5">
								<IconGithub className="size-6" /> Github
							</td>
							<td><span className='text-gray-400'>No Info</span></td>
							<td className="text-blue-500 hover:text-blue-300 cursor-pointer transition-colors">
								Connect
							</td>
						</tr>
						<tr>
							<td className="flex gap-5">
								<IconGoogle className="size-6" /> Google
							</td>
							<td>Buiducduong1@gmail.com</td>
							<td className="text-blue-500 hover:text-blue-300 cursor-pointer transition-colors">
								Connected
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	)
}
