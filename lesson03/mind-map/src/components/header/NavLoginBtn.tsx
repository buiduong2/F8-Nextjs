import React from 'react'
import AppButton from '../ui/AppButton'

export default function NavLoginBtn() {
	return (
		<li>
			<AppButton
				as={'a'}
				href="/api/auth/login"
				variant={'text'}
				className="cursor-pointer"
			>
				Đăng nhập
			</AppButton>
		</li>
	)
}
