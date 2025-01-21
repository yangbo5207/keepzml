import { useActionState } from 'react'
import { submit } from './actions'
import SubmitButton from './submit-button'

export interface Book {
  id: string,
  title: string,
  count: number
}

function BookItem({ id, title, onSubmit }: {
  id: string,
  title: string,
  onSubmit: (book: Book) => any
}) {
  const [count, formAction] = useActionState<number, FormData>(
    (cur, formData) => submit(cur, formData, onSubmit), 0
  )

  return (
    <form action={formAction} className='border border-gray-200 p-4 my-3 rounded'>
      <h4 className='!my-2 font-bold text-lg'>book name: {title}</h4>
      <input type="hidden" name='title' value={title} />
      <input type="hidden" name='id' value={id} />
      <div style={{ marginBottom: '20px' }}>cart count: {count}</div>
      <SubmitButton>ADD TO CART</SubmitButton>
    </form>
  )
}

export default BookItem;
