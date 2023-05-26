import axios from "axios"
import { USER } from "../../Firebase/API_URL"

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