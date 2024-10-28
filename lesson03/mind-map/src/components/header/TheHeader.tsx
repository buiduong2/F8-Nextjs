import Link from 'next/link'
import NavLinkItem from './NavLinkItem'
import NavLoginBtn from './NavLoginBtn'
import NavRegisterBtn from './NavRegisterBtn'
import AppButton from '../ui/AppButton'

export default function TheHeader() {
	const isAuthenticated = true

	return (
		<header className="p-4">
			<div className="container mx-auto">
				<nav className="flex justify-between items-center">
					<h2 className="font-bold text-xl text-indigo-600">
						<Link href={'/'}>Mindmap Flow</Link>
					</h2>
					<ul className="flex gap-4">
						<NavLinkItem href={'/'}>Trang chủ</NavLinkItem>
						<NavLinkItem href={'/about'}>Giới thiệu</NavLinkItem>
						<NavLinkItem href={'/features'}>Tính năng</NavLinkItem>
						<NavLinkItem href={'/price'}>Bảng giá</NavLinkItem>
						<NavLinkItem href={'/contact'}>Liên hệ</NavLinkItem>

						{isAuthenticated ? (
							<>
								<li>
									<AppButton as="button" variant="text">
										Hi, Duong Bui
									</AppButton>
								</li>
								<li>
									<AppButton
										as={Link}
										href="/my-mindmap"
										variant="text"
									>
										MindMap
									</AppButton>
								</li>

								<li>
									<AppButton
										as={Link}
										href="/my-mindmap"
										variant="outlined"
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
			</div>
		</header>
	)
}
