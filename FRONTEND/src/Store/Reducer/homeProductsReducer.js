import { createSlice } from "@reduxjs/toolkit";

const homeProductsReducer = createSlice({
    name: "home-category/slider/adds",
    initialState: {
        categoryList: [],
        sliderList: [],
        addsList: [],
    },
    reducers: {
        setHomeProducts: (state, action) => {
            state.categoryList = action.payload.categoryList
            state.sliderList = action.payload.sliderList
            state.addsList = action.payload.addsList
        }
    }
})

export const { setHomeProducts } = homeProductsReducer.actions
export default homeProductsReducer