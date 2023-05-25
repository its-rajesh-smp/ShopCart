import { createSlice } from "@reduxjs/toolkit";

const totalAmoutReducer = createSlice({
    name: "totalAmount/discount",
    initialState: { amountDetails: { totalAmount: 0, totalQuantity: 0 } },
    reducers: {
        setTotal: (state, action) => {
            state.amountDetails = action.payload
        },
        increamentTotal: (state, action) => {
            state.amountDetails.totalAmount += (action.payload.amount * action.payload.quantity)
            state.amountDetails.totalQuantity += action.payload.quantity
        },
        decreamentTotal: (state, action) => {
            state.amountDetails.totalAmount -= (action.payload.amount * action.payload.quantity)
            state.amountDetails.totalQuantity -= action.payload.quantity
        }
    }
})
export const { setTotal, increamentTotal, decreamentTotal } = totalAmoutReducer.actions
export default totalAmoutReducer