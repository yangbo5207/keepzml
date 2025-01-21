export interface PromiseWithCancel<T> extends Promise<T> {
  cancel: () => any
}

interface Param {
  [key: string]: any
}

export function get<T, P extends Param>(path: string, params: P) {
  let controller = new AbortController();
  let signal = controller.signal;

  let p = Object.keys(params).reduce((prev, cur) => {
    return `${prev}${prev ? '&' : ''}${cur}=${params[cur]}`
  }, '')

  const promise = new Promise<T>(resolve => {
    fetch(`${path}?${p}`, {signal}).then(res => {
      resolve(res.json())
    }).catch(() => {
      console.warn('fetch has been canceled!')
    })
  })

  return {promise, controller}
}