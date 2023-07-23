import React from "react";
import "./DeliveryAddress.css";
import DeliveryAddressMain from "../Delivery Address Main/DeliveryAddressMain";
import EditDeliveryAddress from "../Edit Delivery Address/EditDeliveryAddress";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setDelivery } from "../../../../Store/Reducer/checkoutStepReducer";
import { selectAddress } from "../../../../Store/Reducer/userAddressReducer";

function DeliveryAddress(props) {
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();

  // toggle Between Edit And not Edit
  const onClickSetEdit = () => {
    setEdit((p) => !p);
  };

  // On Delivery Here Btn Click
  const onClickDeliveryHereBtn = (addressData) => {
    dispatch(setDelivery());
    dispatch(selectAddress(addressData));
  };

  return (
    <div className=" DeliveryAddress-div ">
      {!edit && (
        <DeliveryAddressMain
          data={props.data}
          onClickEdit={onClickSetEdit}
          onClickDeliveryHereBtn={onClickDeliveryHereBtn}
        />
      )}
      {edit && (
        <EditDeliveryAddress
          onClickSaveDeliver={onClickDeliveryHereBtn}
          data={props.data}
          forEdit={props.forEdit}
          onClickCancle={onClickSetEdit}
        />
      )}
    </div>
  );
}

export default DeliveryAddress;
