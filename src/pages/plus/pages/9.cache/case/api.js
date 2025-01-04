import {get} from './http'

export const prevListApi = () => {
  return get('https://randomuser.me/api', {
    results: 4,
    inc: 'name,gender,email,nat,picture&noinfo',
  })
}
