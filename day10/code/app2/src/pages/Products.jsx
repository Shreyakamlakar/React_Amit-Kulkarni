import React, { useEffect, useState } from 'react'
import { dummyProducts } from '../mock-data/products'
import { useNavigate } from 'react-router-dom'

function Products() {
  const [items, setItems] = useState([])

  useEffect(() => {
    setItems(dummyProducts)
  }, [])

  // get reference of navigate function
  const navigate = useNavigate()

  const onDetailsUsingUrlParameter = (id) => {
    navigate(`/product-details1/${id}`)
  }

  const onDetailsUsingQueryParameter = (id) => {
    navigate(`/product-details2?id=${id}`)
  }

  return (
    <div>
      <h2>Products</h2>
      {items.map((item) => {
        return (
          <div key={item.id}>
            <div>{item.title}</div>
            <div>{item.price}</div>
            <button
              onClick={() => {
                onDetailsUsingUrlParameter(item.id)
              }}
            >
              show details using url parameter
            </button>
            <button
              onClick={() => {
                onDetailsUsingQueryParameter(item.id)
              }}
            >
              show details using query parameter
            </button>
            <hr />
          </div>
        )
      })}
    </div>
  )
}

export default Products
