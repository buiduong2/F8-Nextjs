import { getToken } from 'next-auth/jwt'
import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

const authMiddleware = withAuth({
	pages: {
		signIn: '/login'
	}
})

const privateApiRoutes = ['/api/auth/accounts', '/api/subscribe']

export default async function middleware(req, event) {
	const token = await getToken({ req })
	const isAuthenticated = !!token
	if (req.nextUrl.pathname.startsWith('/login')) {
		if (isAuthenticated) {
			return NextResponse.redirect(new URL('/', req.url))
		}
		return NextResponse.next()
	}
	if (privateApiRoutes.includes(req.nextUrl.pathname)) {
		console.log()
		if (!isAuthenticated) {
			return NextResponse.json('unauthorize', { status: 403 })
		}
		return NextResponse.next()
	}

	return authMiddleware(req, event)
}

export const config = {
	matcher: [
		'/profile',
		'/login',
		'/subscribe',
		'/api/auth/accounts',
		'/api/subscribe'
	]
}
