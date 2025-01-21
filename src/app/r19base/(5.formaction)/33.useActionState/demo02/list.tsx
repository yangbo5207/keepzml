import { Book } from './book-item'

function CartList({ books = [] }: {
  books: Book[]
}) {
  return (
    <div>
      {books.map((book, index) => (
        <div key={`cart_${index}`} className='border border-yellow-400 p-4 rounded my-4'>
          <div className='font-bold'>title: {book.title}</div>
          <div>id: {book.id}</div>
          <div>count: {book.count || 0}</div>
        </div>
      ))}
    </div>
  )
}

export default CartList