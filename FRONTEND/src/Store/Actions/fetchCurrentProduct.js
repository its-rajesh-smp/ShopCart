import axios from "axios";
import { GET_SINGLE_PRODUCT } from "../../Firebase/API_URL";
import { setCurrentProduct } from "../Reducer/currentProductReducer";

export const fetchCurrentProduct = (category, id) => {
  return async (dispatch, getState) => {
    try {
      const { data } = await axios.get(
        `${GET_SINGLE_PRODUCT}/${category}/${id}.json`
      );
      dispatch(setCurrentProduct(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const addNewProductReview = (
  inputData,
  productData,
  setReviews,
  setReviewInput,
  setLoader
) => {
  return async (dispatch, getState) => {
    const userName = getState().authSlice.userData.email;
    const productCategory = productData.category;
    const productId = productData.id;
    const reviewData = {
      ...inputData,
      date: new Date().toLocaleDateString(),
      userName: userName,
    };

    try {
      const { data } = await axios.post(
        `${GET_SINGLE_PRODUCT}/${productCategory}/${productId}/review.json`,
        reviewData
      );
      setReviews((p) => {
        return [...p, { ...reviewData, key: data.name }];
      });
      setReviewInput("");
    } catch (error) {
      console.log(error);
    }
    setLoader(false);
  };
};
