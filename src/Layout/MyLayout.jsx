import React from "react";
import Header from "../Components/Header/Header";
import Login from "../Pages/Login/Login";
import Checkoutpage from "../Pages/Checkoutpage/Checkoutpage";

function MyLayout(props) {
  return (
    <>
      <Header />
      <Login />
    </>
  );
}

export default MyLayout;
