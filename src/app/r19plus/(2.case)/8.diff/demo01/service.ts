import {getUpUsersInfo, getDownUsersInfo} from './api'

let up_cache: UserInfo[] = []
let down_cache: UserInfo[] = []

export function getUsersInfo() {
  const up = getUpUsersInfo()
  const down = getDownUsersInfo()
  const p = Promise.all([up.promise, down.promise]).then(res => {
    up_cache = res[0].results
    down_cache = res[1].results
    return up_cache.concat(down_cache)
  })

  return {
    promise: p,
    abort: () => {
      up.controller.abort()
      down.controller.abort()
    },
    clear
  }
}

export function getUsersInfoByUp() {
  let up = getUpUsersInfo()
  const p = up.promise.then(res => {
    up_cache = res.results
    return up_cache.concat(down_cache)
  })

  return {
    promise: p,
    abort: () => {
      up.controller.abort()
    },
    clear
  }
}

export function getUsersInfoByDown() {
  let down = getDownUsersInfo()
  const p = down.promise.then(res => {
    down_cache = res.results
    return down_cache.concat(up_cache)
  })

  return {
    promise: p,
    abort: () => {
      down.controller.abort()
    },
    clear
  }
}

export function getUsersInfoService(type?: 'up' | 'down') {
  if (type === 'up') {
    return getUsersInfoByUp()
  }
  if (type === 'down') {
    return getUsersInfoByDown()
  }
  return getUsersInfo()
}

function clear() {
  up_cache = []
  down_cache = []
}