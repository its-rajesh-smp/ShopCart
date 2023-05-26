import React from "react";
import "./YourOrderItem.css";
import OrderStatus from "../Order Status/OrderStatus";

function YourOrderItem(props) {
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
        <p>DELIVERED</p>
      </div>

      <div className="YourOrderItem-div__priceContainer">
        <p>{props.data.price} $</p>
        <p>{props.data.quantity}</p>
      </div>

      <div className="YourOrderItem-div__statusContainer">
        <OrderStatus />
      </div>
    </div>
  );
}

export default YourOrderItem;
