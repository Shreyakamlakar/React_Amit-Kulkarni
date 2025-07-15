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
            path='/cart'
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
          <Route
            path='/products'
            element={
              <ProtectedRoute>
                <Products />
              </ProtectedRoute>
            }
          />
          <Route
            path='/add-product'
            element={
              <ProtectedRoute>
                <AddProducts />
              </ProtectedRoute>
            }
          />
          <Route
            path='/profile'
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContext.Provider>
      <ToastContainer />
    </div>
  )
}

export default App
