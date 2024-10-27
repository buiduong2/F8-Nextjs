import AppButton from '@/components/ui/AppButton'
import Image from 'next/image'

const features = [
	{
		title: 'Dễ sử dụng',
		description:
			'FWR blocks bring in an air of fresh design with their creative layouts and blocks, which are easily customizable'
	},
	{
		title: 'Không giới hạn',
		description:
			'FWR blocks are the cleanest pieces of HTML blocks, which are built with utmost care to quality and usability.'
	},
	{
		title: 'Quản lý và chia sẻ',
		description:
			'FWR blocks is a perfect tool for designers, developers and agencies looking to create stunning websites in no time.'
	}
]
export default function HomePage() {
	return (
		<div className="py-12 bg-indigo-100">
			<div className="container mx-auto">
				<div className="flex flex-col items-center mb-12">
					<h1 className="text-4xl font-medium mb-8">
						Học tập hiệu quả với bản đồ tư duy
					</h1>
					<div className="mb-4">
						<AppButton
							as={'button'}
							className="rounded-full"
							size="lg"
						>
							Sử dụng miễn phí
						</AppButton>
					</div>
					<div className="text-center">
						<Image
							src={'/imgs/so-do-tu-duy.webp'}
							width={672}
							height={352}
							alt="Sơ đồ tư duy"
							className="h-auto w-auto"
						/>
					</div>
				</div>

				<div className="flex gap-8">
					{features.map((feat, index) => (
						<div className="w-1/3" key={index}>
							<article className="relative flex flex-col items-center">
								<div className="w-20 border-t-2 border-indigo-200 inline-block mb-3"></div>
								<h2 className="text-xl font-semibold uppercase mb-4">
									{feat.title}
								</h2>
								<p className="text-gray-600 text-center">
									{feat.description}
								</p>
							</article>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
