import { getChapterAndLessonBySlug } from '@/app/_data/courseData'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import { notFound } from 'next/navigation'

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

	const session = await getServerSession(authOptions)
	const { accessLevel } = lesson
	const userAccessLevel = !session ? 0 : session.user.role === 'vip' ? 2 : 1
	let privateContent

	if (accessLevel <= userAccessLevel) {
		privateContent = (
			<iframe
				className="w-full aspect-video"
				src={`https://www.youtube.com/embed/${lesson.videoId}?si=FZvWdekpsg9T1Imr`}
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerPolicy="strict-origin-when-cross-origin"
				allowFullScreen
			></iframe>
		)
	} else if (userAccessLevel === 0 || accessLevel === 1) {
		privateContent = (
			<p className="text-xl mt-10 italic">
				Nội dung đã bị ẩn{' '}
				<Link
					className="text-blue-500"
					href={{
						pathname: '/login',
						query: { callbackUrl: lesson.href }
					}}
				>
					Đăng nhập để xem
				</Link>
			</p>
		)
	} else if (accessLevel === 2) {
		privateContent = (
			<p className="text-xl mt-10 italic">
				{' '}
				Nội dung đã bị ẩn{' '}
				<Link className="text-blue-500" href={'/subscribe'}>
					Hãy nạp tiền để xem{' '}
				</Link>
			</p>
		)
	}
	return (
		<div className="p-5">
			<h2>{chapter.title}</h2>
			<h3>{lesson.title}</h3>
			<p>{lesson.desc}</p>
			{privateContent}
		</div>
	)
}
