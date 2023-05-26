import axios from "axios"
import { USER } from "../../Firebase/API_URL"
import { setAddress } from "../Reducer/userAddressReducer"

export const addAddress = (enteredData) => {
    return async (dispatch, getState) => {
        const userEmail = getState().authSlice.userData.email.replace(".", "").replace("@", "")
        const prevAddressArr = getState().userAddressSlice.address
        try {
            const { data } = await axios.post(`${USER}/${userEmail}/address.json`, enteredData)
            const newAddressArr = [...prevAddressArr, { ...enteredData, id: data.name }]
            dispatch(setAddress(newAddressArr))
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


export const editUserAddress = (id, enteredData) => {
    return async (dispatch, getState) => {
        const userEmail = getState().authSlice.userData.email.replace(".", "").replace("@", "")
        const prevAddressArr = getState().userAddressSlice.address
        try {
            await axios.patch(`${USER}/${userEmail}/address/${id}.json`, enteredData)
            const newAddressArr = prevAddressArr.map((addressData) => {
                if (addressData.id === id) {
                    return { ...enteredData, id: id }
                }
                else {
                    return addressData
                }
            })
            dispatch(setAddress(newAddressArr))
        } catch (error) {
            console.log(error);
        }
    }
}