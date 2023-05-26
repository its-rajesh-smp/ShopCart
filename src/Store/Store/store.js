import { configureStore } from "@reduxjs/toolkit";
import toggleLoginReducer from "../Reducer/toggleLogin";
import authReducer from "../Reducer/authReducer";
import homeProductsReducer from "../Reducer/homeProductsReducer";
import allProductReducer from "../Reducer/allProductReducer";
import currentProductReducer from "../Reducer/currentProductReducer";
import userCartReducer from "../Reducer/userCartReducer";
import totalAmoutReducer from "../Reducer/totalAmoutReducer";
import userAddressReducer from "../Reducer/userAddressReducer";
import checkoutStepReducer from "../Reducer/checkoutStepReducer";
import userOrdersReducer from "../Reducer/userOrdersReducer";

const store = configureStore({
    reducer: {
        toggleLoginSlice: toggleLoginReducer.reducer,
        authSlice: authReducer.reducer,
        homeProductSlice: homeProductsReducer.reducer,
        allProductSlice: allProductReducer.reducer,
        currentProductSlice: currentProductReducer.reducer,
        userCartSlice: userCartReducer.reducer,
        totalAmountSlice: totalAmoutReducer.reducer,
        userAddressSlice: userAddressReducer.reducer,
        checkoutStepSlice: checkoutStepReducer.reducer,
        userOrdersSlice: userOrdersReducer.reducer
    }
})

export default store