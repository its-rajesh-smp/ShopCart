import React from "react";
import "./App.css";
import Header from "../Components/Header/Header";
import Login from "../Pages/Login/Login";
import Homepage from "../Pages/Homepage/Homepage";

function App(props) {
  return (
    <div className=" App-div ">
      <Header />
      {/* <Login /> */}
      <Homepage />
    </div>
  );
}

export default App;
