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

                // Matching and Increamenting The Cart Quantity
                if (cartItem.cartId === action.payload.cartId) {
                    cartItem.cartQuantity += 1
                    isPresent = true
                }
                return cartItem
            })

            // If Not Present Store in cart
            if (isPresent === false) {
                newCartArr = [action.payload, ...newCartArr]
            }

            // Update The State
            state.cartArr = newCartArr
        },
        decreamentQuantity: (state, action) => {
            const newCartArr = state.cartArr.filter((cartItem) => {

                // Matching And Decreamenting the cart quantity
                if (cartItem.cartId === action.payload.cartId) {
                    cartItem.cartQuantity -= 1
                }

                // If Quantity is 0 then not store in the cart array
                if (cartItem.cartQuantity !== 0) {
                    return true
                }
            })

            // Update The State
            state.cartArr = newCartArr
        },
        clearCart: (state) => {
            state.cartArr = []
        }
    }
})

export const { setCart, clearCart, increamentQuantity, decreamentQuantity } = userCartReducer.actions
export default userCartReducer