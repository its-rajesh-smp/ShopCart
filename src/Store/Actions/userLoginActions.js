import axios from "axios";
import { GET_USER_BY_IDTOKEN, SIGN_IN, SIGN_UP } from "../../Firebase/API_URL";
import { loginUser } from "../Reducer/authReducer";
import { fetchCart } from "./userCartActions";
import { fetchUserOrders } from "./userOrdersActions";

export const createUserWithEmailAndPass = (
  enteredData,
  closeLoginHandeler,
  setLoader
) => {
  return async (dispatch, getState) => {
    try {
      const { data: authData } = await axios.post(SIGN_UP, {
        ...enteredData,
        returnSecureToken: true,
      });
      dispatch(
        loginUser({
          idToken: authData.idToken,
          userData: { email: authData.email },
        })
      );
      localStorage.setItem("shopcart", authData.idToken);
      closeLoginHandeler();
    } catch (error) {
      console.log(error);
    }
  };
  setLoader(false);
};

export const loginUserWithEmailAndPass = (
  enteredData,
  closeLoginHandeler,
  setLoader
) => {
  return async (dispatch, getState) => {
    try {
      const { data: authData } = await axios.post(SIGN_IN, {
        ...enteredData,
        returnSecureToken: true,
      });
      dispatch(
        loginUser({
          idToken: authData.idToken,
          userData: { email: authData.email },
        })
      );
      localStorage.setItem("shopcart", authData.idToken);
      closeLoginHandeler();
      dispatch(fetchCart(authData.email));
    } catch (error) {
      console.log(error);
    }
  };
  setLoader(false);
};

// Fetching Cart Products After Fetching The User
export const fetchUserOnLoadUsingIdToken = () => {
  return async (dispatch, getState) => {
    try {
      const localIdToken = localStorage.getItem("shopcart");
      if (!localIdToken) {
        return;
      }
      const { data } = await axios.post(GET_USER_BY_IDTOKEN, {
        idToken: localIdToken,
      });
      const authData = data.users[0];
      dispatch(
        loginUser({
          idToken: localIdToken,
          userData: { email: authData.email },
        })
      );
      dispatch(fetchCart(authData.email));
      dispatch(fetchUserOrders());
    } catch (error) {
      console.log(error);
    }
  };
};
