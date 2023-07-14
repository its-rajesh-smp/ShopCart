import React from "react";
import "./DeliveryAddress.css";
import DeliveryAddressMain from "../Delivery Address Main/DeliveryAddressMain";
import EditDeliveryAddress from "../Edit Delivery Address/EditDeliveryAddress";
import { useState } from "react";


function DeliveryAddress({ addressData, forEdit }) {
  const [showForm, setShowForm] = useState(false);

  // toggle Between Edit And not Edit
  const handelShowForm = () => {
    setShowForm((p) => !p);
  };


  return (
    <div className=" DeliveryAddress-div ">
      {!showForm && (
        <DeliveryAddressMain
          addressData={addressData}
          handelShowForm={handelShowForm}
        />
      )}
      {showForm && (
        <EditDeliveryAddress
          addressData={addressData}
          forEdit={forEdit}
          handelShowForm={handelShowForm}
        />
      )}
    </div>
  );
}

export default DeliveryAddress;
