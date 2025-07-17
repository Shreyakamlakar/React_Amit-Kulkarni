import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div>
      <h1 className='page-header'>Error Page</h1>
      <h3 className='page-header'>
        The page you are trying to load does not exist, please{' '}
        <Link to='/'>login here</Link>
      </h3>
    </div>
  )
}

export default Error
