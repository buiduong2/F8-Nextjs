export function getData(locale) {
	const datas = {
		vi: () =>
			import('./vi.json').then(module => {
				return module.default
			}),
		en: () => import('./en.json').then(module => module.default)
	}

	return datas[locale]()
}
