import React, { createContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Cart from './pages/Cart/Cart'
import Products from './pages/Products/Products'
import AddProducts from './pages/AddProduct/AddProducts'
import { ToastContainer } from 'react-toastify'
import Profile from './pages/Profile/Profile'
import ProtectedRoute from './components/ProtectedRoute'
import Error from './pages/Error/Error'
import Home from './pages/Home/Home'
import ProductDetails from './pages/ProductDetails/ProductDetails'

// create a context to store the user info
export const AuthContext = createContext()

function App() {
  const [user, setUser] = useState(null)

  return (
    <div>
      <AuthContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route
            path='*'
            element={<Error />}
          />

          <Route
            path='/'
            element={<Login />}
          />
          <Route
            path='/register'
            element={<Register />}
          />

          <Route
            path='/home'
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          >
            <Route
              path='cart'
              element={<Cart />}
            />
            <Route
              path='products'
              element={<Products />}
            />
            <Route
              path='add-product'
              element={<AddProducts />}
            />
            <Route
              path='profile'
              element={<Profile />}
            />
            <Route
              path='product-details'
              element={<ProductDetails />}
            />
          </Route>
        </Routes>
      </AuthContext.Provider>
      <ToastContainer />
    </div>
  )
}

export default App
