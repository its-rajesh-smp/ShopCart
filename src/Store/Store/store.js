import { configureStore } from "@reduxjs/toolkit";
import toggleLoginReducer from "../Reducer/toggleLogin";
import authReducer from "../Reducer/authReducer";
import homeProductsReducer from "../Reducer/homeProductsReducer";

const store = configureStore({
    reducer: {
        toggleLoginSlice: toggleLoginReducer.reducer,
        authSlice: authReducer.reducer,
        homeProductSlice: homeProductsReducer.reducer
    }
})

export default store