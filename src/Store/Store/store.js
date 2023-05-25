import { configureStore } from "@reduxjs/toolkit";
import toggleLoginReducer from "../Reducer/toggleLogin";
import authReducer from "../Reducer/authReducer";
import homeProductsReducer from "../Reducer/homeProductsReducer";
import allProductReducer from "../Reducer/allProductReducer";
import currentProductReducer from "../Reducer/currentProductReducer";

const store = configureStore({
    reducer: {
        toggleLoginSlice: toggleLoginReducer.reducer,
        authSlice: authReducer.reducer,
        homeProductSlice: homeProductsReducer.reducer,
        allProductSlice: allProductReducer.reducer,
        currentProductSlice: currentProductReducer.reducer
    }
})

export default store