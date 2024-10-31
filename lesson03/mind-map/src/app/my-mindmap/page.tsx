import AppButton from '@/components/ui/AppButton'
import { FaPenToSquare, FaTrash } from 'react-icons/fa6'
import css from './mindmap.module.css'
import Link from 'next/link'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import { touchSession } from '@auth0/nextjs-auth0';
import { Metadata } from 'next'
import { meta } from '@/constants/meta'

export const metadata: Metadata = {
	...meta,
	title: 'Mindmap của tôi - ' + meta.title
}

export default withPageAuthRequired(
	async function PageMyMindmap() {
		await touchSession();
		const mindmaps = [
			{
				id: 1,
				title: 'Hello world',
				createdAt: '26/10/2024 13:05:03',
				description: 'Chưa có mô tả'
			},
			{
				id: 2,
				title: 'MindMap 2',
				createdAt: '26/10/2024 13:05:03',
				description: 'Chưa có mô tả'
			}
		]

		return (
			<div className="container py-20 mx-auto">
				<div className="flex flex-col justify-center items-center mb-16">
					<h2 className="mb-4 text-4xl font-medium">
						Mindmap của tôi{' '}
					</h2>
				</div>
				<div className="rounded overflow-hidden shadow">
					<div className="flex justify-between bg-indigo-400 py-4 px-7 items-center">
						<h3 className="text-2xl text-white">
							Danh sách <strong>Mindmap</strong>
						</h3>
						<div className="flex gap-2">
							<AppButton
								as={Link}
								href={'/my-mindmap/1'}
								className="px-10 bg-white"
								variant="text"
								color="blue"
							>
								Tạo mới
							</AppButton>
							<AppButton
								className="px-10 bg-white"
								variant="text"
								color="red"
							>
								Xóa
							</AppButton>
						</div>
					</div>

					<div className="py-4 px-7">
						<table className={css.table}>
							<thead className="">
								<tr>
									<th className={css.thCheckbox}>
										<input type="checkbox" />
									</th>
									<th className={css.thName}>Tên</th>
									<th className={css.thCreatedAt}>Tạo lúc</th>
									<th className={css.thAction}>Hành động</th>
								</tr>
							</thead>
							<tbody>
								{mindmaps.map(mindmap => (
									<tr key={mindmap.id}>
										<td className={css.tdCheckbox}>
											<input type="checkbox" />
										</td>
										<td className={css.tdName}>
											<h5>{mindmap.title}</h5>
											<p>{mindmap.description}</p>
										</td>
										<td className={css.tdCreatedAt}>
											{mindmap.createdAt}
										</td>
										<td className={css.tdAction}>
											<FaPenToSquare />
											<FaTrash />
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		)
	},
	{ returnTo: '/my-mindmap' }
)
