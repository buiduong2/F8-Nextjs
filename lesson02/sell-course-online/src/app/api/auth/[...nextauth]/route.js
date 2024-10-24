import { adatper, getUserByAccount } from '@/app/_data/userData'
import NextAuth, { getServerSession } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions = {
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET
		})
	],
	adapter: adatper(),
	session: {
		strategy: 'jwt'
	},

	callbacks: {
		async signIn({ account, profile, user }) {
			const session = await getServerSession(authOptions)
			if (session && user.role) {
				return '/?error=account-linked'
			}
			if (account.provider === 'github') {
				account.name = profile.login
			} else if (account.provider === 'google') {
				account.name = profile.email
			}
			return true
		},
		async jwt({ token, user }) {
			if (user) {
				token.id = user.id
				token.role = user.role
			}

			return token
		},
		async redirect({ url, baseUrl }) {
			if (url.startsWith('/')) return `${baseUrl}${url}`
			const urlIntance = new URL(url)
			const searchParams = new URLSearchParams(urlIntance.search)
			if (searchParams.has('callbackUrl')) {
				return searchParams.get('callbackUrl')
			}
			if (urlIntance.pathname === '/login') {
				return '/'
			}
			return url
		},
		async session({ session, token }) {
			session.user.role = token.role
			session.user.id = token.id
			return session
		}
	},
	pages: {
		signIn: '/login'
	}
}

export const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
