import { withMiddlewareAuthRequired } from '@auth0/nextjs-auth0/edge'

export default withMiddlewareAuthRequired()

export const config = {
	matcher: ['/my-mindmap', '/api/mindmap/', '/api/mindmap/:path([\\w-_]+)']
}
