import { configureStore } from "@reduxjs/toolkit";
import toggleLoginReducer from "../Reducer/toggleLogin";
import authReducer from "../Reducer/authReducer";
import homeProductsReducer from "../Reducer/homeProductsReducer";
import currentProductReducer from "../Reducer/currentProductReducer";
import userCartReducer from "../Reducer/userCartReducer";
import totalAmoutReducer from "../Reducer/totalAmoutReducer";
import userAddressReducer from "../Reducer/userAddressReducer";
import checkoutStepReducer from "../Reducer/checkoutStepReducer";
import userOrdersReducer from "../Reducer/userOrdersReducer";
import orderDetailsReducer from "../Reducer/orderDetailsReducer";
import filterSortReducer from "../Reducer/filterSortReducer";
import searchProductReducer from "../Reducer/searchProductReducer";

const store = configureStore({
  reducer: {
    toggleLoginSlice: toggleLoginReducer.reducer,
    authSlice: authReducer.reducer,
    homeProductSlice: homeProductsReducer.reducer,
    currentProductSlice: currentProductReducer.reducer,
    userCartSlice: userCartReducer.reducer,
    totalAmountSlice: totalAmoutReducer.reducer,
    userAddressSlice: userAddressReducer.reducer,
    checkoutStepSlice: checkoutStepReducer.reducer,
    userOrdersSlice: userOrdersReducer.reducer,
    orderDetailsSlice: orderDetailsReducer.reducer,
    filterSortSlice: filterSortReducer.reducer,
    searchProductSlice: searchProductReducer.reducer,
  },
});

export default store;
