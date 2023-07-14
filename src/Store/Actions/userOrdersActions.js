import axios from "axios"
import { USER } from "../../Firebase/API_URL"
import { setOrders } from "../Reducer/userOrdersReducer"
import formatEmail from "../../Functions/formatEmail"
import formatJSON from "../../Functions/formatJSON"
import { databases } from "../../AppWrite/appwriteconfig"
import { v4 } from "uuid"
import { Query } from "appwrite"


const DATABASEID = "64b00cb6dcee8f83f868"
const COLLECTIONID = "64b1009999a48f0771b4"


export const placeUserOrder = (handelOrderSuccess) => {
    return async (dispatch, getState) => {
        try {

            // Getting User Email
            const userEmail = formatEmail(getState().authSlice.email)

            // Getting Selected Order Address
            const userSelectedAddress = getState().userAddressSlice.selectedAddress

            // Getting UserCart
            const userCart = getState().userCartSlice.cartArr

            // Forming A Array Of Promise
            const orderPromise = userCart.map((cartItem) => {
                const newOrderObj = {
                    productId: cartItem.$id,
                    cartQuantity: cartItem.cartQuantity,
                    userEmail: userEmail,
                    deliveryAddress: formatJSON(userSelectedAddress)
                }
                return databases.createDocument(DATABASEID, COLLECTIONID, v4(), newOrderObj)
            })

            // Wait Until All The PRomise Got Resolve
            await Promise.all(orderPromise)

            // Take user to order success page
            handelOrderSuccess()
        } catch (error) {
            console.log(error);
        }
    }
}


export const fetchUserOrders = () => {
    return async (dispatch, getState) => {
        try {
            // Getting User Email
            const userEmail = formatEmail(getState().authSlice.email)

            // Fetching Orders Related to user
            const { documents: userOrderResponse } = await databases.listDocuments(DATABASEID, COLLECTIONID, [
                Query.equal('userEmail', userEmail)
            ])

            // Fetching Products
            let orderProductsIdList = []

            // Changing delivery address JSON to OBJ
            userOrderResponse.forEach((userOrder) => {
                userOrder.deliveryAddress = formatJSON(userOrder.deliveryAddress)
                orderProductsIdList.push(userOrder.productId)
            })

            // Getting Products From Database
            const { documents: productList } = await databases.listDocuments('64afc25ef201d64ed376', '64afd414f12ad37e978f', [
                Query.equal('$id', orderProductsIdList)
            ])


            const finalMixedOrders = []

            // Mixing Both
            for (let i = 0; i < productList.length; i++) {
                for (let j = 0; j < orderProductsIdList.length; j++) {
                    if (productList[i].$id === userOrderResponse[j].productId) {
                        const newDataObj = {
                            ...productList[i],
                            deliveryAddress: userOrderResponse[j].deliveryAddress,
                            cartQuantity: userOrderResponse[j].cartQuantity,
                            orderId: userOrderResponse[j].$id
                        }
                        finalMixedOrders.push(newDataObj)
                    }

                }
            }


            // Dispatch Mixed Array
            dispatch(setOrders(finalMixedOrders))
        } catch (error) {
            console.log(error);
        }
    }
}