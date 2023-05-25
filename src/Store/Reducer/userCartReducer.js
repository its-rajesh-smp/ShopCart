import { createSlice } from "@reduxjs/toolkit";

const userCartReducer = createSlice({
    name: "user/cart",
    initialState: { cartArr: [] },
    reducers: {
        addToCart: (state, action) => {
            state.cartArr = action.payload
        }
    }
})

export const { addToCart } = userCartReducer.actions
export default userCartReducer