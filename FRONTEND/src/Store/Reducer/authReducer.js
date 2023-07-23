import { createSlice } from "@reduxjs/toolkit";

const authReducer = createSlice({
    name: "auth/userData",
    initialState: {
        isAuth: false,
        userData: {},
        idToken: ""
    },
    reducers: {
        loginUser: (state, action) => {
            state.isAuth = true,
                state.userData = action.payload.userData,
                state.idToken = action.payload.idToken
        },
        logoutUser: (state) => {
            state.idToken = ""
            state.userData = {}
            state.isAuth = false
        }
    }
})


export const { loginUser, logoutUser } = authReducer.actions
export default authReducer