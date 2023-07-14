import { decreamentQuantity, increamentQuantity, setCart } from "../Reducer/userCartReducer"
import formatEmail from "../../Functions/formatEmail"
import { databases } from "../../AppWrite/appwriteconfig"
import { v4 } from "uuid"
import { Query } from "appwrite"


const DATABASEID = "64b00cb6dcee8f83f868"
const COLLECTIONID = "64b00cc059876fd2f273"


// Add To Cart
export const addProductInUserCart = (productDetails) => {
    return async (dispatch, getState) => {
        try {
            const userEmail = formatEmail(getState().authSlice.email)


            // Forming Cart Payload
            const cartPayload = { email: userEmail, cartQuantity: 1, productId: productDetails.$id }


            // Storing in Database
            const cartResponse = await databases.createDocument(DATABASEID, COLLECTIONID, v4(), cartPayload)


            // Forming Cart Product with cartid & cartQuantity with product details
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
            const { documents: cartResponse } = await databases.listDocuments(DATABASEID, COLLECTIONID, [
                Query.equal('email', userEmail)
            ])


            if (cartResponse.length === 0) { return }

            // Forming Fetch Product Id Array to Query and fetch products 
            const productIdArr = cartResponse.map((cartItem) => cartItem.productId)


            // Fetching products of cart items
            const { documents: productResponse } = await databases.listDocuments('64afc25ef201d64ed376', '64afd414f12ad37e978f', [
                Query.equal('$id', productIdArr)
            ])


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
export const increamentCartQuantity = (productDetails) => {
    return async (dispatch, getState) => {
        try {

            // Increamenting In Server
            await databases.updateDocument(DATABASEID, COLLECTIONID, productDetails.cartId, { cartQuantity: productDetails.cartQuantity + 1 })

            // Dispatching To Reducer There Increament CartItemQuantity
            dispatch(increamentQuantity(productDetails))

        } catch (error) {
            console.log(error);
        }
    }
}

// Decreament Quantity
export const decreamentCartQuantity = (productDetails) => {
    return async (dispatch, getState) => {
        try {

            if (productDetails.cartQuantity === 1) {
                // If Current Quantity is 1 means after decreament it will 0 so remove from server
                await databases.deleteDocument(DATABASEID, COLLECTIONID, productDetails.cartId)
            }
            else {
                //Else Decreamenting In Server
                await databases.updateDocument(DATABASEID, COLLECTIONID, productDetails.cartId, { cartQuantity: productDetails.cartQuantity - 1 })
            }

            // Dispatching To Reducer There Decreament CartItemQuantity
            dispatch(decreamentQuantity(productDetails))

        } catch (error) {
            console.log(error);
        }

    }
}



