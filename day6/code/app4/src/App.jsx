import React from 'react'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Home from './pages/Home/Home'

function App() {
  return (
    <div>
      <Routes>
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
          element={<Home />}
        />
      </Routes>

      <ToastContainer />
    </div>
  )
}

export default App
