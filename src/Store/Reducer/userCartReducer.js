import { createSlice } from "@reduxjs/toolkit";

const userCartReducer = createSlice({
    name: "user/cart",
    initialState: { cartArr: [] },
    reducers: {
        setCart: (state, action) => {
            state.cartArr = action.payload
        }
    }
})

export const { setCart } = userCartReducer.actions
export default userCartReducer