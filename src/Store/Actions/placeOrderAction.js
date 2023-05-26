import axios from "axios"
import { USER } from "../../Firebase/API_URL"

export const placeUserOrder = () => {
    return async (dispatch, getState) => {
        try {
            const userEmail = getState().authSlice.userData.email.replace(".", "").replace("@", "")
            const userSelectedAddress = getState().userAddressSlice.selectedAddress
            const userCart = getState().userCartSlice.cartArr
            const orderObject = { orderAddress: userSelectedAddress, orderItems: userCart }
            await axios.post(`${USER}/${userEmail}/orders.json`, orderObject)
        } catch (error) {
            console.log(error);
        }
    }
}