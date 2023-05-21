import { configureStore } from "@reduxjs/toolkit";
import toggleLoginReducer from "../Reducer/toggleLogin";
import authReducer from "../Reducer/authReducer";

const store = configureStore({
    reducer: {
        toggleLoginSlice: toggleLoginReducer.reducer,
        authSlice: authReducer.reducer
    }
})

export default store