export const host = 'https://randomuser.me'

export async function fetchList(count) {
  const query = new URLSearchParams({
    inc: 'name,gender,email,nat,picture',
    results: count,
    noinfo: true
  })
  
  const res = await fetch(`${host}/api/?${query.toString()}`)
  return res.json()
}
