import React from 'react'

export default function PageSubsribe() {
	return (
		<div className="">
			<div className="flex prose w-full max-w-none gap-5">
				<div className="w-1/2">
					<div className="rounded bg-slate-100 p-5">
						<div className="ml-10">
							<h3 className="text-2xl">Miễn phí</h3>
							<h2 className="text-3xl">0 đ</h2>
						</div>
						<ul>
							<li>Truy cập vào thêm một khóa học</li>
							<li>Support không tận tình</li>
						</ul>
						<div>
							<button className="w-full p-3 rounded bg-gray-400 text-white cursor-not-allowed">
								Đang thực thực thi
							</button>
						</div>
					</div>
				</div>

				<div className="w-1/2">
					<div className="rounded bg-slate-100 p-5">
						<div className="ml-10">
							<h3 className="text-2xl">Trả phí</h3>
							<h2 className="text-3xl">10.000.000 đ</h2>
						</div>
						<ul>
							<li>Truy cập vào mọi nơi</li>
							<li>Support tận tình</li>
							<li>Khóa học mới hàng năm</li>
						</ul>
						<div>
							<button className="w-full p-3 rounded bg-blue-500 text-white hover:bg-blue-700 transition-colors">
								Bắt đầu ngay
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
