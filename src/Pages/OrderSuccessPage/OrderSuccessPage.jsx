import React from "react";
import "./OrderSuccessPage.css";
import { useNavigate } from "react-router-dom";

function OrderSuccessPage(props) {
  const navigate = useNavigate();
  // After 5 Sec Redirect to your order
  setTimeout(function () {
    props.afterFive();
    navigate("/yourorder");
  }, 5000);

  return (
    <div className=" OrderSuccessPage-div ">
      <h1>Order Placed</h1>
    </div>
  );
}

export default OrderSuccessPage;
