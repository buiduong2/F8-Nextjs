import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem
} from '@nextui-org/navbar'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faFacebook,
	faGithub,
	faGoogle
} from '@fortawesome/free-brands-svg-icons'

import { Button } from '@nextui-org/button'
import AppThemeSwitcherBtn from './AppThemeSwitcherBtn'

export default function AppNavBar({}) {
	return (
		<Navbar
			maxWidth="full"
			classNames={{
				wrapper: 'px-0 container mx-auto',
				base: 'text-foreground'
			}}
		>
			<NavbarBrand className="">
				<Image
					src="/img/f8.jpg"
					width={50}
					height={50}
					alt="Picture of the author"
					priority={true}
					className="mr-4"
				/>
				<p className="font-bold">Bùi Đức Dương</p>
			</NavbarBrand>

			<NavbarContent className=" sm:flex gap-1" justify="end">
				<NavbarItem>
					<Link href="mailto:buiducduong1@gmail.com">
						<FontAwesomeIcon icon={faGoogle} className="size-6" />
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link href="https://www.facebook.com/profile.php?id=100010036307790">
						<FontAwesomeIcon icon={faFacebook} className="size-6" />
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link href="https://github.com/buiduong2">
						<FontAwesomeIcon icon={faGithub} className="size-6" />
					</Link>
				</NavbarItem>
				<NavbarItem className="ml-3">
					<AppThemeSwitcherBtn />
				</NavbarItem>
				<NavbarItem>
					<Button variant="bordered" isIconOnly>
						vi
					</Button>
				</NavbarItem>
			</NavbarContent>
		</Navbar>
	)
}
