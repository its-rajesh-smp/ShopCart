import React from "react";
import "./Login.css";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { setLogin } from "../../Store/Reducer/toggleLogin";

function Login(props) {
  const dispatch = useDispatch();

  // On Click Close BTN
  const closeLoginHandeler = () => {
    dispatch(setLogin());
  };

  return (
    <div className=" Login-div ">
      <div className="Login-div__inner">
        <div className="Login-div__inner_info">
          <i onClick={closeLoginHandeler} class="bx bx-x"></i>

          <div>
            <h2>"Login" "Create New Account"</h2>
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
            />
            <TextField
              label="Enter Password"
              id="password"
              size="small"
              variant="standard"
            />

            <p>
              By continuing, you agree to Flipkart's Terms of Use and Privacy
              Policy.
            </p>
            <button>LOGIN</button>
          </div>

          <p className="createacc">
            New to Flipkart? Create an account "Existing User? Login
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
