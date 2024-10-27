import Link from 'next/link'
import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaGooglePlusG } from 'react-icons/fa'
import AppButton from '../ui/AppButton'

const footerLinkLists = [
	{
		header: 'Features',
		items: [
			{ title: 'Cool stuff', href: '#' },
			{ title: 'Random feature', href: '#' },
			{ title: 'Team feature', href: '#' },
			{ title: 'Stuff for developers', href: '#' },
			{ title: 'Another one', href: '#' },
			{ title: 'Last time', href: '#' }
		]
	},
	{
		header: 'Resources',
		items: [
			{ title: 'Resource', href: '#' },
			{ title: 'Resource name', href: '#' },
			{ title: 'Another resource', href: '#' },
			{ title: 'Final resource', href: '#' }
		]
	},
	{
		header: 'About',
		items: [
			{ title: 'Team', href: '#' },
			{ title: 'Locations', href: '#' },
			{ title: 'Privacy', href: '#' },
			{ title: 'Terms', href: '#' }
		]
	},
	{
		header: 'Help',
		items: [
			{ title: 'Support', href: '#' },
			{ title: 'Help Center', href: '#' },
			{ title: 'Contact Us', href: '#' }
		]
	}
]
export default function TheFooter() {
	return (
		<footer className="bg-gray-100 pt-16 pb-8">
			<article className="container mx-auto">
				<div className="flex">
					{footerLinkLists.map((list, index) => (
						<div key={index} className="w-1/5">
							<article>
								<h5 className="text-xl font-bold mb-6">
									{list.header}
								</h5>
								<ul className="flex flex-col gap-2">
									{list.items.map((item, index) => (
										<li key={index}>
											<Link
												href={item.href}
												className="border-b border-transparent hover:border-purple-800 hover:text-purple-800"
											>
												{item.title}
											</Link>
										</li>
									))}
								</ul>
							</article>
						</div>
					))}

					<div className="w-1/5">
						<article>
							<h3 className="text-xl font-bold mb-6">
								Stay connected
							</h3>
							<ul className="flex gap-2">
								<li>
									<Link href={'/'}>
										<FaFacebook className="size-9 p-1.5  rounded-full border-2 hover:bg-blue-600 hover:text-white" />
									</Link>
								</li>
								<li>
									<Link href={'/'}>
										<FaTwitter className="size-9 p-1.5  rounded-full border-2 hover:bg-blue-400 hover:text-white" />
									</Link>
								</li>
								<li>
									<Link href={'/'}>
										<FaGooglePlusG className="size-9 p-1.5  rounded-full border-2 hover:bg-red-600 hover:text-white" />
									</Link>
								</li>
							</ul>
						</article>
					</div>
				</div>
			</article>

			<hr className="bg-slate-300  my-8 mx-4" />

			<article className="container mx-auto">
				<div className="flex">
					<div className="w-1/4">
						<h5 className="font-bold mb-2">PWR</h5>
					</div>
					<div className="w-1/4">
						<h5 className="font-bold mb-2">Address</h5>
						<address className="not-italic mb-4 text-sm">
							123 6th St. <br /> Melbourne, FL 32904
						</address>
					</div>
					<div className="w-1/4">
						<h5 className="font-bold mb-2">Free Resources </h5>
						<p className="mb-4 text-sm">
							Use our HTML blocks for <strong>FREE</strong>
							<br />
							<em>All are MIT License</em>
						</p>
					</div>
					<div className="w-1/4">
						<div className="flex justify-center">
							<AppButton color="purple">Get Started</AppButton>
						</div>
					</div>
				</div>
			</article>
		</footer>
	)
}
