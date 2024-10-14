import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filterData",
  initialState: {
    name: "",
  },
  reducers: {
    setStatusFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { setStatusFilter } = filterSlice.actions;
export default filterSlice.reducer;
