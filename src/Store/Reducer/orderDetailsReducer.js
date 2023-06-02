import { createSlice } from "@reduxjs/toolkit";

const orderDetailsReducer = createSlice({
    name: "OrderDetails",
    initialState: { orderData: {} },
    reducers: {
        setOrderDetails: (state, action) => {
            state.orderData = action.payload
        }
    }
})

export default orderDetailsReducer
export const { setOrderDetails } = orderDetailsReducer.actions