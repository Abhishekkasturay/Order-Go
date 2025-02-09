import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    userDetails: null,
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.userDetails = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.userDetails = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
