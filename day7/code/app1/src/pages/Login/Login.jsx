import React, { useContext, useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AuthContext } from '../../App'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // get the user information from the AuthContext
  const { setUser } = useContext(AuthContext)

  const navigate = useNavigate()

  const onLogin = () => {
    if (email.length == 0) {
      toast.error('email is mandatory')
    } else if (password.length == 0) {
      toast.error('password is mandatory')
    } else {
      if (email == 'test@test.com' && password == 'test') {
        // call the login api and get the auth token
        sessionStorage.setItem('token', 'dummy-token')
        sessionStorage.setItem('username', 'Amit')
        sessionStorage.setItem('email', 'test@test.com')
        sessionStorage.setItem('address', 'pune')

        //  update the app component state with the user info
        setUser({
          username: 'amit',
          email,
          address: 'pune',
        })

        navigate('/products')
      } else {
        toast.error('invalid email or password')
      }
    }
  }

  return (
    <div className='container'>
      <h2 className='page-header'>Login</h2>
      <div className='login-form'>
        <div className='mb-3'>
          <label htmlFor=''>Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            className='form-control'
          />
        </div>

        <div className='mb-3'>
          <label htmlFor=''>Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            className='form-control'
          />
        </div>

        <div>
          <div className='mb-3'>
            Don't have an account yet? <Link to='/register'>Register here</Link>
          </div>
          <button
            onClick={onLogin}
            className='btn btn-success'
          >
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
