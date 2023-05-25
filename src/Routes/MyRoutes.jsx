import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import Yourorderpage from "../Pages/Yourorderpage/Yourorderpage";
import OrderDetailsPage from "../Pages/OrderDetailsPage/OrderDetailsPage";
import Cartpage from "../Pages/Cartpage/Cartpage";
import Homepage from "../Pages/Homepage/Homepage";
import Productpage from "../Pages/Productpage/Productpage";
import Productdetailspage from "../Pages/Productdetailspage/Productdetailspage";

function MyRoutes(props) {
  const isAuth = useSelector((state) => state.authSlice.isAuth);
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/cart" element={<Cartpage />} />
      <Route path="/product/:category" element={<Productpage />} />
      <Route
        path="/productdetails/:category/:productid"
        element={<Productdetailspage />}
      />

      {isAuth && (
        <>
          <Route path="/orderdetails" element={<OrderDetailsPage />} />
          <Route path="/yourorder" element={<Yourorderpage />} />
          <Route path="/orderdetails" element={<OrderDetailsPage />} />
        </>
      )}
    </Routes>
  );
}

export default MyRoutes;
