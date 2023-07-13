import { createSlice } from "@reduxjs/toolkit";

const authReducer = createSlice({
    name: "auth/userData",
    initialState: {
        isAuth: false,
        email: ""
    },
    reducers: {
        loginUser: (state, action) => {
            state.isAuth = true;
            state.email = action.payload;
        },
        logoutUser: (state) => {
            state.email = "";
            state.isAuth = false;
        }
    }
})


export const { loginUser, logoutUser } = authReducer.actions
export default authReducer