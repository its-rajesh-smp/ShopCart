import { createSlice } from "@reduxjs/toolkit";

const filterSortReducer=createSlice({
    name:"sort/Filter",
    initialState:{
        filter:{minPrice: "MIN",
        maxPrice: "MAX",
        rating: "NO",
        
    }
    },
    reducers:{
        setFilter:(state,action)=>{
            state.filter= {...state.filter , ...action.payload}
        },
        clearFilter:(state,action)=>{
            state.filter= {minPrice: "MIN",maxPrice: "MAX",rating: "NO"}
        }
    }
})


export const {setFilter,clearFilter}=filterSortReducer.actions
export default filterSortReducer