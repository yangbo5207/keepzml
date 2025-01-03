import {createRandomMessage} from 'utils'

export const messageApi = () => {
  return new Promise(resolve => {
    resolve({ value: createRandomMessage() })
  })
}