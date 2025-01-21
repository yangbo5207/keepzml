import {createRandomMessage, uuid} from '@/utils'

export async function getUsersInfo() {
  const len = Math.floor(Math.random() * 10) % 10
  const url = `https://randomuser.me/api/?results=${len}&inc=name,gender,email,nat,picture&noinfo`;
  // !mark
  const response = await fetch(url)
  const data = await response.json()
  const users: UserInfo[] = data.results.map((item: UserInfo) => {
    item.desc = createRandomMessage()
    item.id = uuid()
    return item
  })
  return users
}
