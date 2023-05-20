import React from "react";
import "./App.css";
import Header from "../Components/Header/Header";
import Login from "../Pages/Login/Login";
import Homepage from "../Pages/Homepage/Homepage";
import Productpage from "../Pages/Productpage/Productpage";
import Productdetailspage from "../Pages/Productdetailspage/Productdetailspage";
import Cartpage from "../Pages/Cartpage/Cartpage";

function App(props) {
  return (
    <div className=" App-div ">
      <Header />
      {/* <Login /> */}
      {/* <Homepage /> */}
      {/* <Productpage /> */}
      {/* <Productdetailspage /> */}
      <Cartpage />
    </div>
  );
}

export default App;
