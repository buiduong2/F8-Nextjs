const data = {
	users: [{ id: 1, username: 'Duong', email: 'BuiDucduong1@gmail.com' }],
}

export function createSession(username) {
	const sessionToken = createRandomString()
	const user = data.users.find(user => user.username === username)
	if (user) {
		user.sessionToken = sessionToken
		return session
	}
}


export function deleteSession(userId) {
	const user = data.users.find(user => user.id === userId)
	user.sessionToken = null
}


export function verifySession(userId, sessionToken) {
	return data.users.some(
		user => user.id === userId && user.sessionToken === sessionToken
	)
}


function createRandomString() {
	let str = ''
	for (let i = 0; i < 21; i++) {
		str += String.fromCharCode(Math.floor(Math.random() * (122 - 60) + 60))
	}

	return str
}


function trimUser() {
    
}