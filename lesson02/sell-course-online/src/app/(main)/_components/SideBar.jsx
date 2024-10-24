import React from 'react'
import SideBarLink from '@/app/(main)/_components/SideBarLink'

export default function SideBar({ chapters }) {
	return (
		<div className="prose prose-ul:list-none prose-a:no-underline prose-a:font-normal">
			<h2>Animes</h2>
			{chapters.map((chapter, index) => (
				<div key={chapter.id}>
					<h3>{chapter.title}</h3>
					<ul className="list-none">
						{chapter.lessons.map((lesson, index) => (
							<li key={lesson.id}>
								<SideBarLink href={lesson.href}>
									{index + 1} {lesson.title}
								</SideBarLink>
							</li>
						))}
					</ul>
				</div>
			))}
		</div>
	)
}
