import { createSlice } from "@reduxjs/toolkit";

const userCartReducer = createSlice({
    name: "user/cart",
    initialState: { cartArr: [] },
    reducers: {
        setCart: (state, action) => {
            state.cartArr = action.payload
        },
        clearCart: (state, action) => {
            state.cartArr = []
        }
    }
})

export const { setCart, clearCart } = userCartReducer.actions
export default userCartReducer