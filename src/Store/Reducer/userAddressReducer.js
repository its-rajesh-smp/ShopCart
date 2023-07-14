import { createSlice } from "@reduxjs/toolkit";

const userAddressReducer = createSlice({
    name: "user/Address",
    initialState: { address: [], selectedAddress: {} },
    reducers: {
        setAddress: (state, action) => {
            state.address = action.payload
        },
        addAddress: (state, action) => {
            // Creating New Array With New Address
            const newAddressArr = [action.payload, ...state.address]

            // Changing The State
            state.address = newAddressArr
        },
        editAddress: (state, action) => {
            // Search In Array And Store New Edited address insted Old one
            let newAddressArr = state.address.map((address) => {
                if (address.$id === action.payload.$id) {
                    return action.payload
                }
                return address
            })


            // Changing The State
            state.address = newAddressArr
        },
        deleteAddress: (state, action) => {
            // Filtering The Address To Be Remove
            let newAddressArr = state.address.filter((address) => {
                if (address.$id !== action.payload.$id) {
                    return true
                }
            })

            // Changing The State
            state.address = newAddressArr
        },
        selectAddress: (state, action) => {
            // Selected Address For Order
            state.selectedAddress = action.payload
        }
    }
})

export const { setAddress, selectAddress, addAddress, editAddress } = userAddressReducer.actions
export default userAddressReducer