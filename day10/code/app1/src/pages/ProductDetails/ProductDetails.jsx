import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getProductDetails } from '../../services/products'
import { toast } from 'react-toastify'
import Review from '../../components/Review/Review'

function ProductDetails() {
  const [product, setProduct] = useState(null)

  // get the details sent by previous page
  const location = useLocation()

  const loadProductDetails = async (id) => {
    // send the request to load the product details
    const result = await getProductDetails(id)
    if (result) {
      setProduct(result)
    } else {
      toast.error('Error while loading the product details')
    }
  }

  useEffect(() => {
    // get the id sent by the previous page
    const { id, data } = location.state
    loadProductDetails(id)
    console.log(`data: `, data)
  }, [])

  return (
    <div className='container'>
      {product && (
        <div>
          <div className='row mt-3'>
            <div className='col-3'>
              {product['images'].length > 0 && (
                <img
                  style={{ width: '100%' }}
                  src={product['images'][0]}
                  alt=''
                />
              )}
            </div>
            <div className='col-9'>
              <h3>{product['title']}</h3>
              <div className='brand'>{product['brand']}</div>
              <div className='description'>{product['description']}</div>
              <div>
                Price: ₹<span className='price'>{product['price']}</span>
              </div>
              <div>Rating: {product['rating']}/5</div>
              <div className='mt-4'>
                <h4>Product Reviews</h4>
                {product['reviews'].map((review, index) => {
                  return (
                    <Review
                      key={index}
                      username={review['reviewerName']}
                      email={review['reviewerEmail']}
                      date={review['date']}
                      comment={review['comment']}
                    />
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductDetails
