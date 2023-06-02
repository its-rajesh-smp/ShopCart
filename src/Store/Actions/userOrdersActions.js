import axios from "axios"
import { USER } from "../../Firebase/API_URL"
import { setOrders } from "../Reducer/userOrdersReducer"

export const placeUserOrder = (goToOrderSuccess) => {
    return async (dispatch, getState) => {
        try {
            const userEmail = getState().authSlice.userData.email.replace(".", "").replace("@", "")
            const userSelectedAddress = getState().userAddressSlice.selectedAddress
            const userCart = getState().userCartSlice.cartArr

            //   To show order status dynamically i am usnign math.random to generate different order status
            function getRndInteger(min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }
            const randomStatusArr = [
                "ORDER PROCESSING",
                "READY TO DISPATCH",
                "DISPATCHED",
                "ON THE WAY",
                "READY TO RECIVE ON YOUR PLACE",
                "NEAR TO YOU",
                "OUT FOR DELIVERY",
                "DELIVERED",
            ];


            for (let i = 0; i < userCart.length; i++) {
                const currentStatus = randomStatusArr[getRndInteger(0, 7)];
                const orderStatus = {
                    status: currentStatus,
                    orderDate: new Date().toLocaleString(),
                    deliveryDate: new Date().toLocaleString()
                }
                const newSingleOrder = { ...userCart[i], orderStatus: orderStatus, orderAddress: userSelectedAddress }
                await axios.post(`${USER}/${userEmail}/orders.json`, newSingleOrder)
            }

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

            console.log(newOrdersArr);

            dispatch(setOrders(newOrdersArr))
        } catch (error) {
            console.log(error);
        }
    }
}