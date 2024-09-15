import { configureStore } from "@reduxjs/toolkit";
import signupReducer from "./slices/signup";
import signinReducer from "./slices/signin";
import cartReducer from "./slices/cart";

export const store = configureStore({
  reducer: {
    signupReducer,
    signinReducer,
    cartReducer,
  },
});
