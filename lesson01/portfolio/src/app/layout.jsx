import AppProviders from './_component/AppProviders'
import './globals.css'

export const metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app'
}

export default function RootLayout({ children }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`antialiased`}>
				<AppProviders>{children}</AppProviders>
			</body>
		</html>
	)
}