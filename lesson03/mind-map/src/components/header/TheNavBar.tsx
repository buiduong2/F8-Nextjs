'use client'
import Link from 'next/link'
import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import AppButton from '../ui/AppButton'
import NavLinkItem from './NavLinkItem'
import NavLoginBtn from './NavLoginBtn'
import NavRegisterBtn from './NavRegisterBtn'

interface Props {
	isAuthenticated: boolean
	username?: string
}

export default function TheNavBar(props: Props) {
	const { isAuthenticated, username } = props
	const [isOpen, setIsOpen] = useState(false)

	return (
		<nav className="flex items-center justify-between">
			<h2 className="font-bold text-xl text-indigo-600">
				<Link href={'/'}>Mindmap Flow</Link>
			</h2>
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="flex items-center justify-center absolute right-0 p-4 hover:bg-slate-100 transition-colors lg:hidden"
			>
				<GiHamburgerMenu className="size-6" />
			</button>

			<ul
				onClick={() => setIsOpen(false)}
				className={`flex gap-4 absolute top-full flex-col bg-white left-0 right-0 p-4 rounded
					lg:static lg:bg-transparent lg:rounded-none lg:flex lg:flex-row lg:p-0 
					${isOpen ? '' : 'hidden'} `}
			>
				<NavLinkItem href={'/'}>Trang chủ</NavLinkItem>
				<NavLinkItem href={'/about'}>Giới thiệu</NavLinkItem>
				<NavLinkItem href={'/features'}>Tính năng</NavLinkItem>
				<NavLinkItem href={'/price'}>Bảng giá</NavLinkItem>
				<NavLinkItem href={'/contact'}>Liên hệ</NavLinkItem>

				{isAuthenticated ? (
					<>
						<li>
							<AppButton
								as="button"
								variant="text"
								fullWidth
								className="cursor-text"
							>
								Hi, {username}
							</AppButton>
						</li>
						<li>
							<AppButton
								as={Link}
								href="/my-mindmap"
								variant="text"
								fullWidth
							>
								MindMap
							</AppButton>
						</li>

						<li>
							<AppButton
								as={'a'}
								href="/api/auth/logout"
								variant="outlined"
								fullWidth
							>
								Đăng xuất
							</AppButton>
						</li>
					</>
				) : (
					<>
						<NavLoginBtn />
						<NavRegisterBtn />
					</>
				)}
			</ul>
		</nav>
	)
}
