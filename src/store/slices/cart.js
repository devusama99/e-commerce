import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cartStore",
  initialState: {
    cart: [],
  },
  reducers: {
    addItemToCart(state, action) {
      state.cart.push({ ...action.payload, qty: 1 });
    },
    increaseQty(state, action) {
      state.cart = state.cart.map((product) => ({
        ...product,
        qty: action.payload === product.id ? product.qty + 1 : product.qty,
      }));
    },
    decreaseQty(state, action) {
      state.cart = state.cart.map((product) => ({
        ...product,
        qty: action.payload === product.id ? product.qty - 1 : product.qty,
      }));
    },
    removeProductFromCart(state, action) {
      state.cart = state.cart.filter(
        (product) => product.id !== action.payload
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addItemToCart,
  increaseQty,
  decreaseQty,
  removeProductFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
