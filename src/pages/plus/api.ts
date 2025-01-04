import {get, Result} from '../../utils/http'
import {getUserinfo} from '../service'
import {user_ids} from './database'

// JavaScript 核心进阶
const column_id = '1818097927437131776'

export const columnURL = `https://xinyuzone.cn/column/${column_id}`

export function getSubscribeApi() {
  if (user_ids.includes(getUserinfo().user_id)) {
    return Promise.resolve({
      status_code: 0,
      status: 1
    })
  }
  return get<any, SubscribleState>(`/eden/v1/open/column/subscription/status`, {column_id})
}

interface SubscribleState extends Result {
  status: number // 0: 未订阅  1: 已订阅
}

// 0: 未订阅  1: 已订阅
let subscribe = 0

export function setSubscribe(state: number) {
  subscribe = state
}

export function getSubscribe() {
  return subscribe
}