function CartList({cart = []}) {
  return (
    <div>
      {cart.map((item, index) => (
        <div key={`cart_${index}`} className='border border-yellow-400 p-4 rounded my-4'>
          <div className='font-bold'>title: {item.title}</div>
          <div>id: {item.id}</div>
          <div>count: {item.count || 0}</div>
        </div>
      ))}
    </div>
  )
}

export default CartList
