export type NodeShape = 'square' | 'RoundedSquare' | 'Circle'

export type EdgeShape = 'straight' | 'smoothstep' | 'bezier' | 'simple'
export const edgeShapesValues = [
	'straight',
	'smoothstep',
	'bezier',
	'simple'
] as const
