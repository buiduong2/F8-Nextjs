'use client'
import { signOut } from 'next-auth/react'
import React from 'react'

export default function PromoteButton() {
	async function handleOnClick(e) {
		alert('Chúng tôi sẽ logout bạn để làm mới dữ liệu')
		const res = await fetch('/api/auth/subscribe', { method: 'POST' })
		if (res.ok) {
			signOut()
		}
	}

	return (
		<button
			onClick={handleOnClick}
			className="w-full p-3 rounded bg-blue-500 text-white hover:bg-blue-700 transition-colors"
		>
			Bắt đầu ngay
		</button>
	)
}
