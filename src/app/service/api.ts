import {appID, get, Result} from 'utils/http'

export function getAccesstoken(code: string) {
  const path = `/eden/v1/open/oauth2/access_token`
  return get<any, AccessToken>(path, {app_id: appID, code, grant_type: 'authorization_code'})
}

export function refreshToken(refresh_token: string) {
  const path = `/eden/v1/open/oauth2/refresh_token`
  return get<any, AccessToken>(path, {app_id: appID, grant_type: 'refresh_token', refresh_token}
  )
}

export function getUserInfo() {
  return get<any, UserInfo>(`/eden/v1/open/userinfo`, {})
}

export function getSubscribe(column_id: string) {
  return get<any, SubscribleState>(`/eden/v1/open/column/subscription/status`, {column_id})
}

export interface AccessToken extends Result {
  access_token: string,
  refresh_token: string,
  open_id: string
}

export interface UserInfo extends Result {
  nickname: string,
  avatar_url: string,
  user_id: string
}

interface SubscribleState extends Result {
  status: number // 0: 未订阅  1: 已订阅
}

export interface Option {
  [key: string]: any
}
