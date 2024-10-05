import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.items.find(
        item => item._id === action.payload._id && item.variation === action.payload.variation
      );

      if (existingProduct) {
        // If the product already exists, increase the quantity, but respect minimum
        existingProduct.quantity += 1;
        existingProduct.totalPrice = existingProduct.quantity * existingProduct.price;
      } else {
        // If the product doesn't exist, add it to the cart with a minimum quantity if specified
        const quantityToAdd = action.payload.minimum || 1; // Set to minimum if exists, otherwise 1
        state.items.push({
          ...action.payload,
          quantity: quantityToAdd,
          totalPrice: action.payload.price * quantityToAdd,
        });
      }
    },
    increaseQuantity: (state, action) => {
      const item = state.items.find(
        item => item._id === action.payload._id && item.variation === action.payload.variation
      );
      if (item) {
        item.quantity += 1;
        item.totalPrice = item.quantity * item.price;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find(
        item => item._id === action.payload._id && item.variation === action.payload.variation
      );
      if (item && item.quantity > (item.minimum || 1)) { // Respect minimum quantity
        item.quantity -= 1;
        item.totalPrice = item.quantity * item.price;
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        item => !(item._id === action.payload._id && item.variation === action.payload.variation)
      );
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
