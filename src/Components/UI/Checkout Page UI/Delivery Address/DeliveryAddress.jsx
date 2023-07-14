import React from "react";
import "./DeliveryAddress.css";
import DeliveryAddressMain from "../Delivery Address Main/DeliveryAddressMain";
import EditDeliveryAddress from "../Edit Delivery Address/EditDeliveryAddress";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setDelivery } from "../../../../Store/Reducer/checkoutStepReducer";
import { selectAddress } from "../../../../Store/Reducer/userAddressReducer";

function DeliveryAddress({ addressData, forEdit }) {
  const [showForm, setShowForm] = useState(false);
  const dispatch = useDispatch();

  // toggle Between Edit And not Edit
  const handelShowForm = () => {
    setEdit((p) => !p);
  };

  // On Delivery Here Btn Click
  const handelDelivery = (addressData) => {
    dispatch(setDelivery());
    dispatch(selectAddress(addressData));
  };

  return (
    <div className=" DeliveryAddress-div ">
      {!showForm && (
        <DeliveryAddressMain
          addressData={addressData}
          handelShowForm={handelShowForm}
          handelDelivery={handelDelivery}
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
