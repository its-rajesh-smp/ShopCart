import { createSlice } from "@reduxjs/toolkit"

const toggleLoginReducer = createSlice({
    name: "openLogin",
    initialState: { isLoginVisible: false },
    reducers: {
        setLogin: (state) => {
            state.isLoginVisible = !state.isLoginVisible
        }
    }
})

export const { setLogin } = toggleLoginReducer.actions
export default toggleLoginReducer