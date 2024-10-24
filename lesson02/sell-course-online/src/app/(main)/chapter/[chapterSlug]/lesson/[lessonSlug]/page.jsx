import { getChapterAndLessonBySlug } from '@/app/_data/courseData'
import { notFound } from 'next/navigation'
import React from 'react'

export default async function page({ params }) {
	const chapterSlug = params.chapterSlug
	const lessonSlug = params.lessonSlug
	const { lesson, chapter } = getChapterAndLessonBySlug(
		chapterSlug,
		lessonSlug
	)
	if (!lesson || !chapter) {
		return notFound()
	}

	return (
		<div className="p-5">
			<h2>{chapter.title}</h2>
			<h3>{lesson.title}</h3>
			<p>{lesson.desc}</p>
			<iframe
				className="w-full aspect-video"
				src={`https://www.youtube.com/embed/${lesson.videoId}?si=FZvWdekpsg9T1Imr`}
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerPolicy="strict-origin-when-cross-origin"
				allowFullScreen
			></iframe>
		</div>
	)
}
