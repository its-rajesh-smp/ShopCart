import axios from "axios"
import { USER } from "../../Firebase/API_URL"
import { increamentQuantity, setCart } from "../Reducer/userCartReducer"
import { setTotalAmount } from "./totalAmountActions"
import { increamentTotal, decreamentTotal } from "../Reducer/totalAmoutReducer"
import formatEmail from "../../Functions/formatEmail"
import { databases } from "../../AppWrite/appwriteconfig"
import { v4 } from "uuid"
import { Query } from "appwrite"


const DATABASEID = "64b00cb6dcee8f83f868"
const CARTID = "64b00cc059876fd2f273"


// Add To Cart
export const addProductInUserCart = (productDetails) => {
    return async (dispatch, getState) => {
        try {
            const userEmail = formatEmail(getState().authSlice.email)


            // Forming Cart Payload
            const cartPayload = { email: userEmail, cartQuantity: 1, productId: productDetails.$id }


            // Storing in Database
            const cartResponse = await databases.createDocument(DATABASEID, CARTID, v4(), cartPayload)


            // Forming Cart Product with cartid & cartQuantity
            const newCartProduct = { cartId: cartResponse.$id, cartQuantity: cartResponse.cartQuantity, ...productDetails }


            // Dispatch
            dispatch(increamentQuantity(newCartProduct))


        } catch (error) {
            console.log(error);
        }
    }
}


// Fetch Cart
export const fetchCart = () => {
    return async (dispatch, getState) => {
        try {
            const userEmail = formatEmail(getState().authSlice.email)

            // Geting cart items of the user
            const { documents: cartResponse } = await databases.listDocuments(DATABASEID, CARTID, [
                Query.equal('email', userEmail)
            ])


            if (cartResponse.length === 0) { return }

            // Forming Fetch Product Id to fetch products 
            const productIdArr = cartResponse.map((cartItem) => cartItem.productId)


            // Fetching products of cart items
            const { documents: productResponse } = await databases.listDocuments('64afc25ef201d64ed376', '64afd414f12ad37e978f', [
                Query.equal('$id', productIdArr)
            ])

            console.log(productResponse);

            const newFinalProductArr = []


            // Mixing Together In O N^2 Time Complexity 
            // ! Need To Be Optimize
            for (let i = 0; i < productIdArr.length; i++) {
                for (let j = 0; j < productIdArr.length; j++) {
                    if (cartResponse[i].productId === productResponse[j].$id) {
                        newFinalProductArr.push({ ...productResponse[j], cartId: cartResponse[i].$id, cartQuantity: cartResponse[i].cartQuantity })
                    }
                }
            }

            // Dispatch
            dispatch(setCart(newFinalProductArr))

        } catch (error) {
            console.log(error);
        }
    }
}


// Increament Quantity
export const increamentCartQuantity = (cartId, quantity, price) => {
    return async (dispatch, getState) => {
        try {

        } catch (error) {
            console.log(error);
        }
    }
}

// Decreament Quantity
export const decreamentCartQuantity = (cartId, quantity, price) => {
    return async (dispatch, getState) => {
        try {

        } catch (error) {
            console.log(error);
        }

    }
}



