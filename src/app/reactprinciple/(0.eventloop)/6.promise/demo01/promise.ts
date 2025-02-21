const pending = 'pending'
const fulfilled = 'fulfilled'
const rejected = 'rejected'

let loopRunning = false

const promiseJobs: any[] = []

let PromiseFulfillReactions: {key: any, callback: any}[] = []
let PromiseRejectReactions: {key: any, callback: any}[] = []

const isFunction = (fn: any) => typeof fn === 'function'

export default class XPromise {
  private PromiseState: 'pending' | 'fulfilled' | 'rejected'
  private PromiseResult: any
  constructor(executor: (
    resolve: (value: any) => void, 
    reject: (reason?: any) => void
  ) => void) {
    this.PromiseResult = undefined
    this.PromiseState = pending

    executor(this.resolve.bind(this), this.reject.bind(this))
  }

  resolve = (value: any) => {
    // 推送到执行队列，或者启动执行队列的循环
    this.PromiseResult = value
    this.PromiseState = fulfilled

    const job = PromiseFulfillReactions.find((item) => item.key === this)
    if (job) {
      PromiseFulfillReactions = PromiseFulfillReactions.filter(item => item.key !== this)
      promiseJobs.push(job.callback)
    }
    if (loopRunning === false) {
      loopRunning = true
      this.workLoop()
    }
  }

  reject(value: any) {
    this.PromiseResult = value
    this.PromiseState = rejected
    const job = PromiseRejectReactions.find(item => item.key === this)
    
    if (job) {
      PromiseRejectReactions = PromiseRejectReactions.filter(item => item.key !== this)
      promiseJobs.push(job.callback)
    }
    if (loopRunning === false) {
      loopRunning = true
      this.workLoop()
    }
  }

  then = (onResolved: any, onRejected?: any) => {
    return new XPromise((resolveNext, rejectNext) => {
      const _resolved = () => {
        const value = this.PromiseResult
        try {
          if (!isFunction(onResolved)) {
            resolveNext(value)
          } else {
            const res = onResolved(value)
            if (res instanceof XPromise) {
              res.then(resolveNext, rejectNext)
            } else {
              resolveNext(res)
            }  
          }
        } catch (err) {
          rejectNext(err)
        }
      }

      const _rejected = () => {
        const value = this.PromiseResult
        try {
          if (!isFunction(onRejected)) {
            rejectNext(value)
          } else {
            const res = onRejected(value)
            if (res instanceof XPromise) {
              res.then(resolveNext, rejectNext)
            } else {
              resolveNext(res)
            }
          }
        } catch (err) {
          rejectNext(err)
        }
      }
      switch(this.PromiseState) {
        // 状态为 pending 时，收集回调
        case pending: 
          PromiseFulfillReactions.push({
            key: this,
            callback: _resolved
          })
          PromiseRejectReactions.push({
            key: this,
            callback: _rejected
          })
          break
        // 状态已经改变了，就直接执行回调
        case fulfilled:
          promiseJobs.push(_resolved)
          break
        case rejected:
          promiseJobs.push(_rejected)
          break
      }
    })
  }

  workLoop = () => {
    setTimeout(() => {
      let cb
      while(cb = promiseJobs.shift()) {
        cb()
      }
      loopRunning = false
    }, 0)
  }

  catch = (onRejected: any) => {
    return this.then(null, onRejected)
  }
}