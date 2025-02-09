import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"; // Adjust the path as necessary
import userReducer from "./userSlice"; // Adjust the path as necessary

const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
  },
});

export default store;
