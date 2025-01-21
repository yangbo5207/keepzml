import {createRandomMessage, uuid} from '@/utils'

interface PromiseWithCancel<T> extends Promise<T> {
  cancel: () => any
}

export function getUsersInfo() {
  const len = Math.floor(Math.random() * 10) % 5
  const url = `https://randomuser.me/api/?results=${len}&inc=name,gender,email,nat,picture&noinfo`;

  let controller = new AbortController();
  let signal = controller.signal;

  const __promise = new Promise(async resolve => {
    try {
      const response = await fetch(url, {signal})
      const data = await response.json()
      const users: UserInfo[] = data.results.map((item: UserInfo) => {
        item.desc = createRandomMessage()
        item.id = uuid()
        return item
      })
      resolve(users)
    } catch {
      console.warn('fetch have been canceled!')
    }
  })

  const promise = __promise as PromiseWithCancel<UserInfo[]>
  promise.cancel = () => {
    if (controller) {
      controller.abort()
    }
  }

  return promise
}