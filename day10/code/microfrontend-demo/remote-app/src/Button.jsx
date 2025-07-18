import React from 'react'

function Button({ title, onClick }) {
  return (
    <div>
      <button
        onClick={onClick}
        style={{ backgroundColor: 'green', color: 'white' }}
      >
        {title}
      </button>
    </div>
  )
}

export default Button
