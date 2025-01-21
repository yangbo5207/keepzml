export interface UserInfoResult {
  results: UserInfo[]
}

// API 应该与服务端提供的接口文档严格保持一致
export async function getUpUserInfo(): Promise<UserInfoResult> {
  const url = 'https://randomuser.me/api/?results=2&inc=name,gender,email,nat,picture&noinfo'
  const res = await fetch(url)
  return res.json()
}

export async function getDownUserInfo(): Promise<UserInfoResult> {
  const url = 'https://randomuser.me/api/?results=2&inc=name,gender,email,nat,picture&noinfo'
  const res = await fetch(url)
  return res.json()
}
