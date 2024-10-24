export const data = {
	users: [],
	accounts: []
}

async function createUser(user) {
	data.users.push(user)
	user.id = String(Math.random())
	user.role = 'user'
	return user
}

async function getUser(id) {
	return data.users.find(user => user.id === id) || null
}

export async function getUserByAccount({ providerAccountId, provider }) {
	const userId = data.accounts.find(
		account =>
			account.providerAccountId === providerAccountId &&
			account.provider === provider
	)?.userId
	return Object.values(data.users).find(user => user.id === userId) || null
}

async function updateUser({ id, ...data }) {
	const user = data.users.find(user => user.id === id)
	if (!user) return null
	Object.assign(user, data)
	return user
}

async function linkAccount(account) {
	const index = data.accounts.findIndex(
		a =>
			a.provider === account.provider &&
			a.providerAccountId === account.providerAccountId
	)
	if (index !== -1) {
		data.accounts.splice(index, 1, account)
		return account
	}
	data.accounts.push(account)
	return account
}

async function getUserByEmail(email) {
	return data.users.find(user => user.email === email) || null
}

export async function getAccountsByUserId(userId) {
	return JSON.parse(JSON.stringify(data.accounts))
		.filter(account => account.userId === userId)
		.map(account => ({ provider: account.provider, name: account.name }))
}

export async function promoteUser(userId) {
	const user = await getUser(userId)
	user.role = 'vip'
}

async function profile() {}

async function account() {}

export const adatper = () => ({
	createUser,
	getUser,
	getUserByAccount,
	updateUser,
	linkAccount,
	profile,
	account,
	getUserByEmail
})
