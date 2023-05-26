import { createSlice } from "@reduxjs/toolkit";

const userAddressReducer = createSlice({
    name: "user/Address",
    initialState: { address: [], selectedAddress: {} },
    reducers: {
        setAddress: (state, action) => {
            state.address = action.payload
        },
        selectAddress: (state, action) => {
            state.selectedAddress = action.payload
        }
    }
})

export const { setAddress, selectAddress } = userAddressReducer.actions
export default userAddressReducer