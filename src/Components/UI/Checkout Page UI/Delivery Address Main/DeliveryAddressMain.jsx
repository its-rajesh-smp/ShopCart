import React from "react";
import "./DeliveryAddressMain.css";

function DeliveryAddressMain(props) {
  return (
    <div className=" DeliveryAddressMain-div ">
      <div className="DeliveryAddressMain-div__left">
        <input type="radio" />
      </div>

      <div className="DeliveryAddressMain-div__center">
        <div>
          <p>{props.data.name}</p>
          <p>{props.data.mobile}</p>
        </div>

        <p>
          <span>{props.data.area}</span>,<span>{props.data.locality}</span>,
          <span>{props.data.city}</span>,<span>{props.data.state}</span>-
          <span>{props.data.pincode}</span>
        </p>
        <button>DELIVERY HERE</button>
      </div>

      <div className="DeliveryAddressMain-div__right">
        <p onClick={props.onClick}>EDIT</p>
      </div>
    </div>
  );
}

export default DeliveryAddressMain;
