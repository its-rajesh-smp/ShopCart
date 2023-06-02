import axios from "axios"
import { USER } from "../../Firebase/API_URL"
import { setOrders } from "../Reducer/userOrdersReducer"

export const placeUserOrder = (goToOrderSuccess) => {
    return async (dispatch, getState) => {
        try {
            const userEmail = getState().authSlice.userData.email.replace(".", "").replace("@", "")
            const userSelectedAddress = getState().userAddressSlice.selectedAddress
            const userCart = getState().userCartSlice.cartArr
            const orderStatus = {
                status: "ORDER PROCESSING",
                orderDate: new Date().toLocaleString(),
                deliveryDate: new Date().toLocaleString()
            }
            const orderObject = { orderAddress: userSelectedAddress, orderItems: userCart, orderStatus: orderStatus }
            await axios.post(`${USER}/${userEmail}/orders.json`, orderObject)
            goToOrderSuccess()
        } catch (error) {
            console.log(error);
        }
    }
}


export const fetchUserOrders = () => {
    return async (dispatch, getState) => {
        try {
            const userEmail = getState().authSlice.userData.email.replace(".", "").replace("@", "")
            const { data } = await axios.get(`${USER}/${userEmail}/orders.json`)
            const newOrdersArr = Object.keys(data).map((orderId) => {
                return { orderId: orderId, ...data[orderId] }
            })

            dispatch(setOrders(newOrdersArr))
        } catch (error) {
            console.log(error);
        }
    }
}