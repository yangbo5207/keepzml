import { useState } from 'react'

import List from './List'
import BookItem from './BookItem'

export default function Demo02() {
  const [carts, updateCarts] = useState([])

  function addToCart(book) {
    const target = carts.find(cart => cart.id === book.id)
    if (target) {
      target.count += 1
      return updateCarts([...carts])
    }
    updateCarts(carts => [...carts, book])
  }

  return (
    <div>
      <BookItem id='001' title='JavaScript Core advance' onSubmit={addToCart} />
      <BookItem id='002' title='React19 all solution' onSubmit={addToCart} />
      <List cart={carts} />
    </div>
  )
}
