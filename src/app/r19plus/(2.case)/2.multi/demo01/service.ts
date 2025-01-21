import {getUpUsersInfo, getDownUsersInfo} from './api'

export function getUsersInfo() {
  const up = getUpUsersInfo()
  const down = getDownUsersInfo()
  const p = Promise.all([up.promise, down.promise]).then(res => {
    return res.reduce<UserInfo[]>((prev, cur) => {
      return prev.concat(cur.results)
    }, [])
  })

  return {
    promise: p,
    abort: () => {
      up.controller.abort()
      down.controller.abort()
    }
  }
}