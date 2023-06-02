import React from "react";
import "./OrderStatus.css";

function OrderStatus(props) {
  const orderStatus = props.data;
  const orderTime = new Date(orderStatus.orderDate).toLocaleDateString();
  const deliveryTime = new Date(orderStatus.deliveryDate).toLocaleDateString();
  const currentStatus = props.generatedStatus;

  const statusObj = {
    "ORDER PROCESSING": [true],
    "READY TO DISPATCH": [true, true],
    DISPATCHED: [true, true, true],
    "ON THE WAY": [true, true, true, true, true],
    "READY TO RECIVE ON YOUR PLACE": [true, true, true, true, true, true],
    "NEAR TO YOU": [true, true, true, true, true, true, true],
    "OUT FOR DELIVERY": [true, true, true, true, true, true, true],
    DELIVERED: [true, true, true, true, true, true, true, true, true],
  };
  const statusArr = statusObj[currentStatus];

  return (
    <div className=" OrderStatus-div ">
      <div className="OrderStatus-div__lineContainer">
        <div
          className={`${
            statusArr[0] ? "active_orderStatus" : "inActive_orderStatus"
          } point`}
        ></div>

        <div
          className={`${
            statusArr[1] ? "active_orderStatus" : "inActive_orderStatus"
          } centerLine`}
        ></div>

        <div
          className={`${
            statusArr[2] ? "active_orderStatus" : "inActive_orderStatus"
          } point`}
        ></div>

        <div
          className={`${
            statusArr[3] ? "active_orderStatus" : "inActive_orderStatus"
          } centerLine`}
        ></div>

        <div
          className={`${
            statusArr[4] ? "active_orderStatus" : "inActive_orderStatus"
          } point`}
        ></div>

        <div
          className={`${
            statusArr[5] ? "active_orderStatus" : "inActive_orderStatus"
          } centerLine`}
        ></div>

        <div
          className={`${
            statusArr[6] ? "active_orderStatus" : "inActive_orderStatus"
          } point`}
        ></div>

        <div
          className={`${
            statusArr[7] ? "active_orderStatus" : "inActive_orderStatus"
          } centerLine`}
        ></div>

        <div
          className={`${
            statusArr[8] ? "active_orderStatus" : "inActive_orderStatus"
          } point`}
        ></div>
      </div>
      <div className="OrderStatus-div__statusContainer">
        <p>{orderTime}</p>
        <p>Dispatched</p>
        <p>On The Way</p>
        <p>Near To You</p>
        <p>{deliveryTime}</p>
      </div>
    </div>
  );
}

export default OrderStatus;
