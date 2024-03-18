import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      //Redux Toolkit uses immer (BTS) behind the scene
      //We have to mutate the state
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      // state.items.length = 0; // state = []
      //RTX says either you mutate the state or return the new state
      return { items: [] };
    },
  },
});

//
export const { addItem, removeItem, clearCart } = cartSlice.actions;
//Exporting just one reducer
export default cartSlice.reducer;
