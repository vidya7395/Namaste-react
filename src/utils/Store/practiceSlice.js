import { createSlice } from "@reduxjs/toolkit";

const practiceSlice = createSlice({
  name: "SomeName",
  initialState: {
    array: ["one. two"],
  },
  reducers: {
    addItem: (state, action) => {
      console.log("Do southing");
    },
  },
});
export const { addItem } = practiceSlice.actions;
export default practiceSlice.reducer;
