import React, { useState } from 'react'
import './TodoItem.css'

function TodoItem({ id, title, details, onDelete }) {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div className='item'>
      <div
        onClick={() => setIsVisible(!isVisible)}
        className='title'
      >
        {title}
      </div>
      {isVisible && <div className='details'>{details}</div>}

      <button
        onClick={() => onDelete(id)}
        className='btn btn-danger btn-sm delete'
      >
        delete
      </button>
    </div>
  )
}

export default TodoItem
