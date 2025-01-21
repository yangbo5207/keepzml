import {getUpUserInfo, getDownUserInfo} from './api'

export async function getUsersInfo() {
  const results = await Promise.all([getUpUserInfo(), getDownUserInfo()])
  return results.reduce<UserInfo[]>((prev, cur) => {
    return prev.concat(cur.results)
  }, [])
}
