import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  isCartOpen: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);

      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
      
      // Set isCartOpen to true when a product is added to cart
      state.isCartOpen = true;
    },
    removeItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
    resetCart: (state) => {
      state.products = [];
      state.isCartOpen = false; // Reset isCartOpen to false when cart is reset
    },
    toggleCart: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});

export const { addToCart, removeItem, resetCart, toggleCart } = cartSlice.actions;

export default cartSlice.reducer;
