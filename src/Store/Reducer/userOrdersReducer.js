import { createSlice } from "@reduxjs/toolkit";

const userOrdersReducer = createSlice({
    name: "userOrders",
    initialState: { orders: [] },
    reducers: {
        setOrders: (state, action) => {
            state.orders = action.payload
        }
    }
})

export const { setOrders } = userOrdersReducer.actions
export default userOrdersReducer 