import axios from "axios";
import { ALL_PRODUCTS } from "../../Firebase/API_URL";
import { setSearchProducts } from "../Reducer/searchProductReducer";

export const searchProduct = (input) => {
  return async (dispatch, getState) => {
    const { data } = await axios.get(`${ALL_PRODUCTS}.json`);
    let objArr = Object.values(data);
    let allProductArr = objArr.reduce((prev, curr) => {
      return [...prev, ...curr];
    }, []);
    dispatch(setSearchProducts(allProductArr));
  };
};
