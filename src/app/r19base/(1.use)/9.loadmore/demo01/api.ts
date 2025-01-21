import {createRandomMessage, uuid} from '@/utils'

const count = 3;
const url = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;

export const getUsersInfo = async () => {
  const response = await fetch(url)
  const data = await response.json()
  const users: UserInfo[] = data.results.map((item: UserInfo) => {
    item.desc = createRandomMessage()
    item.id = uuid()
    return item
  })
  return users
}
