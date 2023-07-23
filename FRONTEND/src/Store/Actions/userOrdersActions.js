import axios from "axios"
import { USER } from "../../Firebase/API_URL"
import { setOrders } from "../Reducer/userOrdersReducer"
import { clearCart } from "../Reducer/userCartReducer"
import { clearTotal } from "../Reducer/totalAmoutReducer"
import { goToFirstStep } from "../Reducer/checkoutStepReducer"

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
            const priorityStatus = [8, 7, 6, 5, 4, 3, 2, 1, 0]

            for (let i = 0; i < userCart.length; i++) {
                const randomStatusCode = getRndInteger(0, 7)
                const currentStatus = randomStatusArr[randomStatusCode];
                const currentStatusCode = priorityStatus[randomStatusCode]

                const orderStatus = {
                    status: currentStatus,
                    statusCode: currentStatusCode,
                    orderDate: new Date().toLocaleString(),
                    deliveryDate: new Date().toLocaleString()
                }
                const newSingleOrder = { ...userCart[i], orderStatus: orderStatus, orderAddress: userSelectedAddress }
                await axios.post(`${USER}/${userEmail}/orders.json`, newSingleOrder)
                await axios.delete(`${USER}/${userEmail}/cart.json`)
            }
            dispatch(clearCart())
            dispatch(clearTotal())
            dispatch(goToFirstStep())
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

            newOrdersArr.reverse()
            newOrdersArr.sort((a, b) => a.orderStatus.statusCode - b.orderStatus.statusCode)


            dispatch(setOrders(newOrdersArr))
        } catch (error) {
            console.log(error);
        }
    }
}