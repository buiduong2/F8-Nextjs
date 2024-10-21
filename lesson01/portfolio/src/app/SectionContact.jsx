import { Card, CardBody, CardHeader } from '@nextui-org/card'
import { Link } from '@nextui-org/link'

import React from 'react'

export default function SectionContact() {
	return (
		<Card shadow='none'>
			<CardHeader className="justify-center">
				<h4 className='mt-4'>Thông tin liên hệ</h4>
			</CardHeader>
			<CardBody>
				<ul>
					<li>
						Phone:{' '}
						<Link
							isExternal
							color="warning"
							target="_blank"
							href="tel:0988370460"
						>
							0988370560
						</Link>
					</li>
					<li>
						Email:{' '}
						<Link
							isExternal
							color="warning"
							target="_blank"
							href="tel:0988370460"
						>
							buiducduong1@gmail.com
						</Link>
					</li>
					<li>
						Facebook:{' '}
						<Link
							isExternal
							color="warning"
							href="https://www.facebook.com/profile.php?id=100010036307790"
						>
							https://www.facebook.com/profile.php?id=100010036307790
						</Link>
					</li>

					<li>
						Github:{' '}
						<Link
							isExternal
							color="warning"
							href="https://github.com/buiduong2"
						>
							https://github.com/buiduong2
						</Link>
					</li>
				</ul>
			</CardBody>
		</Card>
	)
}
