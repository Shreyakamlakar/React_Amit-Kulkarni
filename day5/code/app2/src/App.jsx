import React from 'react'
import Login from './pages/Login/Login'
import { ToastContainer } from 'react-toastify'
import Register from './pages/Register/Register'

function App() {
  return (
    <div>
      <Login />
      {/* <Register /> */}

      <ToastContainer />
    </div>
  )
}

export default App
