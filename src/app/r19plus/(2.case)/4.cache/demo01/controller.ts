import {getUsersInfoService} from './service'
import {createRandomMessage, uuid} from '@/utils'

export function getOverUsersInfo(search: string) {
  const over = getUsersInfoService(search)

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
