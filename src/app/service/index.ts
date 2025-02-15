import {create} from 'zustand'
import {getAccesstoken, getUserInfo, AccessToken, refreshToken, UserInfo} from './api'

export async function getAuth() {
  let access_token = localStorage.getItem('access_token')
  let refresh_token = localStorage.getItem('refresh_token')
  let open_id = localStorage.getItem('open_id')
  
  const usp = new URLSearchParams(window.location.search.slice(1))
  const query = Object.fromEntries(usp.entries())
  const code = query.code

  if (!access_token && !code) {
    setLogin(false)
    return {isLogin: false}
  }

  let res = {} as AccessToken;

  // 验证之后返回回调
  if (!access_token && code) {
    res = await getAccesstoken(code)
  } else {
    res =await refreshToken(refresh_token || '')
  }

  if (res.status_code != 0) {
    console.error(res.status_msg)
    localStorage.setItem('access_token', '')
    setLogin(false)
    return {isLogin: false}
  }

  access_token = res.access_token
  refresh_token = res.refresh_token
  open_id = res.open_id
  localStorage.setItem('access_token', access_token)
  localStorage.setItem('refresh_token', refresh_token)
  localStorage.setItem('open_id', open_id)
  
  const userinfo = await getUserInfo()
  const uinfo = {isLogin: true, access_token, open_id, ...userinfo}
  setLogin(true)
  setUserInfo(uinfo)
  return uinfo
}

const store = {
  isLogin: false,
  userinfo: {} as UserInfo,
  subscrible: {
    'r19base': 0,
    'r19plus': 0,
    'zustand': 0,
    'r19lightning': 0,
    'reactzm': 0,
    'supercss': 0
  }
}

export type ColumnKey = 'r19base' | 'r19plus' | 'r19lightning' | 'zustand' | 'reactzm' | 'supercss'

export const useLoginStore = create(() => store)

const set = useLoginStore.setState

// 普通 action
export const setUserInfo = (option: UserInfo) => {
  set({userinfo: option})
}

export function setLogin(login: boolean) {
  set({isLogin: login})
}

export function setSubscribe(column_key: ColumnKey, value: number) {
  set((state) => {
    return {
      subscrible: {
        ...state.subscrible,
        [column_key]: value
      }
    }
  })
}
