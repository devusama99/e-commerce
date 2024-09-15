import { createSlice } from "@reduxjs/toolkit";

export const signinSlice = createSlice({
  name: "signinStore",
  initialState: {
    alert: {
      code: 404,
      message: "User not found",
    },
    alertShow: false,
  },
  reducers: {
    signIn(state, action) {
      const user = JSON.parse(localStorage.getItem(action.payload.email));
      state.alertShow = true;

      if (user) {
        if (user.password === action.payload.password) {
          localStorage.setItem("activeUser", user);

          state.alert = {
            code: 200,
            message: "Logged in succesfully",
          };
        } else {
          state.alert = {
            code: 401,
            message: "Incorrect password please try again",
          };
        }
      } else {
        state.alert = {
          message: "User not found",
          code: 404,
        };
      }
      state.alertShow = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { signIn } = signinSlice.actions;

export default signinSlice.reducer;
