export const isObject = (item: any) =>
	item && typeof item === 'object' && !Array.isArray(item)

export const merge = (target: any, ...sources: any): any => {
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

export const factory = (cb: any, { freeze = true } = {}) => {
	return (args?: any) => {
		const t = {}
		cb(t, args ?? {})
		return freeze ? Object.freeze(t) : t
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

export const perf = (cb: any, { log = true, name = 'Time' } = {}) => {
	return (...args: any) => {
		const start = performance.now()
		const r = cb(...args)
		const end = performance.now()
		const ms = end - start
		if (log) console.table({ [name]: `${ms}ms` })
		return [ms, r]
	}
}

export const perfAsync = (cb: any, { log = true, name = 'Time' } = {}) => {
	return async (...args: any) => {
		const start = performance.now()
		const r = await cb(...args)
		const end = performance.now()
		const ms = end - start
		if (log) console.table({ [name]: `${ms}ms` })
		return [ms, r]
	}
}

export const memo = (cb: any) => {
	const cache = new Map()
	return (...args: any) => {
		console.log(this)
		const key = JSON.stringify(args)
		if (cache.has(key)) return cache.get(key)
		const v = cb(...args)
		cache.set(key, v)
		return v
	}
}

export const memoAsync = (cb: any) => {
	const cache = new Map()
	return async (...args: any) => {
		const key = JSON.stringify(args)
		if (cache.has(key)) return cache.get(key)
		const v = await cb(...args)
		cache.set(key, v)
		return v
	}
}
