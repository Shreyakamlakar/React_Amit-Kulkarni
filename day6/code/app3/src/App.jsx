import React, { useReducer } from 'react'
import AddItem from './pages/AddItem/AddItem'
import ItemList from './pages/ItemList/ItemList'
import { toast, ToastContainer } from 'react-toastify'
import { ToDoItemActions } from './pages/config/actions'

function App() {
  // reducer function
  const reducer = (state, action) => {
    switch (action.type) {
      case ToDoItemActions.addItem:
        return {
          ...state,
          items: [
            ...state.items,
            { ...action.item, id: state.items.length + 1 },
          ],
        }
      case ToDoItemActions.deleteItem: {
        // find the index of the item to be deleted
        const index = state.items.findIndex((item) => item.id == action.id)

        // check if the item exists
        if (index == -1) {
          toast.error('item does not exist')
        } else {
          // delete the item from items array
          const newItems = state.items.filter((item) => item.id != action.id)
          return { items: newItems }
        }
      }
    }
  }

  const [state, dispatch] = useReducer(reducer, { items: [] })

  return (
    <div className='container'>
      <h1 className='page-header'>ToDo Application</h1>
      <div className='row'>
        <div className='col'>
          <AddItem dispatch={dispatch} />
        </div>
        <div className='col'>
          <ItemList
            items={state.items}
            dispatch={dispatch}
          />
        </div>
      </div>

      <ToastContainer />
    </div>
  )
}

export default App
