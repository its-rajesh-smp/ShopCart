import { createSlice } from "@reduxjs/toolkit";

const userAddressReducer = createSlice({
    name: "user/Address",
    initialState: { address: [] },
    reducers: {
        setAddress: (state, action) => {
            state.address = action.payload
        }
    }
})

export const { setAddress } = userAddressReducer.actions
export default userAddressReducer