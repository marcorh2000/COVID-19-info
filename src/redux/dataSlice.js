import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  usState: null,
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    changeUsState: (state, action) => {
      const { usState } = action.payload;
      state.usState = usState;
    },
  },
});

export const { changeUsState } = dataSlice.actions;
export default dataSlice.reducer;
