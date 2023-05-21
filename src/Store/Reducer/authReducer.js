import { createSlice } from "@reduxjs/toolkit";

const authReducer = createSlice({
    name: "auth/userData",
    initialState: {
        isAuth: false
    },
    reducers: {
        loginUser: (state, action) => {
            state.isAuth = true
        }
    }
})


export const { loginUser } = authReducer.actions
export default authReducer