import axios from "axios"
import { GET_SINGLE_PRODUCT } from "../../Firebase/API_URL"
import { setCurrentProduct } from "../Reducer/currentProductReducer"

export const fetchCurrentProduct = (category, id) => {
    return async (dispatch, getState) => {
        try {
            const { data } = await axios.get(`${GET_SINGLE_PRODUCT}/${category}/${id}.json`)
            dispatch(setCurrentProduct(data))
        } catch (error) {
            console.log(error);
        }
    }
}