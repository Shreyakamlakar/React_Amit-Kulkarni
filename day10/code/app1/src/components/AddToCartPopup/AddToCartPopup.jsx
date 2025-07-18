import React, { useState } from 'react'
import './AddToCartPopup.css'
import { useDispatch } from 'react-redux'
import { addToCartAction } from '../../slices/CartSlice'

function AddToCartPopup({ product, setPopupVisible }) {
  const [quantities, setQuantities] = useState(1)
  const { title, description, price, id, image } = product

  // get the reference of dispatch function
  const dispatch = useDispatch()

  const onIncrement = () => {
    setQuantities(quantities + 1)
  }

  const onDecrement = () => {
    if (quantities > 1) {
      setQuantities(quantities - 1)
    }
  }

  const onCancel = () => {
    setPopupVisible(false)
  }

  const onAdd = () => {
    // add the item to the cart slice
    dispatch(
      addToCartAction({
        id,
        title,
        description,
        price,
        image,
        quantity: quantities,
      })
    )
    setPopupVisible(false)
  }

  return (
    <div className='popup-container'>
      <div className='popup-contents'>
        <h2 className='page-header'>Add To Cart</h2>

        <div className='row'>
          <div className='col-3'>
            <img
              src={image}
              alt=''
            />
          </div>
          <div className='col-9'>
            <div className='product-details'>
              <div className='title'>{title}</div>
              <div>{description}</div>
              <div className='price'>Price: {price}</div>
              <div className='quantities-container'>
                <span>Quantities: </span>
                <button
                  onClick={onIncrement}
                  className='btn btn-success btn-sm ms-2'
                >
                  +
                </button>
                <span className='ms-2 me-2'>{quantities} </span>
                <button
                  onClick={onDecrement}
                  className='btn btn-success btn-sm'
                >
                  -
                </button>
              </div>
              <div className='mt-4'>
                <button
                  onClick={onAdd}
                  className='btn btn-success'
                >
                  Add to cart
                </button>
                <button
                  onClick={onCancel}
                  className='btn btn-danger ms-2'
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddToCartPopup
