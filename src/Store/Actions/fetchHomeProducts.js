import { setHomeProducts } from "../Reducer/homeProductsReducer"
import { databases } from "../../AppWrite/appwriteconfig"


/* -------------------------------------------------------------------------- */
/*              FETCH HOME PRODUCTS (CATEGORY/ADDS/SLIDER IMAGES)             */
/* -------------------------------------------------------------------------- */
export const fetchHomeProducts = (setLoader) => {
    return async (dispatch) => {
        try {
            // Getting Response
            const categoryResponse = await databases.listDocuments('64afb32e65cedbcc3628', '64afb36fc36271a3232d')
            const addsResponse = await databases.listDocuments('64afb32e65cedbcc3628', '64afb9093df024cdb318')
            const sliderResponse = await databases.listDocuments('64afb32e65cedbcc3628', '64afba0903227e051c5e')


            // Creating Final Object
            const finalResponseObj = {
                categoryList: categoryResponse.documents,
                sliderList: sliderResponse.documents,
                addsList: addsResponse.documents
            }

            console.log(finalResponseObj);

            // Send To Reducer
            dispatch(setHomeProducts(finalResponseObj))

            // Set User Loader False
            setLoader(p => {
                return { ...p, userLoader: false }
            })
        } catch (error) {
            console.log(error);
        }
    }
}