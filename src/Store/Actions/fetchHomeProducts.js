import axios from "axios"
import { HOME_PRODUCTS } from "../../Firebase/API_URL"
import { setHomeProducts } from "../Reducer/homeProductsReducer"



/* -------------------------------------------------------------------------- */
/*              FETCH HOME PRODUCTS (CATEGORY/ADDS/SLIDER IMAGES)             */
/* -------------------------------------------------------------------------- */
export const fetchHomeProducts = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${HOME_PRODUCTS}.json`)
            const categoryList = Object.values(data.HomeAllProductCategorie)
            const sliderList = Object.values(data.HomeSliderImage)
            const addsList = Object.values(data.HomeAllProductCover)

            dispatch(setHomeProducts({
                categoryList: categoryList,
                sliderList: sliderList,
                addsList: addsList
            }))
        } catch (error) {
            console.log(error);
        }
    }
}