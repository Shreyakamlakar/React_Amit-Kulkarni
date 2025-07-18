import React, { useEffect, useState } from 'react'
import './Products.css'
import { getProducts } from '../../services/products'
import { toast } from 'react-toastify'
import Product from '../../components/Product/Product'
import AddToCartPopup from '../../components/AddToCartPopup/AddToCartPopup'

function Products() {
  const [products, setProducts] = useState([])
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isPopupVisible, setIsPopupVisible] = useState(false)

  const loadProducts = async () => {
    // send the GET request and grab the response
    const result = await getProducts()

    // check if the result is valid
    if (result) {
      console.log(result)
      setProducts(result['products'])
    } else {
      toast.error('error while calling the GET API')
    }
  }

  // const loadProducts = () => {
  //   setProducts(dummyProducts)
  // }

  useEffect(() => {
    // load the products when the Products component is loaded
    loadProducts()
  }, [])

  const onOpenAddToCart = (product) => {
    setSelectedProduct(product)
    setIsPopupVisible(true)
  }

  return (
    <div className='container'>
      <h2 className='page-header'>Products</h2>

      <div className='row'>
        {products.map((product) => {
          return (
            <Product
              setPopupVisible={onOpenAddToCart}
              key={product['id']}
              id={product['id']}
              title={product['title']}
              description={product['description']}
              price={product['price']}
              image={product['thumbnail']}
            />
          )
        })}
      </div>

      {isPopupVisible && (
        <AddToCartPopup
          product={selectedProduct}
          setPopupVisible={setIsPopupVisible}
        />
      )}
    </div>
  )
}

export default Products
