import { Book } from './book-item'

export async function submit(cur: number, formData: FormData, onSubmit: (book: Book) => any) {
  const id = formData.get('id') as string
  const title = formData.get('title') as string
  await new Promise((resolve) => {
    setTimeout(() => {
      onSubmit({id, title, count: cur + 1})
      resolve('')
    }, 300)
  })
  return cur + 1
}
