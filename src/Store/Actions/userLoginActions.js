import axios from "axios"
import { SIGN_UP } from "../../Firebase/API_URL"

export const createUserWithEmailAndPass = (enteredData) => {
    return async (dispatch, getState) => {
        try {
            const { data: authData } = await axios.post(SIGN_UP, { ...enteredData, returnSecureToken: true })
            console.log(authData);
        } catch (error) {
            console.log(error);
        }

    }
}