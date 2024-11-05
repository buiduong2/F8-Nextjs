import { getSession } from '@auth0/nextjs-auth0/edge'
import TheNavBar from './TheNavBar'

export default async function TheHeader() {
	const session = await getSession()
	const user = session?.user
	const isAuthenticated = !!user
	return (
		<header className="p-4 relative">
			<div className="container mx-auto">
				<TheNavBar isAuthenticated={isAuthenticated} username={user?.name}/>
			</div>
		</header>
	)
}
export const runtime = 'edge'
