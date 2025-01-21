export interface UserInfoResult {
  results: UserInfo[]
}

export async function getUsersInfo(): Promise<UserInfoResult> {
  const url = 'https://randomuser.me/api/?results=4&inc=name,gender,email,nat,picture&noinfo'
  const res = await fetch(url)
  return res.json()
}
