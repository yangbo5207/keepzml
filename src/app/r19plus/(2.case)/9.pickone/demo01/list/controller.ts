import {getUsersInfo} from './service'
import {createRandomMessage, uuid} from '@/utils'

export const getOverAccounts = () => {
  const p = getUsersInfo()

  p.then(list => {
    return list.map((item, index) => {
      item.desc = `${index}、${createRandomMessage()}`
      item.fullname = item.name.first + ' ' + item.name.last
      item.thumb = item.picture.thumbnail
      item.id = uuid()
      return item
    })
  })

  return p
}
