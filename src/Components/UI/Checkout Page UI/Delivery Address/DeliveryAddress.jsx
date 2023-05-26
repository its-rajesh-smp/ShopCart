import React from "react";
import "./DeliveryAddress.css";
import DeliveryAddressMain from "../Delivery Address Main/DeliveryAddressMain";
import EditDeliveryAddress from "../Edit Delivery Address/EditDeliveryAddress";
import { useState } from "react";

function DeliveryAddress(props) {
  const [edit, setEdit] = useState(false);
  const onClickSetEdit = () => {
    setEdit((p) => !p);
  };

  return (
    <div className=" DeliveryAddress-div ">
      {!edit && <DeliveryAddressMain onClick={onClickSetEdit} />}
      {edit && <EditDeliveryAddress onClick={onClickSetEdit} />}
    </div>
  );
}

export default DeliveryAddress;
