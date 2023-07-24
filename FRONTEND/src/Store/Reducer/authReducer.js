import { createSlice } from "@reduxjs/toolkit";

const authReducer = createSlice({
    name: "auth/userData",
    initialState: {
        isAuth: false,
        email: "",
        idToken: ""
    },
    reducers: {
        loginUser: (state, action) => {
            state.isAuth = true;
            state.email = action.payload.email;
            state.idToken = action.payload.idToken
        },
        logoutUser: (state) => {
            state.idToken = ""
            state.email = ""
            state.isAuth = false
        }
    }
})


export const { loginUser, logoutUser } = authReducer.actions
export default authReducer