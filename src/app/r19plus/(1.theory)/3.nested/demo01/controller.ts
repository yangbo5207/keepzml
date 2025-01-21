/**
 * 完成额外的数据处理逻辑，可能包括
 * 1. 数据校验
 * 2. 数据二次处理, 整理返回给 View 层的基本格式
 */
import {getUsersInfo} from './service'
import {createRandomMessage, uuid} from '@/utils'

// 定义 UI 组件需要的数据结构
export interface OverUserInfo {
  id: string,
  email: string,
  gender: string,
  name: string,
  nat: string,
  thumbnail: string,
  desc: string,
}

export async function getOverUsersInfo() {
  const list = await getUsersInfo()
  const overList: OverUserInfo[] = []
  
  list.forEach((item, index) => {
    overList.push({
      id: uuid(),
      desc: `${index}、${createRandomMessage()}`,
      email: item.email,
      gender: item.gender,
      name: item.name.first + ' ' + item.name.last,
      nat: item.nat,
      thumbnail: item.picture.thumbnail
    })
  })

  return overList
}
