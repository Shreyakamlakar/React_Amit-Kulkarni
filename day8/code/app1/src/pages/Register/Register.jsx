import React from 'react'
import './Register.css'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className='container'>
      <h2 className='page-header'>Register</h2>

      <div className='register-form'>
        <div className='mb-3'>
          <label htmlFor=''>Name</label>
          <input
            type='text'
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor=''>Email</label>
          <input
            type='email'
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor=''>Phone Number</label>
          <input
            type='tel'
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor=''>Password</label>
          <input
            type='password'
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor=''>Confirm Password</label>
          <input
            type='password'
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <div className='mb-3'>
            Already have an account? <Link to='/'>Login here</Link>
          </div>
          <button className='btn btn-success'>Register</button>
        </div>
      </div>
    </div>
  )
}

export default Register
