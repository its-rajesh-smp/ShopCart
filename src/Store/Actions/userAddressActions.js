import axios from "axios"
import { USER } from "../../Firebase/API_URL"
import { addAddress, setAddress } from "../Reducer/userAddressReducer"
import formatEmail from "../../Functions/formatEmail"
import { databases } from "../../AppWrite/appwriteconfig"
import { v4 } from "uuid"
import { Query } from "appwrite"

const DATABASEID = "64b00cb6dcee8f83f868"
const COLLECTIONID = "64b0e7371b9241ca439c"

export const addAddressFun = (newAddressObj, handelShowForm) => {
    return async (dispatch, getState) => {
        const userEmail = formatEmail(getState().authSlice.email)
        try {
            newAddressObj.userEmail = userEmail
            const addressResponse = await databases.createDocument(DATABASEID, COLLECTIONID, v4(), newAddressObj)
            dispatch(addAddress(addressResponse))
            handelShowForm()

        } catch (error) {
            console.log(error);
        }
    }
}



export const fetchUserAddress = () => {
    return async (dispatch, getState) => {
        const userEmail = formatEmail(getState().authSlice.email)
        try {

            const { documents: addressListResponse } = await databases.listDocuments(DATABASEID, COLLECTIONID, [
                Query.equal('userEmail', userEmail)
            ])

            if (!addressListResponse) { return }

            dispatch(setAddress(addressListResponse))


            // dispatch(setAddress(addressArr))
        } catch (error) {
            console.log(error);
        }
    }
}


export const editUserAddress = (id, enteredData, onClickSaveDeliver) => {
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
            onClickSaveDeliver({ ...enteredData, id: id })
        } catch (error) {
            console.log(error);
        }
    }
}