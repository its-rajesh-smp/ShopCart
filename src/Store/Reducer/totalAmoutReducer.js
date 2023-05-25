import { createSlice } from "@reduxjs/toolkit";

const totalAmoutReducer = createSlice({
    name: "totalAmount/discount",
    initialState: { amountDetails: { totalAmount: 0, totalQuantity: 0 } },
    reducers: {
        setTotal: (state, action) => {
            state.amountDetails = action.payload
        }
    }
})
export const { setTotal } = totalAmoutReducer.actions
export default totalAmoutReducer