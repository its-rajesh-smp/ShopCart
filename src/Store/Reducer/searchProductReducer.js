import { createSlice } from "@reduxjs/toolkit";

const searchProductReducer = createSlice({
  name: "searchProducts",
  initialState: { searchProductArr: [] },
  reducers: {
    setSearchProducts: (state, action) => {
      state.searchProductArr = action.payload;
    },
  },
});

export const { setSearchProducts } = searchProductReducer.actions;
export default searchProductReducer;
