import React from "react";
import "./YourOrderItem.css";
import OrderStatus from "../Order Status/OrderStatus";
import { useNavigate } from "react-router-dom";

function YourOrderItem(props) {
  const navigate = useNavigate();
  const onClickNavigate = () => {
    if (props.path === "FROM_ORDERDETAILS") {
      navigate(`/productdetails/${props.data.category}/${props.data.id}`);
    } else {
      navigate(`/orderdetails/${props.data.orderId}`);
    }
  };

  return (
    <div onClick={onClickNavigate} className=" YourOrderItem-div ">
      <div className="YourOrderItem-div__imageContainer">
        <img src={props.data.thumbnail} alt="" />
      </div>

      <div className="YourOrderItem-div__nameContainer">
        <p>{props.data.description}</p>
        <p>
          Order Id: <span>{props.data.orderId}</span>
        </p>
        <p>{props.data.orderStatus.status}</p>
      </div>

      <div className="YourOrderItem-div__priceContainer">
        <p>{props.data.price} $</p>
        <p>{props.data.quantity}</p>
      </div>

      <div className="YourOrderItem-div__statusContainer">
        <OrderStatus data={props.data.orderStatus} />
      </div>
    </div>
  );
}

export default YourOrderItem;
