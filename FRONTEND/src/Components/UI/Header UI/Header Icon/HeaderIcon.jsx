import React from "react";
import "./HeaderIcon.css";
import { useNavigate } from "react-router-dom";

function HeaderIcon(props) {
  const navigate = useNavigate();

  //   On Click Logo
  const onClickNavigateHome = () => {
    navigate("/");
    props.closeHambargar();
  };

  return (
    <div onClick={onClickNavigateHome} className=" HeaderIcon-div ">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2331/2331970.png"
        alt="FlipKartIcon"
      />
      <h1>ShopCart</h1>
    </div>
  );
}

export default HeaderIcon;
