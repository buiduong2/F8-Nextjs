import {
	IconButton,
	Menu,
	MenuHandler,
	MenuItem,
	MenuList,
	Tooltip
} from '@material-tailwind/react'
import React from 'react'
interface Props<T extends string> {
	tooltip: string
	vertical?: boolean
	Icon: React.ReactNode
	types: readonly T[]
	pickItemsSupplier: (t: T) => React.ReactNode
	onClickType: (t: T) => void
}

export default function ToolBarItemAbstractPick<T extends string>(
	props: Props<T>
) {
	const { tooltip, types, Icon, pickItemsSupplier, onClickType, vertical } =
		props

	return (
		<>
			<Menu>
				<MenuHandler>
					<div>
						<Tooltip content={tooltip}>
							<IconButton color="white" size='sm'>{Icon}</IconButton>
						</Tooltip>
					</div>
				</MenuHandler>
				<MenuList className={'max-w-lg flex ' + (vertical ? 'flex-col' : 'flex-row')}>
					{types.map(type => (
						<MenuItem key={type} onClick={() => onClickType(type)}>
							{pickItemsSupplier(type)}
						</MenuItem>
					))}
				</MenuList>
			</Menu>
		</>
	)
}
