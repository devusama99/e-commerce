import { createSlice } from "@reduxjs/toolkit";

export const signupSlice = createSlice({
  name: "signupStore",
  initialState: {},
  reducers: {
    signUp(_, action) {
      console.log(action.payload);
      localStorage.setItem(
        action.payload.email,
        JSON.stringify({
          email: action.payload.email,
          fullname: action.payload.fullname,
          password: action.payload.password,
        })
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { signUp } = signupSlice.actions;

export default signupSlice.reducer;
