import { setTotal } from "../Reducer/totalAmoutReducer"

export const setTotalAmount = (cartArr) => {
    return (dispatch, getState) => {
        let totalAmount = 0
        let totalQuantity = 0
        cartArr.map((cartProduct) => {
            totalQuantity += cartProduct.quantity
            totalAmount += (cartProduct.price * cartProduct.quantity)
        })
        dispatch(setTotal({ totalAmount: totalAmount, totalQuantity: totalQuantity }))
    }
}
