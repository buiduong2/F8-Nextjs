import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'
import { authOptions } from '../[...nextauth]/route'
import { getAccountsByUserId } from '@/app/_data/userData'

export async function GET(req) {
	const session = await getServerSession(authOptions)
	return NextResponse.json(await getAccountsByUserId(session.user.id))
}