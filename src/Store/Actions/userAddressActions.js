import axios from "axios"
import { USER } from "../../Firebase/API_URL"
import { setAddress } from "../Reducer/userAddressReducer"

export const addAddress = (enteredData) => {
    return async (dispatch, getState) => {
        const userEmail = getState().authSlice.userData.email.replace(".", "").replace("@", "")
        try {
            const { data } = await axios.post(`${USER}/${userEmail}/address.json`, { ...enteredData })
        } catch (error) {
            console.log(error);
        }
    }
}



export const fetchUserAddress = () => {
    return async (dispatch, getState) => {
        const userEmail = getState().authSlice.userData.email.replace(".", "").replace("@", "")
        try {
            const { data } = await axios.get(`${USER}/${userEmail}/address.json`)
            const addressArr = Object.keys(data).map((addressKey) => {
                return { ...data[addressKey], id: addressKey }
            })
            dispatch(setAddress(addressArr))
        } catch (error) {
            console.log(error);
        }
    }
}