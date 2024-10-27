import React from 'react'

const style = {
	styles: {
		base: {
			initial: {
				verticalAlign: 'align-middle',
				userSelect: 'select-none',
				fontWeight: '',
				textAlign: 'text-center',
				transition: 'transition-all',
				disabled: 'disabled:opacity-50  disabled:pointer-events-none',
				border: 'border border-transparent',
				dispaly: 'inline-block'
			},
			fullWidth: {
				display: 'block',
				width: 'w-full'
			}
		},
		sizes: {
			sm: {},
			md: {
				fontSize: 'text-base',
				py: 'py-2',
				px: 'px-4',
				borderRadius: 'rounded',
				lineHeight: 'leading-6'
			},
			lg: {
				fontSize: 'text-xl',
				py: 'py-2',
				px: 'px-6',
				borderRadius: 'rounded',
				lineHeight: ''
			},
		},
		variants: {
			filled: {
				blue: {
					backgroud: 'bg-indigo-600',
					color: 'text-white',
					hover: 'hover:bg-indigo-700',
					focus: 'focus:bg-indigo-700',
					active: 'active:bg-indigo-700'
				},
				gray: {},
				purple: {
					backgroud: 'bg-purple-500',
					color: 'text-white',
					hover: 'hover:bg-purple-900',
					focus: 'focus:bg-purple-900',
					active: 'active:bg-purple-900'
				}
			},
			outlined: {
				blue: {
					border: '!border-indigo-600',
					color: 'text-indigo-600',
					hover: 'hover:bg-indigo-600 hover:text-white',
					focus: 'hover:bg-indigo-600 hover:text-white',
					active: 'hover:bg-indigo-600 hover:text-white'
				},
				gray: {},
				purple: {}
			},
			text: {
				blue: {
					color: 'text-indigo-600',
					hover: 'hover:bg-indigo-100 hover:text-indigo-700',
					active: 'active:bg-indigo-100 active:text-indigo-700'
				},
				gray: {
					color: 'text-gray-600',
					hover: 'hover:text-gray-700 hover:bg-gray-200',
					active: 'active:text-gray-700 active:bg-gray-200'
				},
				purple: {}
			}
		}
	}
}

interface Props<T extends React.ElementType> {
	as?: T
	children: React.ReactNode
	variant?: 'filled' | 'outlined' | 'text'
	size?: 'sm' | 'md' | 'lg'
	color?: 'blue' | 'gray' | 'purple'
	fullWidth?: boolean
}

export default function AppButton<T extends React.ElementType>(
	props: Props<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof Props<T>>
) {
	const {
		variant = 'filled',
		size = 'md',
		color = 'blue',
		fullWidth,
		className = '',
		children,
		as = 'button',
		...rest
	} = props

	const btnClasses: string[] = []

	btnClasses.push(...Object.values(style.styles.base.initial))

	btnClasses.push(className)

	if (fullWidth) {
		btnClasses.push(...Object.values(style.styles.base.fullWidth))
	}

	btnClasses.push(...Object.values(style.styles.sizes[size]))
	btnClasses.push(...Object.values(style.styles.variants[variant][color]))

	const Component = as

	return (
		<Component {...rest} className={btnClasses.join(' ')}>
			{children}
		</Component>
	)
}
