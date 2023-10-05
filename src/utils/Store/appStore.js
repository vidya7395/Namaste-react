import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import practiceSomething from "./practiceSlice";
const appStore = configureStore({
  // this is basically the important, is use to modify the app store
  reducer: {
    cart: cartReducer,
    practice: practiceSomething,
  },
});

export default appStore;
