import axios from "axios"
import { USER } from "../../Firebase/API_URL"
import { setCart } from "../Reducer/userCartReducer"

export const addProductInUserCart = (product) => {
    return async (dispatch, getState) => {
        try {
            const userEmail = getState().authSlice.userData.email.replace(".", "").replace("@", "")
            const currentCart = getState().userCartSlice.cartArr

            let isPresent = false
            let updatedQuantity = 1
            let cartProductId = ""

            const filteredCart = currentCart.map((cartProduct) => {
                if (cartProduct.id === product.id) {
                    isPresent = true
                    cartProductId = cartProduct.cartId
                    updatedQuantity = cartProduct.quantity + 1
                    return { ...cartProduct, quantity: updatedQuantity }
                }
                return cartProduct
            })

            if (isPresent === true) {
                const { data } = await axios.patch(`${USER}/${userEmail}/cart/${cartProductId}.json`, { quantity: updatedQuantity })
                dispatch(setCart(filteredCart))
            }
            else {
                const { data } = await axios.post(`${USER}/${userEmail}/cart.json`, { ...product, quantity: updatedQuantity })
                const newCartProduct = { ...product, cartId: data.name, quantity: 1 }
                dispatch(setCart([...filteredCart, newCartProduct]))
            }
        } catch (error) {
            console.log(error);
        }
    }
}



export const fetchCart = (email) => {
    return async (dispatch) => {
        try {
            const userEmail = email.replace(".", "").replace("@", "")
            const { data: cartArr } = await axios.get(`${USER}/${userEmail}/cart.json`)
            dispatch(setCart(cartArr))
        } catch (error) {
            console.log(error);
        }
    }
}