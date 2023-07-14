import { account } from "../../AppWrite/appwriteconfig";
import { v4 } from "uuid";
import { loginUser, logoutUser } from "../Reducer/authReducer";
import { fetchCart } from "./userCartActions";

/* -------------------------------------------------------------------------- */
/*                                 CREATE USER                                */
/* -------------------------------------------------------------------------- */
export const createUserFun = (
  email, password,
  closeLoginHandeler,
  setLoader
) => {
  return async (dispatch) => {
    try {

      // Generate UUID
      const uuid = v4()

      // Create The User
      const createResponse = await account.create(uuid, email, password, "")
      dispatch(loginUser(createResponse.email))

      // Closing The Login Component
      closeLoginHandeler()

      // Create A Session For User
      const sessionResponse = await account.createEmailSession(createResponse.email, password)

      // Store Session Id
      localStorage.setItem('shopcartSession', sessionResponse.$id)

    } catch (error) {
      console.log(error);
    }
    setLoader(false);
  };
};



/* -------------------------------------------------------------------------- */
/*                                 LOGIN USER                                 */
/* -------------------------------------------------------------------------- */
export const loginUserFun = (
  email, password,
  closeLoginHandeler,
  setLoader
) => {
  return async (dispatch) => {
    try {

      // Creating Session Using Authenticated credential
      const sessionResponse = await account.createEmailSession(email, password)
      dispatch(loginUser(sessionResponse.providerUid))

      // Closing The Login Component
      closeLoginHandeler()

      // Fetching User Cart
      dispatch(fetchCart())

    } catch (error) {
      console.log(error);
    }
    setLoader(false);
  };
};



/* -------------------------------------------------------------------------- */
/*                                 FETCH USER                                 */
/* -------------------------------------------------------------------------- */
export const getUserFun = (setLoader) => {
  return async (dispatch) => {
    try {

      //Getting User From Server
      const getResponse = await account.get()
      dispatch(loginUser(getResponse.email))

      // Set User Loader False
      setLoader(p => {
        return { ...p, productLoader: false }
      })

      // Fetching User Cart
      dispatch(fetchCart())

    } catch (error) {
      console.log(error);
    }
  };
};




/* -------------------------------------------------------------------------- */
/*                                 LOGOUT USER                                */
/* -------------------------------------------------------------------------- */
export const logoutUserFun = (closeHambargar) => {
  return async (dispatch) => {
    try {

      // Getting Local Session Id
      const localSessionID = localStorage.getItem('shopcartSession')

      if (localSessionID) {
        // Deleting Session
        await account.deleteSession(localSessionID)
        localStorage.removeItem('shopcartSession')
      }

      // Closing Hambargar 
      closeHambargar()
      dispatch(logoutUser())
    } catch (error) {
      console.log(error);
    }
  }
}