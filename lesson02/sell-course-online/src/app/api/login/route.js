import { createSession } from '@/app/_data/userData'
import { cookies } from 'next/headers'
import { redirect, RedirectType } from 'next/navigation'
import { NextResponse } from 'next/server'

export function POST(request) {
	const session = createSession('Duong')
	cookies().set('auth', btoa(JSON.stringify({ session })), {
		maxAge: 600000,
		httpOnly: true,
		sameSite: 'lax'
	})
	return redirect('/', RedirectType.replace)
}
