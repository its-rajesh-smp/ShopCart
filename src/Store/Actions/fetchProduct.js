import axios from "axios"
import { PRODUCT_BY_CATEGORY } from "../../Firebase/API_URL"
import { setProductList } from "../Reducer/allProductReducer"

export const fetchProductsListByCategory = (category) => {
    return async (dispatch, getState) => {
        try {
            const { data } = await axios.get(`${PRODUCT_BY_CATEGORY}/${category}.json`)
            dispatch(setProductList(data))
        } catch (error) {
            console.log(error);
        }
    }
} 