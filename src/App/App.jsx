import React from "react";
import "./App.css";
import Header from "../Components/Header/Header";
import Login from "../Pages/Login/Login";
import Homepage from "../Pages/Homepage/Homepage";
import Productpage from "../Pages/Productpage/Productpage";
import Productdetailspage from "../Pages/Productdetailspage/Productdetailspage";
import Cartpage from "../Pages/Cartpage/Cartpage";
import Checkoutpage from "../Pages/Checkoutpage/Checkoutpage";
import Yourorderpage from "../Pages/Yourorderpage/Yourorderpage";
import OrderDetailsPage from "../Pages/OrderDetailsPage/OrderDetailsPage";

function App(props) {
  return (
    <div className=" App-div ">
      <Header />
      <Login />
      <Homepage />
      {/* <Productpage /> */}
      {/* <Productdetailspage /> */}
      {/* <Cartpage /> */}
      {/* <Checkoutpage /> */}
      {/* <Yourorderpage /> */}
      {/* <OrderDetailsPage /> */}
    </div>
  );
}

export default App;
