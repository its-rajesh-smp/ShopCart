import React, { useState } from "react";
import "./AddNewAddress.css";
import EditDeliveryAddress from "../Edit Delivery Address/EditDeliveryAddress";

function AddNewAddress(props) {
  const [addressForm, setAddressForm] = useState(false);

  const onClickAddAddressOpen = () => {
    setAddressForm((p) => !p);
  };

  return (
    <div className=" AddNewAddress-div ">
      {!addressForm && (
        <div className="AddNewAddress-div__bar">
          <i className="bx bx-plus"></i>
          <p onClick={onClickAddAddressOpen}>Add new Address</p>
        </div>
      )}

      {addressForm && <EditDeliveryAddress onClick={onClickAddAddressOpen} />}
    </div>
  );
}

export default AddNewAddress;
