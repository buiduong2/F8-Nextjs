'use client'
import IconGithub from '@/app/_components/IconGithub'
import IconGoogle from '@/app/_components/IconGoogle'
import React from 'react'

export default function page() {
	function handleOnClickSignWithGoogle(e) {
		e.preventDefault()

		const res = fetch('/api/login', {
			method: 'POST'
		})
	}
	return (
		<div className="min-h-full w-full bg-black block">
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-80 bg-white p-10 rounded-lg shadow-md">
				<form
					className="flex h-full w-full justify-center items-center gap-5 flex-col"
					action={'/api/login'}
					method="POST"
				>
					<h1 className="text-2xl font-semibold">Đăng nhập ngay</h1>
					<button
						type="button"
						onClick={handleOnClickSignWithGoogle}
						className="border border-black rounded-md p-3 w-full shadow-lg hover:shadow-xl font-semibold transition-shadow flex items-center justify-center gap-5"
					>
						<IconGoogle className="size-6" /> SIGN IN WITH GOOGLE
					</button>
					<button className="border border-black rounded-md p-3 w-full shadow-lg hover:shadow-xl font-semibold  transition-shadow flex items-center justify-center gap-5">
						<IconGithub className="size-6" /> SIGN IN WITH GITHUB
					</button>
				</form>
			</div>
		</div>
	)
}
