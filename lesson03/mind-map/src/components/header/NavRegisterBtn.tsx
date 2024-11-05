import React from 'react'
import AppButton from '../ui/AppButton'

export default function NavRegisterBtn({
	className = ''
}: {
	className?: string
}) {
	return (
		<li>
			<AppButton
				as={'a'}
				variant={'outlined'}
				fullWidth
				className={'cursor-pointer ' + className}
			>
				Đăng kí
			</AppButton>
		</li>
	)
}
