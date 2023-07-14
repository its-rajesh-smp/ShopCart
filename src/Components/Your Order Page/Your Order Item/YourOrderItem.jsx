import React from "react";
import "./YourOrderItem.css";
import OrderStatus from "../Order Status/OrderStatus";
import { useNavigate } from "react-router-dom";

function YourOrderItem({ orderDetails }) {
  const navigate = useNavigate();

  // On Click Order Navigate To Order Details Page
  const onClickNavigateToOrderDetails = () => {
    navigate(`/orderdetails/${orderDetails.orderId}`)
  }

  return (
    <div onClick={onClickNavigateToOrderDetails} className=" YourOrderItem-div ">
      <div className="YourOrderItem-div__imageContainer">
        <img src={orderDetails.images[0]} alt="" />
      </div>

      <div className="YourOrderItem-div__nameContainer">
        <p>{orderDetails.name}</p>
        <p>
          Order Id: <span>{orderDetails.orderId}</span>
        </p>
        <p>DUMMY ORDER STATUS</p>
      </div>

      <div className="YourOrderItem-div__priceContainer">
        <p>{orderDetails.price} $</p>
        <p>{orderDetails.cartQuantity}</p>
      </div>

      <div className="YourOrderItem-div__statusContainer">
        <OrderStatus />
      </div>
    </div>
  );
}

export default YourOrderItem;
