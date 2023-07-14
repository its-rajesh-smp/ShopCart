import axios from "axios"
import { USER } from "../../Firebase/API_URL"
import { addAddress, editAddress, selectAddress, setAddress } from "../Reducer/userAddressReducer"
import formatEmail from "../../Functions/formatEmail"
import { databases } from "../../AppWrite/appwriteconfig"
import { v4 } from "uuid"
import { Query } from "appwrite"
import { setDelivery } from "../Reducer/checkoutStepReducer"

const DATABASEID = "64b00cb6dcee8f83f868"
const COLLECTIONID = "64b0e7371b9241ca439c"

export const addAddressFun = (newAddressObj, handelShowForm) => {
    return async (dispatch, getState) => {
        const userEmail = formatEmail(getState().authSlice.email)
        try {
            // Adding userEmail in Address Object
            newAddressObj.userEmail = userEmail

            // Storing in database
            const addressResponse = await databases.createDocument(DATABASEID, COLLECTIONID, v4(), newAddressObj)

            // Dispatch To Store
            dispatch(addAddress(addressResponse))

            // After Success Closing The Form
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

            // Fetching User Specific Address Using Query
            const { documents: addressListResponse } = await databases.listDocuments(DATABASEID, COLLECTIONID, [
                Query.equal('userEmail', userEmail)
            ])

            // If No Address Found
            if (!addressListResponse) { return }

            // Dispatch
            dispatch(setAddress(addressListResponse))
        } catch (error) {
            console.log(error);
        }
    }
}


export const editUserAddressFun = (addressId, newAddressObj, handelShowForm) => {
    return async (dispatch, getState) => {
        const userEmail = formatEmail(getState().authSlice.email)

        try {
            // Adding userEmail in Address Object
            newAddressObj.userEmail = userEmail

            // Getting updated response
            const addressResponse = await databases.updateDocument(DATABASEID, COLLECTIONID, addressId, newAddressObj)


            dispatch(editAddress(addressResponse))
            dispatch(selectAddress(addressResponse))
            handelShowForm()
            dispatch(setDelivery())


        } catch (error) {
            console.log(error);
        }
    }
}