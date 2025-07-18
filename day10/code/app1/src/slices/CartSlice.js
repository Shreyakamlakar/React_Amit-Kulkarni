import { createSlice } from '@reduxjs/toolkit'

const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCartAction: (state, action) => {
      const { id, title, description, image, price, quantity } = action.payload

      // check if the product is already added to the cart
      const index = state.items.findIndex((item) => item.id == id)
      if (index == -1) {
        state.items.push({
          title,
          id,
          description,
          image,
          price,
          quantity,
        })
      }
    },
    removeFromCartAction: (state, action) => {
      const { id } = action.payload

      // check if the product is already added to the cart
      const index = state.items.findIndex((item) => item.id == id)
      if (index != -1) {
        state.items.splice(index, 1)
      }
    },
    updateQuantityOfProduct: (state, action) => {
      const { id, quantity } = action.payload
      const index = state.items.findIndex((item) => item.id == id)
      if (index != -1) {
        state.items[index].quantity = quantity
      }
    },
  },
})

export default CartSlice.reducer
export const {
  addToCartAction,
  removeFromCartAction,
  updateQuantityOfProduct,
} = CartSlice.actions
