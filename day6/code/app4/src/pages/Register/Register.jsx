import React, { useState } from 'react'
import './Register.css'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

function Register() {
  // create state members to get input from user
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const onRegister = () => {
    if (userInfo.firstName.length == 0) {
      toast.error('please enter first name')
    } else if (userInfo.lastName.length == 0) {
      toast.error('please enter last name')
    } else if (userInfo.email.length == 0) {
      toast.error('please enter email')
    } else if (userInfo.password.length == 0) {
      toast.error('please enter password')
    } else if (userInfo.confirmPassword.length == 0) {
      toast.error('please confirm the password')
    } else if (userInfo.password != userInfo.confirmPassword) {
      toast.error('password does not match')
    } else {
      console.log(`user info`, userInfo)
    }
  }

  return (
    <div className='container'>
      <h2 className='page-header'>Register</h2>
      <div className='register-form'>
        <div className='mb-3'>
          <label htmlFor=''>First Name</label>
          <input
            onChange={(e) =>
              setUserInfo({ ...userInfo, firstName: e.target.value })
            }
            type='text'
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor=''>Last Name</label>
          <input
            onChange={(e) =>
              setUserInfo({ ...userInfo, lastName: e.target.value })
            }
            type='text'
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor=''>Email</label>
          <input
            onChange={(e) =>
              setUserInfo({ ...userInfo, email: e.target.value })
            }
            type='text'
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor=''>Password</label>
          <input
            onChange={(e) =>
              setUserInfo({ ...userInfo, password: e.target.value })
            }
            type='password'
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor=''>Confirm Password</label>
          <input
            onChange={(e) =>
              setUserInfo({ ...userInfo, confirmPassword: e.target.value })
            }
            type='password'
            className='form-control'
          />
        </div>
        <div>
          <div className='mb-3'>
            Already have account? <Link to='/'>Login here</Link>
          </div>
          <button
            onClick={onRegister}
            className='btn btn-success'
          >
            Register
          </button>
        </div>
      </div>
    </div>
  )
}

export default Register
