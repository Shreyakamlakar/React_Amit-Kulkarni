import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate()

  const onLogout = () => {
    // clear the session storage
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('username')
    sessionStorage.removeItem('email')
    sessionStorage.removeItem('address')

    // sessionStorage.clear()

    // update the App component state by removing the logged in user
    // setUser(null)

    // navigate to the login page
    navigate('/')
  }

  return (
    <nav
      className='navbar navbar-expand-lg bg-primary'
      data-bs-theme='dark'
    >
      <div className='container-fluid'>
        <Link
          className='navbar-brand'
          to='/home/products'
        >
          MyApp
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className='collapse navbar-collapse'
          id='navbarNavAltMarkup'
        >
          <div className='navbar-nav'>
            <Link
              className='nav-link'
              aria-current='page'
              to='/home/products'
            >
              Products
            </Link>
            <Link
              className='nav-link'
              to='/home/add-product'
            >
              Add Product
            </Link>
            <Link
              className='nav-link'
              to='/home/cart'
            >
              Cart
            </Link>
            <Link
              className='nav-link'
              to='/home/profile'
            >
              Profile
            </Link>
            <button
              onClick={onLogout}
              className='nav-link'
              aria-disabled='true'
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
