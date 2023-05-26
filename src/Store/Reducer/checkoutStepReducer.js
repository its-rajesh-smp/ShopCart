import { createSlice } from "@reduxjs/toolkit";

const checkoutStepReducer = createSlice({
    name: "checkout-Steps",
    initialState: { deliveryAddress: true, cart: false, payment: false, showShadowDelivery: false, showShadowCart: false },
    reducers: {
        setDelivery: (state) => {
            state.deliveryAddress = false
            state.cart = true
            state.showShadowDelivery = true
        },
        setCart: (state) => {
            state.cart = false
            state.payment = true
            state.showShadowCart = true
        },
        setPayment: (state) => {

        }
    }
})

export const { setCart, setDelivery, setPayment } = checkoutStepReducer.actions
export default checkoutStepReducer
