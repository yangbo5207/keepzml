import {getUsersInfo} from './api'

export function getUsersInfoService({search, count}: {
  search: string, 
  count: number
}) {
  const cachekey = `searchList:key:${search}-${count}`
  const cacheArr = localStorage.getItem(cachekey)

  if (cacheArr) {
    let p = Promise.resolve<UserInfo[]>(JSON.parse(cacheArr))
    return {
      promise: p,
      abort: () => {}
    }
  }

  const _users = getUsersInfo(count)

  const p = _users.promise.then(res => {
    localStorage.setItem(cachekey, JSON.stringify(res.results))
    return res.results
  })

  return {
    promise: p,
    abort: () => {
      _users.controller.abort()
    }
  }
}