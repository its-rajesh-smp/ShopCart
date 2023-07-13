import React, { useState } from "react";
import "./Login.css";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { setLogin } from "../../Store/Reducer/toggleLogin";
import { createUserFun, loginUserFun } from "../../Store/Actions/userLoginActions";
import useStopScroll from "../../Hooks/useStopScroll";


function Login(props) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [switchLogin, setSwitchLogin] = useState(false);
  const [loader, setLoader] = useState(false)

  // Stop Body To Scroll
  useStopScroll()


  // On Click Close BTN
  const closeLoginHandeler = () => {
    dispatch(setLogin());
  };

  // Switch Login-Create New Acccount
  const switchLoginHandeler = () => {
    setSwitchLogin((p) => !p);
  };


  /* -------------------------------------------------------------------------- */
  /*                            ON NEW ACC BTN CLICK                            */
  /* -------------------------------------------------------------------------- */
  const onCreateNewBtnHandeler = () => {
    if (!loader) {
      setLoader(true)
      dispatch(createUserFun(email, password, closeLoginHandeler, setLoader));
    }
  };

  /* -------------------------------------------------------------------------- */
  /*                             ON LOGIN BTN CLICK                             */
  /* -------------------------------------------------------------------------- */
  const onLoginBtnHandeler = () => {
    if (!loader) {
      setLoader(true)
      dispatch(loginUserFun(email, password, closeLoginHandeler, setLoader));
    }
  };

  return (
    <div className=" Login-div ">
      <div className="Login-div__inner">
        <div className="Login-div__inner_info">
          <i onClick={closeLoginHandeler} className="bx bx-x"></i>

          <div>
            <h2>{switchLogin ? "Login" : "Create New Account"}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <img
            src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png"
            alt="login"
          />
        </div>

        <div className="Login-div__inner__form">
          <div>
            <TextField
              label="Enter Email"
              id="email"
              size="small"
              variant="standard"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Enter Password"
              id="password"
              size="small"
              variant="standard"
              onChange={(e) => setPassword(e.target.value)}
            />

            <p>
              By continuing, you agree to Flipkart's Terms of Use and Privacy
              Policy.
            </p>
            {switchLogin ? (
              <button onClick={onLoginBtnHandeler}>{loader ? <i className='bx bx-loader-circle bx-spin' /> : "LOGIN"}</button>
            ) : (
              <button onClick={onCreateNewBtnHandeler}>
                {loader ? <i className='bx bx-loader-circle bx-spin' /> : "Create New Account"}
              </button>
            )}
          </div>

          <p onClick={switchLoginHandeler} className="createacc">
            {switchLogin
              ? "New to Flipkart? Create an account"
              : "Existing User? Login"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
