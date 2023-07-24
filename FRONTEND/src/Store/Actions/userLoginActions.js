import axios from "axios";
import { loginUser } from "../Reducer/authReducer";



/* -------------------------------------------------------------------------- */
/*                                 CREATE USER                                */
/* -------------------------------------------------------------------------- */

export const createUserWithEmailAndPass = (
  enteredData,
  closeLoginCardHandeler,
  setLoader
) => {
  return async (dispatch) => {
    try {

      // Sending Email Password To Backend
      const { data } = await axios.post("http://localhost:5000/createNewUser", { ...enteredData })

      // If Status == false Means Already User Present 
      if (!data.status) {
        setLoader(false);
        alert("USER EXISTS")
        return
      }

      // Storing IdToken In LocalStorage
      localStorage.setItem("idToken", data.idToken)

      // Sending Data To Redux
      dispatch(loginUser(data))


      // Closing Login Screen
      closeLoginCardHandeler()
    } catch (error) {
      console.log(error);
    }
    setLoader(false);
  };
};



/* -------------------------------------------------------------------------- */
/*                                 LOGIN USER                                 */
/* -------------------------------------------------------------------------- */

export const loginUserWithEmailAndPass = (
  enteredData,
  closeLoginCardHandeler,
  setLoader
) => {
  return async (dispatch) => {
    try {

      // Sending Email Password To Backend
      const { data } = await axios.post("http://localhost:5000/loginExistingUser", { ...enteredData })


      // If Status==False means user Not Exists
      if (!data.status) {
        setLoader(false);
        alert("USER NOT EXISTS")
        return
      }


      // Storing IdToken In LocalStorage
      localStorage.setItem("idToken", data.idToken)


      // Sending Data to Redux
      dispatch(loginUser(data))


      // Closing Login Screen
      closeLoginCardHandeler()
    } catch (error) {
      console.log(error);
    }
    setLoader(false);
  };
};







/* -------------------------------------------------------------------------- */
/*                                 FETCH USER                                 */
/* -------------------------------------------------------------------------- */

export const fetchUserOnLoadUsingIdToken = () => {
  return async (dispatch) => {
    try {

      // Getting idToken From Localstorage
      const localIdToken = localStorage.getItem("idToken");
      if (!localIdToken) {
        return;
      }


      // Sending IdToken To Backend To Verify And Extract User Data
      const { data } = await axios.post('http://localhost:5000/getExistingUser', { idToken: localIdToken })

      // If Status==false Means IdToken Not Verified or Wrong
      if (!data.status) {
        alert("ID TOKEN NOT VERIFIED")
        return
      }

      // Sending Data To Redux
      dispatch(loginUser(data))

    } catch (error) {
      console.log(error);
    }
  };
};
