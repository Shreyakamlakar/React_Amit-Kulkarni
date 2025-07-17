import { createSlice } from '@reduxjs/toolkit'

const CounterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 100,
  },
  reducers: {
    incrementAction: (state) => {
      state.value += 1
    },
    decrementAction: (state) => {
      state.value -= 1
    },
    updateValueAction: (state, action) => {
      console.log(action)
      state.value += Number(action.payload)
    },
  },
})

// export the reducer (collection of reducers)
export default CounterSlice.reducer

// export the actions to the other components to update the state
export const { incrementAction, decrementAction, updateValueAction } =
  CounterSlice.actions
