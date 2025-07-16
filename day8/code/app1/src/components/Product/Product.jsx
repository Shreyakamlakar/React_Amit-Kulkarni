import React from 'react'
import './Product.css'
import { useNavigate } from 'react-router-dom'

function Product({ id, title, description, image, price }) {
  const processDescription = () => {
    return description.length > 150
      ? description.substring(0, 150) + '...'
      : description
  }

  const processTitle = () => {
    return title.length > 20 ? title.substring(0, 20) + '...' : title
  }

  // get reference to the navigate function
  const navigate = useNavigate()

  const onDetails = () => {
    // navigate to the product details page
    navigate('/home/product-details', { state: { id, data: [1, 2, 3, 4, 5] } })
  }

  return (
    <div className='col-3 mb-5 product'>
      <div className='card'>
        <img
          onClick={onDetails}
          src={image}
          className='card-img-top thumbnail'
          alt=''
        />

        <div className='card-body'>
          <h5 className='card-title'>{processTitle()}</h5>
          <p className='card-text'>{processDescription()}</p>
          <div className='bottom-container'>
            <div>
              Price: <span className='price'>₹ {price}</span>
            </div>
            <button className='btn btn-success btn-sm'>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
