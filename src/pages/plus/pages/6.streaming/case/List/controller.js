/**
 * 完成额外的数据处理逻辑，可能包括
 * 1. 数据校验
 * 2. 数据二次处理, 整理返回给 View 层的基本格式
 */
import {fetchListWithCancel} from './service'
import {createRandomMessage, uuid} from 'utils'

export const fetchListController = (i) => {
  const p = fetchListWithCancel(i)

  p.then(list => {
    return list.results.map((item, index) => {
      item.desc = `${index}、${createRandomMessage()}`
      item.name = item.name.first + ' ' + item.name.last
      item.thumbnail = item.picture.thumbnail
      item.id = uuid()
      return item
    })
  })

  return p
}
