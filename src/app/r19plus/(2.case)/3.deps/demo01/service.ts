import {getUpUsersInfo, getDownUsersInfo} from './api'

export function getUsersInfo() {
  const up = getUpUsersInfo()
  
  const p = up.promise.then(up_res => {
    const down = getDownUsersInfo()
    return down.promise.then(down_res => {
      return up_res.results.concat(down_res.results)
    })
  })

  return {
    promise: p,
    abort: () => {
      up.controller.abort()
    }
  }
}