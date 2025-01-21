import {createRandomMessage} from '@/utils'

export function getMessage() {
  return new Promise<{value: string}>(resolve => {
    resolve({ value: createRandomMessage() })
  })
}