import React, { useState } from 'react'
import './TodoItem.css'
import { ToDoItemActions } from '../../pages/config/actions'

function TodoItem({ id, title, details, dispatch }) {
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
        onClick={() => dispatch({ type: ToDoItemActions.deleteItem, id })}
        className='btn btn-danger btn-sm delete'
      >
        delete
      </button>
    </div>
  )
}

export default TodoItem
