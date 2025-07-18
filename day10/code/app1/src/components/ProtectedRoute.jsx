import React, { useContext } from 'react'
import { AuthContext } from '../App'
import Login from '../pages/Login/Login'
import { Navigate } from 'react-router-dom'

function ProtectedRoute({ children }) {
  const { user } = useContext(AuthContext)

  // if user exists, redirect to the children component
  // if user does not exist, then redirect to the Login component
  return user ? children : <Navigate to='/' />
}

export default ProtectedRoute
