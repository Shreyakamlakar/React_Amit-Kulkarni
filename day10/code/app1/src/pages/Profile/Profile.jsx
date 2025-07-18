import React, { useEffect, useState } from 'react'
import './Profile.css'

function Profile() {
  const [userInfo] = useState({
    username: sessionStorage.getItem('username'),
    email: sessionStorage.getItem('email'),
    address: sessionStorage.getItem('address'),
  })

  // this hook will handle event: component gets loaded
  useEffect(() => {
    // this function gets called on the component loading time
    console.log(`Profile is loaded/mounted`)

    return () => {
      console.log(`Profile is getting unloaded`)
    }
  }, [])

  return (
    <div>
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
