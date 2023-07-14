import React from "react";
import "./DeliveryAddressMain.css";
import { useDispatch } from "react-redux";
import { selectAddress } from "../../../../Store/Reducer/userAddressReducer";
import { setDelivery } from "../../../../Store/Reducer/checkoutStepReducer";

function DeliveryAddressMain({ handelShowForm, addressData }) {

  const dispatch = useDispatch()

  /* -------------------------------------------------------------------------- */
  /*                               HANDEL DELIVERY                              */
  /* -------------------------------------------------------------------------- */
  // When Click On Delivery Button Store Delevery Address in selected address and move to next checkout step
  function handelDeliveryAddress() {
    dispatch(selectAddress(addressData))
    dispatch(setDelivery())
  }


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
        <button onClick={handelDeliveryAddress}>DELIVERY HERE</button>
      </div>



      <div className="DeliveryAddressMain-div__right">
        <p onClick={handelShowForm}>EDIT</p>
      </div>
    </div>
  );
}

export default DeliveryAddressMain;
