import {getUsersInfo} from './api'

export function getUsersInfoService(search: string) {
  const cacheArr = localStorage.getItem(search)

  if (cacheArr) {
    let p = Promise.resolve<UserInfo[]>(JSON.parse(cacheArr))
    return {
      promise: p,
      abort: () => {}
    }
  }

  const _users = getUsersInfo()

  const p = _users.promise.then(res => {
    localStorage.setItem(search, JSON.stringify(res.results))
    return res.results
  })

  return {
    promise: p,
    abort: () => {
      _users.controller.abort()
    }
  }
}