import axios from "axios"
import { USER } from "../../Firebase/API_URL"
import { setOrderDetails } from "../Reducer/orderDetailsReducer"

export const fetchOrderDetailsAct = (orderId, setLoader) => {
    return async (dispatch, getState) => {
        try {
            const userEmail = getState().authSlice.userData.email.replace(".", "").replace("@", "")
            const { data } = await axios.get(`${USER}/${userEmail}/orders/${orderId}.json`)
            dispatch(setOrderDetails(data))
            setLoader(false)
        } catch (error) {
            console.log(error);
        }
    }
}