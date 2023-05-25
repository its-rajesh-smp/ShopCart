import axios from "axios"
import { GET_USER_BY_IDTOKEN, SIGN_IN, SIGN_UP } from "../../Firebase/API_URL"
import { loginUser } from "../Reducer/authReducer"

export const createUserWithEmailAndPass = (enteredData, closeLoginHandeler) => {
    return async (dispatch, getState) => {
        try {
            const { data: authData } = await axios.post(SIGN_UP, { ...enteredData, returnSecureToken: true })
            dispatch(loginUser({ idToken: authData.idToken, userData: { email: authData.email } }))
            localStorage.setItem("shopcart", authData.idToken)
            closeLoginHandeler()
        } catch (error) {
            console.log(error);
        }

    }
}





export const loginUserWithEmailAndPass = (enteredData, closeLoginHandeler) => {
    return async (dispatch, getState) => {
        try {
            const { data: authData } = await axios.post(SIGN_IN, { ...enteredData, returnSecureToken: true })
            dispatch(loginUser({ idToken: authData.idToken, userData: { email: authData.email } }))
            localStorage.setItem("shopcart", authData.idToken)
            closeLoginHandeler()
        } catch (error) {
            console.log(error);
        }
    }
}




export const fetchUserOnLoadUsingIdToken = () => {
    return async (dispatch, getState) => {
        try {
            const localIdToken = localStorage.getItem("shopcart")
            if (!localIdToken) { return }
            const { data: authData } = await axios.post(GET_USER_BY_IDTOKEN, { idToken: localIdToken })
            dispatch(loginUser({ idToken: authData.idToken, userData: { email: authData.email } }))
        } catch (error) {
            console.log(error);
        }
    }
}