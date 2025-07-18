import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { dummyProducts } from '../mock-data/products'

function ProductDetails2() {
  // get all query parameters
  const [params, setParams] = useSearchParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    const id = params.get('id')
    console.log(`id = ${id}`)
    for (const item of dummyProducts) {
      if (item.id == id) {
        setProduct(item)
        break
      }
    }
  }, [])

  return (
    <div>
      <h2>Product Details 2</h2>
      {product && (
        <div>
          <h3>{product['title']}</h3>
          <div>{product.description}</div>
        </div>
      )}
    </div>
  )
}

export default ProductDetails2
