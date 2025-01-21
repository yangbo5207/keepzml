import { useState } from 'react'
import BookItem, { Book } from './book-item'
import List from './list'

export default function Demo02() {
  const [books, updateBooks] = useState<Book[]>([])

  function addToCart(book: Book) {
    const target = books.find(cart => cart.id === book.id)
    if (target) {
      target.count += 1
      return updateBooks([...books])
    }
    updateBooks(books => [...books, book])
  }

  return (
    <div>
      <BookItem id='001' title='JavaScript Core advance' onSubmit={addToCart} />
      <BookItem id='002' title='React19 all solution' onSubmit={addToCart} />
      <List books={books} />
    </div>
  )
}
