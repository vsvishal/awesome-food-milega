import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  // This is a big reducer, which will include other small reducers
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
