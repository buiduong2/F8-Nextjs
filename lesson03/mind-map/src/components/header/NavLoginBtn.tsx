import React from 'react'
import AppButton from '../ui/AppButton'

export default function NavLoginBtn({
	className = ''
}: {
	className?: string
}) {
	return (
		<li>
			<AppButton
				as={'a'}
				href="/api/auth/login"
				variant={'text'}
				fullWidth
				className={'cursor-pointer ' + className}
			>
				Đăng nhập
			</AppButton>
		</li>
	)
}
