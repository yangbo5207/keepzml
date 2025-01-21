import {get} from './http'

export interface UserInfoResult {
  results: UserInfo[]
}

export interface UserParameter {
  results: number,
  inc: string
}

export function getUpUsersInfo() {
  return get<UserInfoResult, UserParameter>('https://randomuser.me/api', {
    results: 2,
    inc: 'name,gender,email,nat,picture&noinfo',
  })
}

export function getDownUsersInfo() {
  return get<UserInfoResult, UserParameter>('https://randomuser.me/api', {
    results: 2,
    inc: 'name,gender,email,nat,picture&noinfo',
  })
}