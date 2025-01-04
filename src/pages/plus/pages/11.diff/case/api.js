import {get} from './http'

export const prevListApi = () => {
  return get('https://randomuser.me/api', {
    results: 2,
    inc: 'name,gender,email,nat,picture&noinfo',
  })
}

export const nextListApi = () => {
  return get('https://randomuser.me/api', {
    results: 2,
    inc: 'name,gender,email,nat,picture&noinfo',
  })
}
