import React from "react";
import "./DeliveryAddressMain.css";

function DeliveryAddressMain({ handelShowForm, addressData, handelDelivery }) {
  return (
    <div className=" DeliveryAddressMain-div ">
      <div className="DeliveryAddressMain-div__center">
        <div>
          <p>{addressData.userName}</p>
          <p>{addressData.userMobile}</p>
        </div>

        <p>
          <span>{addressData.userArea}</span>,<span>{addressData.userLocality}</span>,
          <span>{addressData.userCity}</span>,<span>{addressData.userState}</span>-
          <span>{addressData.userPincode}</span>
        </p>
        <button
          onClick={() => {
            handelDelivery(addressData);
          }}
        >
          DELIVERY HERE
        </button>
      </div>



      <div className="DeliveryAddressMain-div__right">
        <p onClick={handelShowForm}>EDIT</p>
      </div>
    </div>
  );
}

export default DeliveryAddressMain;
