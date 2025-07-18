import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { dummyProducts } from '../mock-data/products'

function ProductDetails1() {
  const [product, setProduct] = useState(null)

  // get all url parameters
  const params = useParams()

  useEffect(() => {
    const { id } = params
    for (const item of dummyProducts) {
      if (item.id == id) {
        setProduct(item)
        break
      }
    }
  }, [])

  return (
    <div>
      <h2>Product Details</h2>
      {product && (
        <div>
          <h3>{product['title']}</h3>
          <div>{product.description}</div>
        </div>
      )}
    </div>
  )
}

export default ProductDetails1
