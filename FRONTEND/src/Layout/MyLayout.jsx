import React from "react";
import Header from "../Components/Header/Header";
import Login from "../Pages/Login/Login";
import { useSelector } from "react-redux";

function MyLayout(props) {

  const isLoginVisible = useSelector(
    (state) => state.toggleLoginSlice.isLoginVisible
  );

  return (
    <>
      <Header />
      {isLoginVisible && <Login />}
    </>
  );
}

export default MyLayout;
