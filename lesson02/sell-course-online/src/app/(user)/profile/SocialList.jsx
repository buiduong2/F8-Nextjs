'use client'
import IconGithub from '@/app/_components/IconGithub'
import IconGoogle from '@/app/_components/IconGoogle'
import { signIn } from 'next-auth/react'
import React, { useEffect, useState } from 'react'

export default function SocialList() {
	const [accounts, setAccounts] = useState([])

	useEffect(() => {
		async function getAccounts() {
			const res = await fetch('/api/auth/accounts')
			if (res.ok) {
				const data = await res.json()
				setAccounts({
					github: data.find(d => d.provider === 'github') || null,
					google: data.find(d => d.provider === 'google') || null
				})
			}
		}
		getAccounts()
	}, [])

	const AccountName = provider => {
		if (!accounts[provider]) {
			return (
				<td>
					<span className="text-gray-400">No Info</span>
				</td>
			)
		}
		return <td>{accounts[provider].name}</td>
	}

	const ConnectBtn = provider => {
		if (accounts[provider]) {
			return (
				<td className="text-blue-500 cursor-pointer transition-colors">
					Connected
				</td>
			)
		}

		async function handleOnClick() {
			const res = await signIn(provider, {   redirect: false })
			if(!res.ok) {
				console.log(res.error);
				console.log(res);
			} 
		}

		return (
			<td
				onClick={handleOnClick}
				className="text-blue-500 hover:text-blue-300 hover:underline cursor-pointer transition-colors"
			>
				Connect
			</td>
		)
	}

	return (
		<div className="prose max-w-none">
			<h3 className="text-lg font-semibold">Tài khoản xã hội </h3>

			<table className="w-full ">
				<tbody>
					<tr>
						<td className="flex gap-5">
							<IconGithub className="size-6" /> Github
						</td>
						{AccountName('github')}
						{ConnectBtn('github')}
					</tr>
					<tr>
						<td className="flex gap-5">
							<IconGoogle className="size-6" /> Google
						</td>
						{AccountName('google')}
						{ConnectBtn('google')}
					</tr>
				</tbody>
			</table>
		</div>
	)
}
