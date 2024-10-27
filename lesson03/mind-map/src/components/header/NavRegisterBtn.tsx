import React from 'react'
import AppButton from '../ui/AppButton'

export default function NavRegisterBtn() {
	return (
		<li>
			<AppButton as={'a'} variant={'outlined'} className="cursor-pointer">
				Đăng kí
			</AppButton>
		</li>
	)
}
