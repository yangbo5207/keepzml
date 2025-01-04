export const host = 'https://randomuser.me'

export const fetchListWithCancel = () => {
  const i = Math.floor(Math.random() * 10) % 10
  const query = new URLSearchParams({
    inc: 'name,gender,email,nat,picture',
    results: i,
    noinfo: true
  })
  let controller = new AbortController();
  let signal = controller.signal;
  const promise = new Promise(resolve => {
    fetch(`${host}/api/?${query.toString()}`, {signal}).then(res => {
      resolve(res.json())
    }).catch(() => {
      console.log('接口成功取消！')
    })
  })

  promise.cancel = () => {
    if (controller) {
      controller.abort()
    }
  }
  return promise
}
