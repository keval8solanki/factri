import merge from 'lodash.merge'

export const factory = (cb: any, t = {}) => {
  return (args?: any) => {
    cb(t, args ?? {})
    return Object.freeze(merge({}, t))
  }
}

export const extend = (cb: any, ...p: any) => {
  return (args?: any): any => {
    let _p = {}
    p.forEach((__p: any) => { _p = merge(_p, __p(args)) })
    cb(_p, args ?? {})
    return Object.freeze(_p)
  }
}

