import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from './slices/CounterSlice'

export const store = configureStore({
  reducer: {
    // the counter slide is part of the store
    counter: CounterSlice,
  },
})
