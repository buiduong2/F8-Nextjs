import React from 'react'
import ContactInput from './ContactInput'
import ContactTextarea from './ContactTextarea'
import AppButton from '@/components/ui/AppButton'
import { Metadata } from 'next'
import { meta } from '@/constants'

export const metadata: Metadata = {
	...meta,
	title: 'Bảng giá - ' + meta.title
}
export default function PageContact() {
	return (
		<div className="py-20 px-4">
			<div className="container mx-auto ">
				<form
					method="POST"
					className="max-w-lg mx-auto w-full shadow-xl border border-gray-200 p-5"
				>
					<h1 className="mb-5 text-indigo-600 text-3xl text-center">
						Contact Us
					</h1>
					<div className="grid grid-cols-2 gap-5">
						<ContactInput
							type="text"
							name="firstName"
							placeholder="First Name"
							className="col-span-full md:col-span-1"
						/>
						<ContactInput
							type="text"
							name="lastName"
							placeholder="Last Name"
							className="col-span-full md:col-span-1"
						/>

						<ContactInput
							type="email"
							name="email"
							placeholder="Email"
							className="col-span-2"
						/>
						<ContactInput
							type="tel"
							name="phone"
							placeholder="Phone"
							className="col-span-2"
						/>
						<ContactTextarea
							placeholder="Write your message..."
							name="message"
							className="col-span-2"
						/>

						<AppButton
							className="col-span-2 font-bold"
							color="purple"
						>
							Send Message
						</AppButton>
					</div>
				</form>
			</div>
		</div>
	)
}
