import React from 'react'
import './Cart.css'
import { useDispatch, useSelector } from 'react-redux'
import {
  removeFromCartAction,
  updateQuantityOfProduct,
} from '../../slices/CartSlice'

function Cart() {
  // get the cart items from cart slice
  const { items } = useSelector((store) => store.cart)

  // get the reference of dispatch function
  const dispatch = useDispatch()

  const formatDescription = (description) => {
    return description.length < 100
      ? description
      : description.substring(0, 100) + '...'
  }

  const onIncrementQuantity = (item) => {
    dispatch(
      updateQuantityOfProduct({ id: item.id, quantity: item.quantity + 1 })
    )
  }

  const onDecrementQuantity = (item) => {
    if (item.quantity == 1) {
      dispatch(removeFromCartAction({ id: item.id }))
    } else {
      dispatch(
        updateQuantityOfProduct({ id: item.id, quantity: item.quantity - 1 })
      )
    }
  }

  const getTotalPrice = () => {
    let totalPrice = 0
    for (const item of items) {
      totalPrice += item.price * item.quantity
    }

    return totalPrice
  }

  return (
    <div className='container'>
      <h2 className='page-header'>Cart</h2>
      {items.length == 0 && (
        <h3 className='page-header'>There are not items in the cart</h3>
      )}

      {items.map((item) => {
        return (
          <div
            style={{
              borderBottom: 'solid',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 10,
              paddingBottom: 10,
            }}
          >
            <div style={{ display: 'flex' }}>
              <img
                src={item.image}
                className='product-thumbnail'
                alt=''
              />
              <div className='ms-3'>
                <h5>{item.title}</h5>
                <div>Price: {item.price}</div>
                <div>{formatDescription(item.description)}</div>
              </div>
            </div>
            <div>
              <button
                onClick={() => {
                  onIncrementQuantity(item)
                }}
                className='btn btn-success btn-sm'
              >
                +
              </button>
              <span className='ms-3 me-3'>{item.quantity}</span>
              <button
                onClick={() => {
                  onDecrementQuantity(item)
                }}
                className='btn btn-success btn-sm'
              >
                -
              </button>
            </div>
          </div>
        )
      })}
      {items.length > 0 && <div>Total Price: {getTotalPrice()}</div>}
    </div>
  )
}

export default Cart
