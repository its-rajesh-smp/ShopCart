import { createSlice } from "@reduxjs/toolkit";

const userCartReducer = createSlice({
    name: "user/cart",
    initialState: { cartArr: [] },
    reducers: {
        setCart: (state, action) => {
            state.cartArr = action.payload
        },
        increamentQuantity: (state, action) => {
            // Find Is Present
            let isPresent = false
            let newCartArr = state.cartArr.map((cartItem) => {
                if (cartItem.cartId === action.payload.cartId) {
                    cartItem.cartQuantity += 1
                    isPresent = true
                }
                return cartItem
            })

            // If Not Present
            if (isPresent === false) {
                newCartArr = [action.payload, ...newCartArr]
            }

            // Update The State
            state.cartArr = newCartArr
        },
        decreamentQuantity: (state, action) => {
            const newCartArr = state.cartArr.filter((cartItem) => {
                if (cartItem.id === action.payload.id) {
                    cartItem.quantity -= 1
                }
                // If Current Quantity is 1  then remove it because we dont want to store quantity as 0
                if (action.payload.quantity !== 1) {
                    return cartItem
                }
            })

            // Update The State
            state.cartArr = newCartArr
        },
        clearCart: (state, action) => {
            state.cartArr = []
        }
    }
})

export const { setCart, clearCart, increamentQuantity, decreamentQuantity } = userCartReducer.actions
export default userCartReducer