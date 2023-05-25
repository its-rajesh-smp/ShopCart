import React, { useState } from "react";
import "./Login.css";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { setLogin } from "../../Store/Reducer/toggleLogin";
import {
  createUserWithEmailAndPass,
  loginUserWithEmailAndPass,
} from "../../Store/Actions/userLoginActions";

function Login(props) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [switchLogin, setSwitchLogin] = useState(false);

  // On Click Close BTN
  const closeLoginHandeler = () => {
    dispatch(setLogin());
  };

  // Switch Login-Create New Acccount
  const switchLoginHandeler = () => {
    setSwitchLogin((p) => !p);
  };

  // On Create New Acc Btn Click
  const onCreateNewBtnHandeler = () => {
    const enteredData = { email: email, password: password };
    dispatch(createUserWithEmailAndPass(enteredData, closeLoginHandeler));
  };

  // On Login Btn Click
  const onLoginBtnHandeler = () => {
    const enteredData = { email: email, password: password };
    dispatch(loginUserWithEmailAndPass(enteredData, closeLoginHandeler));
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
              <button onClick={onLoginBtnHandeler}>LOGIN</button>
            ) : (
              <button onClick={onCreateNewBtnHandeler}>
                Create New Account
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
