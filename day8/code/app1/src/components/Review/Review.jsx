import React from 'react'

function Review({ date, comment, username, email }) {
  return (
    <div>
      <div>date: {date}</div>
      <div>
        {username} ({email})
      </div>
      <div className='comment'>{comment}</div>
      <hr />
    </div>
  )
}

export default Review
