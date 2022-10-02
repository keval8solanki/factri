const isObject = (item: any) => {
	return item && typeof item === 'object' && !Array.isArray(item)
}
const merge = (target, ...sources) => {
	if (!sources.length) return target
	const source = sources.shift()
	if (isObject(target) && isObject(source)) {
		for (const key in source) {
			if (isObject(source[key])) {
				if (!target[key])
					Object.assign(target, {
						[key]: {},
					})
				merge(target[key], source[key])
			} else {
				Object.assign(target, {
					[key]: source[key],
				})
			}
		}
	}
	return merge(target, ...sources)
}

export const factory = (cb: any, t = {}) => {
	return (args?: any) => {
		cb(t, args ?? {})
		return Object.freeze(merge({}, t))
	}
}

export const extend = (cb: any, ...p: any) => {
	return (args?: any): any => {
		let _p = {}
		p.forEach((__p: any) => {
			_p = merge(_p, __p(args))
		})
		cb(_p, args ?? {})
		return Object.freeze(_p)
	}
}
