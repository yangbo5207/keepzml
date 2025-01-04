import {get} from './http'

export const prevListApi = (number) => {
  return get('https://randomuser.me/api', {
    results: number,
    inc: 'name,gender,email,nat,picture&noinfo',
  })
}
