import React from "react";
import "./YourOrderItem.css";
import OrderStatus from "../Order Status/OrderStatus";

function YourOrderItem(props) {
  //   To show order status dynamically i am usnign math.random to generate different order status
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const generatedCurrentStatus = getRndInteger(0, 7);

  const randomStatusArr = [
    "ORDER PROCESSING",
    "READY TO DISPATCH",
    "DISPATCHED",
    "ON THE WAY",
    "READY TO RECIVE ON YOUR PLACE",
    "NEAR TO YOU",
    "OUT FOR DELIVERY",
    "DELIVERED",
  ];

  const currentStatus = randomStatusArr[generatedCurrentStatus];

  return (
    <div className=" YourOrderItem-div ">
      <div className="YourOrderItem-div__imageContainer">
        <img src={props.data.thumbnail} alt="" />
      </div>

      <div className="YourOrderItem-div__nameContainer">
        <p>{props.data.description}</p>
        <p>
          Order Id: <span>{props.data.cartId}</span>
        </p>
        <p>{currentStatus}</p>
      </div>

      <div className="YourOrderItem-div__priceContainer">
        <p>{props.data.price} $</p>
        <p>{props.data.quantity}</p>
      </div>

      <div className="YourOrderItem-div__statusContainer">
        <OrderStatus data={props.orderStatus} generatedStatus={currentStatus} />
      </div>
    </div>
  );
}

export default YourOrderItem;
