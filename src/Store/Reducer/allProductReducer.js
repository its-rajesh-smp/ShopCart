import { createSlice } from "@reduxjs/toolkit";

const allProductReducer = createSlice({
    name: "allProducts",
    initialState: {
        allProductList: []
    },
    reducers: {
        setProductList: (state, action) => {
            state.allProductList = action.payload
        }
    }
})


export const { setProductList } = allProductReducer.actions
export default allProductReducer