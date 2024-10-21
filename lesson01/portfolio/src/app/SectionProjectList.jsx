import { Card, CardBody, CardHeader } from '@nextui-org/card'
import { Link } from '@nextui-org/link'
import { Tooltip } from '@nextui-org/tooltip'
import React from 'react'

export default function SectionProjectList() {
	return (
		<Card>
			<CardHeader className="justify-center">
				<h4 className="text-foreground">Các dự án cá nhân</h4>
			</CardHeader>
			<CardBody>
				<ul>
					{Array(3)
						.fill(null)
						.map((_, index) => (
							<li key={index}>
								<h5 className="text-xl text-foreground">
									Project Code snippet
								</h5>
								<p>
									Một dự án nhỏ hoàn thành trong vòng một ngày
									Một trang web đơn giản cho phép tạo và chia
									sẻ các đoạn code. Sử dụng HTML, CSS, JS và
									custom elements.
								</p>
								<div className="flex gap-4">
									<Tooltip
										color={'success'}
										content={'github.com'}
									>
										<Link href="github.com" isExternal>
											Demo
										</Link>
									</Tooltip>
									<Tooltip
										color={'default'}
										content={'github.com'}
									>
										<Link href="github.com" isExternal>
											Code
										</Link>
									</Tooltip>
								</div>
								<hr className="my-5" />
							</li>
						))}
				</ul>
			</CardBody>
		</Card>
	)
}
