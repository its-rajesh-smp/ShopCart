import { createSlice } from "@reduxjs/toolkit";

const currentProductReducer = createSlice({
    name: "currentProduct",
    initialState: {
        productData: {
            images: []
        }
    },
    reducers: {
        setCurrentProduct: (state, action) => {
            state.productData = action.payload
        }
    }
})

export const { setCurrentProduct } = currentProductReducer.actions
export default currentProductReducer