export const host = 'https://randomuser.me'

export async function fetchList() {
  const i = Math.floor(Math.random() * 10) % 10
  const query = new URLSearchParams({
    inc: 'name,gender,email,nat,picture',
    results: i,
    noinfo: true
  })
  
  const res = await fetch(`${host}/api/?${query.toString()}`)
  return res.json()
}
