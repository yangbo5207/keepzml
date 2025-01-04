export async function formAction(fd) {
  const title = fd.get('title')
  const content = fd.get('content')
  if (!title || !content) {
    return alert('Miss')
  }
  await new Promise(resolve => setTimeout(resolve, 1000))
  alert(`Title: ${title}, Content: ${content}`)
}
