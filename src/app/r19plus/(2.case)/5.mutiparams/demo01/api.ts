import {get} from './http'

export interface UserInfoResult {
  results: UserInfo[]
}

export interface UserParameter {
  results: number,
  inc: string
}

export function getUsersInfo(count: number) {
  return get<UserInfoResult, UserParameter>('https://randomuser.me/api', {
    results: count,
    inc: 'name,gender,email,nat,picture&noinfo',
  })
}