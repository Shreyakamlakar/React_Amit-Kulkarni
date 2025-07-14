import React, { useState } from 'react'
import AddItem from './pages/AddItem/AddItem'
import ItemList from './pages/ItemList/ItemList'
import { toast, ToastContainer } from 'react-toastify'

function App() {
  // create a state to maintain the list of todo items
  const [items, setItems] = useState([
    { id: 1, title: 'dummy item 1', details: 'dummy details 1' },
  ])

  // get the inout from AddItem component and add to the list
  const onSave = (item) => {
    setItems([...items, { ...item, id: items.length + 1 }])
  }

  // delete a required todo item
  const onDelete = (id) => {
    // find the index of the item to be deleted
    const index = items.findIndex((item) => item.id == id)

    // check if the item exists
    if (index == -1) {
      toast.error('item does not exist')
    } else {
      // delete the item from items array
      setItems(items.filter((item) => item.id != id))
    }
  }

  return (
    <div className='container'>
      <h1 className='page-header'>ToDo Application</h1>
      <div className='row'>
        <div className='col'>
          <AddItem onSave={onSave} />
        </div>
        <div className='col'>
          <ItemList
            items={items}
            onDelete={onDelete}
          />
        </div>
      </div>

      <ToastContainer />
    </div>
  )
}

export default App
