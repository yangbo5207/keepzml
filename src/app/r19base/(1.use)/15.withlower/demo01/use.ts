export interface PromiseLike<T> extends Promise<T> {
  status?: string,
  value?: T,
  reason?: any,
}

export default function use<T>(promise: PromiseLike<T>): T {
  if (promise.status === 'fulfilled') {
    return promise.value!
  } else if (promise.status === 'rejected') {
    throw promise.reason
  } else if (promise.status === 'pending') {
    throw promise
  } else {
    promise.status = 'pending'
    promise.then(result => {
      promise.status = 'fulfilled'
      promise.value = result
    }, reason => {
      promise.status = 'rejected'
      promise.reason = reason
    })
    throw promise
  }
}