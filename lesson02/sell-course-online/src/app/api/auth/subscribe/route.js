import { promoteUser } from '@/app/_data/userData'
import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'
import { authOptions } from '../[...nextauth]/route'

export async function POST() {
	const session = await getServerSession(authOptions)
	promoteUser(session.user.id)
	return NextResponse.json({ message: 'Thành công' }, { status: 200 })
}
