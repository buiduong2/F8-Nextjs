'use client'
import React from 'react'
import AppLoading from './AppLoadingIcon'

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
			}
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
				},
				red: {
					backgroud: 'bg-red-500',
					color: 'text-white',
					hover: 'hover:bg-red-900',
					focus: 'focus:bg-red-900',
					active: 'active:bg-red-900'
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
				purple: {},
				red: {
					border: '!border-red-600',
					color: 'text-red-600',
					hover: 'hover:bg-red-600 hover:text-white',
					focus: 'hover:bg-red-600 hover:text-white',
					active: 'hover:bg-red-600 hover:text-white'
				}
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
				purple: {},
				red: {
					color: 'text-red-600',
					hover: 'hover:bg-red-100 hover:text-red-700',
					active: 'active:bg-red-100 active:text-red-700'
				}
			}
		}
	}
}

interface Props<T extends React.ElementType> {
	as?: T
	children: React.ReactNode
	variant?: 'filled' | 'outlined' | 'text'
	size?: 'sm' | 'md' | 'lg'
	color?: 'blue' | 'gray' | 'purple' | 'red'
	fullWidth?: boolean
	isLoading?: boolean
}

export default function AppButton<T extends React.ElementType = 'button'>(
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
		isLoading,
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
		<Component
			{...rest}
			className={'flex items-center ' + btnClasses.join(' ')}
			disabled={isLoading}
		>
			{isLoading && <AppLoading />}
			{children}
		</Component>
	)
}
