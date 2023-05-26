import React from "react";
import "./DeliveryAddressMain.css";
import { useDispatch } from "react-redux";
import { setDelivery } from "../../../../Store/Reducer/checkoutStepReducer";
import { selectAddress } from "../../../../Store/Reducer/userAddressReducer";

function DeliveryAddressMain(props) {
  const dispatch = useDispatch();

  // On Delivery Here Btn Click
  const onClickDeliveryHereBtn = () => {
    dispatch(setDelivery());
    dispatch(selectAddress(props.data));
  };

  return (
    <div className=" DeliveryAddressMain-div ">
      <div className="DeliveryAddressMain-div__left">
        <input name="address" type="radio" />
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
        <button onClick={onClickDeliveryHereBtn}>DELIVERY HERE</button>
      </div>

      <div className="DeliveryAddressMain-div__right">
        <p onClick={props.onClick}>EDIT</p>
      </div>
    </div>
  );
}

export default DeliveryAddressMain;
