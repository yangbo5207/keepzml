import {createRandomMessage, uuid} from 'utils'

const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;

export const fetchList = async () => {
  const res = await fetch(fakeDataUrl)
  const json = await res.json()
  json.results = json.results.map(item => {
    item.desc = createRandomMessage()
    item.id = uuid()
    return item
  })
  return json
}
