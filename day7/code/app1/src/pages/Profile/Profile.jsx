import React, { useState } from 'react'
import './Profile.css'
import Navbar from '../../components/navbar/Navbar'

function Profile() {
  const [userInfo] = useState({
    username: sessionStorage.getItem('username'),
    email: sessionStorage.getItem('email'),
    address: sessionStorage.getItem('address'),
  })

  return (
    <div>
      <Navbar />
      <h2 className='page-header'>Profile</h2>

      <div className='profile-form container'>
        <div className='mb-3'>
          <label htmlFor=''>User Name</label>
          <input
            type='text'
            readOnly
            value={userInfo.username}
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor=''>Email</label>
          <input
            type='text'
            readOnly
            value={userInfo.email}
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor=''>Address</label>
          <input
            type='text'
            readOnly
            value={userInfo.address}
            className='form-control'
          />
        </div>
      </div>
    </div>
  )
}

export default Profile
