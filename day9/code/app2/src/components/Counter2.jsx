import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  decrementAction,
  incrementAction,
  updateValueAction,
} from '../slices/CounterSlice'

function Counter2() {
  // get the store and return required slice
  const { value } = useSelector((store) => store.counter)
  const [incrementBy, serIncrementBy] = useState(1)

  // get the reference of dispatch function
  const dispatch = useDispatch()

  const onIncrement = () => {
    dispatch(incrementAction())
  }

  const onDecrement = () => {
    dispatch(decrementAction())
  }

  const onUpdateValue = () => {
    dispatch(updateValueAction(incrementBy))
  }

  return (
    <div>
      <h2>Counter2</h2>

      <div>
        <button onClick={onIncrement}>+</button>
        <div>counter = {value}</div>
        <button onClick={onDecrement}>-</button>
        <div>
          <label htmlFor=''>increment by: </label>
          <input
            type='number'
            onChange={(e) => serIncrementBy(e.target.value)}
          />
        </div>
        <button onClick={onUpdateValue}>update value</button>
      </div>
    </div>
  )
}

export default Counter2
