import {getUsersInfoService} from './service'
import {createRandomMessage, uuid} from '@/utils'

export function getOverUsersInfo(type?: 'up' | 'down') {
  const over = getUsersInfoService(type)

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
    abort: over.abort,
    clear: over.clear
  }
}
