import React, { useState } from 'react'
import './Login.css'
import { toast } from 'react-toastify'

function Login() {
  // create state member to store user info
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const onChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const onLogin = () => {
    // client side validation
    if (email.length == 0) {
      toast.error('please enter email')
    } else if (password.length == 0) {
      toast.error('please enter password')
    } else {
      console.log(`user info:`)
      console.log(`email = ${email}, password = ${password}`)
    }
  }

  return (
    <div className='container'>
      <h2 className='page-header'>Login</h2>

      <div className='login-form'>
        <div className='mb-3'>
          <label htmlFor=''>Email</label>
          <input
            onChange={onChangeEmail}
            type='email'
            className='form-control'
          />
        </div>

        <div className='mb-3'>
          <label htmlFor=''>Password</label>
          <input
            onChange={onChangePassword}
            type='password'
            className='form-control'
          />
        </div>

        <div>
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
