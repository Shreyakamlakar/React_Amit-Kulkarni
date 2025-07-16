import React, { useEffect } from 'react'
import './Cart.css'

function Cart() {
  // this hook will handle event: component gets loaded
  useEffect(() => {
    // this function gets called on the component loading time
    console.log(`Cart is loaded/mounted`)

    return () => {
      // this function will get called when the component will get unloaded
      console.log('Cart is getting unloaded')
    }
  }, [])

  return (
    <div>
      <h2 className='page-header'>Cart</h2>
    </div>
  )
}

export default Cart
