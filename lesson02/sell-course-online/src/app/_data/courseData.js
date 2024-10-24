const data = {
	chapters: [
		{
			id: 1,
			slug: 'sword-art-online',
			title: 'Sword Art Online',
			lessons: [
				{
					id: 1,
					title: 'Kiếm giới',
					slug: 'kiem-gioi',
					videoId: 'V6kJKxvbgZ0',
					desc: 'Kirito gặp DeepBall69, một người chơi khác, ngay khi bắt đầu Sword Art Online. Sau một thời gian luyện tập cùng nhau, cả hai phát hiện họ không thể đăng xuất. Lúc đó, Kayaba Akihiko, người tạo ra trò chơi, xuất hiện và thông báo rằng tất cả người chơi bị mắc kẹt, và nếu họ chết trong game, họ cũng sẽ chết ngoài đời thực'
				},
				{
					id: 2,
					title: 'Đấu sĩ',
					slug: 'dau-si',
					videoId: 'Ye2u1za7Pac',
					desc: 'Trong tập 2, Kirito cùng một nhóm người chơi chiến đấu với boss tầng 1. Đội trưởng Diabel hy sinh, và Kirito hạ gục boss. Sau đó, Kirito bị nghi ngờ vì là Beta Tester, nên tự nhận mình là "Beater" để tránh chia rẽ nhóm.'
				},
				{
					id: 3,
					title: 'Tuần lộc mũi đỏ',
					slug: 'tuan-loc-mui-do',
					videoId: 'dhmGJrX3f48',
					desc: 'Trong tập 3, Kirito gia nhập một tổ đội nhỏ tên là "Hội Mặt Trăng Buổi Tối". Cậu gắn bó với họ nhưng sau đó, cả đội bị phục kích và toàn bộ thành viên đều chết, khiến Kirito cảm thấy tội lỗi và quyết định chiến đấu một mình từ đó'
				}
			]
		},
		{
			id: 2,
			slug: 'bocchi-the-rock',
			title: 'Bocchi, How to win CSGO',
			lessons: [
				{
					id: 20,
					title: 'Bocchi, How to win Pistol round',
					slug: 'bocchi-how-to-win-pistol-round',
					videoId: 'qYnCxRt6Tng',
					desc: 'Một vài đoạn văn mô tả'
				},
				{
					id: 21,
					title: "Bocchi, How to win 'ECO' round",
					slug: 'bocchi-how-to-win-eco-round',
					videoId: 'koJU60H66Q8',
					desc: 'Một vài đoạn văn mô tả'
				},
				{
					id: 22,
					title: "Bocchi, How to win 'Full buy' round",
					slug: 'bocchi-how-to-win-full-buy-round',
					videoId: 'b6wAYwOKgRY',
					desc: 'Một vài đoạn văn mô tả'
				},
				{
					id: 23,
					title: 'Bocchi, How to win with Epic MLG players',
					slug: 'bocchi-how-to-win-with-epic-mlg-players',
					videoId: '53iAl0Cgc1A',
					desc: 'Một vài đoạn văn mô tả'
				},
				{
					id: 24,
					title: "Bocchi, How to win '14th' round",
					slug: 'bocchi-how-to-win-th-round',
					videoId: 'fo3b5_JhT1Q',
					desc: 'Một vài đoạn văn mô tả'
				},
				{
					id: 25,
					title: "Bocchi, Bocchi, How to win 'Half' round",
					slug: 'bocchi-bocchi-how-to-win-half-round',
					videoId: 'SEIzGPGnUxE',
					desc: 'Một vài đoạn văn mô tả'
				}
			]
		}
	]
}

export async function getChapters() {
	return [
		...data.chapters.map(chapter => ({
			...chapter,
			lessons: chapter.lessons.map(lesson => ({
				...lesson,
				href: `/chapter/${chapter.slug}/lesson/${lesson.slug}`
			}))
		}))
	]
}

export function getChapterAndLessonBySlug(chapterSlug, lessonSlug) {
	const chapter = data.chapters.find(chapter => chapter.slug === chapterSlug)
	return {
		chapter: chapter,
		lesson: chapter?.lessons.find(lesson => lesson.slug === lessonSlug)
	}
}
