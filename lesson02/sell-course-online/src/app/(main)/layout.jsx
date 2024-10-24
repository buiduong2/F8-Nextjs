import React from 'react'
import SideBar from './_components/SideBar'
import { getChapters } from '../_data/courseData'
export default async function OtherLayout({ children }) {
	const chapters = await getChapters()

	return (
		<div className="container px-3 mt-5 mb-20 mx-auto">
			<div className="prose prose-headings:font-medium max-w-none">
				<h1>Watch Anime Online</h1>
				<div className="flex gap-3">
					<div className="w-1/3">
						<div className="bg-white rounded-md  shadow-lg h-full p-5">
							<SideBar chapters={chapters} />
						</div>
					</div>
					<div className="w-2/3">
						<div className="bg-white rounded-md shadow-lg h-full p-5">
							{children}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
