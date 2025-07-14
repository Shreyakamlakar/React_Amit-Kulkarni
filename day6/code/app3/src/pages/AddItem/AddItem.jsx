import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { ToDoItemActions } from '../config/actions'

function AddItem({ dispatch }) {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const onAdd = () => {
    if (title.length == 0) {
      toast.error('Title is mandatory')
    } else if (details.length == 0) {
      toast.error('Details are mandatory')
    } else {
      // send the input to the parent (App) component
      // onSave is the reference to the function defined by App
      dispatch({ type: ToDoItemActions.addItem, item: { title, details } })
    }
  }

  return (
    <div>
      <h2 className='page-header'>Add Item</h2>
      <div className='add-item-form'>
        <div className='mb-3'>
          <label htmlFor=''>Title</label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            type='text'
            className='form-control'
          />
        </div>

        <div className='mb-3'>
          <label htmlFor=''>Details</label>
          <textarea
            onChange={(e) => setDetails(e.target.value)}
            rows={5}
            className='form-control'
          />
        </div>

        <div>
          <button
            onClick={onAdd}
            className='btn btn-success'
          >
            Add
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddItem
