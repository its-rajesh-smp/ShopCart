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
        goToFirstStep: (state) => {
            state.deliveryAddress = true
            state.cart = false
            state.payment = false
            state.showShadowDelivery = false
            state.showShadowCart = false
        },
        goToSecondStep: (state) => {
            state.deliveryAddress = false
            state.cart = true
            state.payment = false
            state.showShadowDelivery = true
            state.showShadowCart = false
        }
    }
})

export const { setCart, setDelivery, goToFirstStep, goToSecondStep } = checkoutStepReducer.actions
export default checkoutStepReducer
