import React from 'react'
import Products from './pages/Products'
import { Route, Routes } from 'react-router-dom'
import ProductDetails1 from './pages/ProductDetails1'
import ProductDetails2 from './pages/ProductDetails2'

function App() {
  return (
    <div>
      <Routes>
        <Route
          path='/'
          element={<Products />}
        />
        <Route
          path='/product-details1/:id'
          element={<ProductDetails1 />}
        />
        <Route
          path='/product-details2/'
          element={<ProductDetails2 />}
        />
      </Routes>
    </div>
  )
}

export default App
