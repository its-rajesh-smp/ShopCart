import { createSlice } from "@reduxjs/toolkit";

const filterSortReducer=createSlice({
    name:"sort/Filter",
    initialState:{
        filter:{minPrice: "",
        maxPrice: "",
        rating: "",
        
    }
    },
    reducers:{
        setFilter:(state,action)=>{
            state.filter= {...state.filter , ...action.payload}
        },
        clearFilter:(state,action)=>{
            state.filter= {minPrice: "",maxPrice: "",rating: ""}
        }
    }
})


export const {setFilter,clearFilter}=filterSortReducer.actions
export default filterSortReducer