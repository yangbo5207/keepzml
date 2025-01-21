import {getUsersInfo} from './service'
import {createRandomMessage, uuid} from '@/utils'

export function getOverUsersInfo() {
  const over = getUsersInfo()

  const p = over.promise.then(res => {
    return res.map((user, i) => ({
      ...user,
      id: uuid(),
      desc: `${i}、${createRandomMessage()}`,
      fullname: user.name.first + ' ' + user.name.last,
      thumb: user.picture.thumbnail
    }))
  })

  return {
    promise: p,
    abort: over.abort
  }
}
