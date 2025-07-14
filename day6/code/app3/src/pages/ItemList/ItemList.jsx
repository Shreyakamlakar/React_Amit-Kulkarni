import React from 'react'
import './ItemList.css'
import TodoItem from '../../components/TodoItem/TodoItem'

function ItemList({ items, dispatch }) {
  return (
    <div>
      <h2 className='page-header'>ToDo Item List</h2>

      {/* conditional rendering  */}
      {items.length == 0 && (
        <h3 className='page-header'>
          There are not items to render at the moment
        </h3>
      )}

      {items.map((item) => {
        return (
          <TodoItem
            key={item.id}
            id={item.id}
            title={item.title}
            details={item.details}
            dispatch={dispatch}
          />
        )
      })}
    </div>
  )
}

export default ItemList
