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
          <p>Sourav Pathak</p>
          <p>8942908195</p>
        </div>

        <p>
          <span>Tilaboni More</span>,<span>Tilaboni</span>,
          <span>Bankura District</span>,<span>West Bengal</span>-
          <span>722151</span>
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
