import React, { useState } from "react";
import "./EditDeliveryAddress.css";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import {
  addAddressFun,
  editUserAddress,
} from "../../../../Store/Actions/userAddressActions";

function EditDeliveryAddress({ handelShowForm, selectedAddress, forEdit }) {
  const dispatch = useDispatch();

  /* -------------------------------------------------------------------------- */
  /*                              States For Inputs                             */
  /* -------------------------------------------------------------------------- */
  const [name, setName] = useState(selectedAddress ? selectedAddress.name : "");
  const [mobile, setMobile] = useState(selectedAddress ? selectedAddress.mobile : "");
  const [pincode, setPincode] = useState(selectedAddress ? selectedAddress.pincode : "");
  const [locality, setLocality] = useState(
    selectedAddress ? selectedAddress.locality : ""
  );
  const [area, setArea] = useState(selectedAddress ? selectedAddress.area : "");
  const [city, setCity] = useState(selectedAddress ? selectedAddress.city : "");
  const [state, setState] = useState(selectedAddress ? selectedAddress.state : "");
  const [landmark, setLandmark] = useState(
    selectedAddress ? selectedAddress.landmark : ""
  );
  const [alternateMobile, setAlternateMobile] = useState(
    selectedAddress ? selectedAddress.alternateMobile : ""
  );



  /* -------------------------------------------------------------------------- */
  /*                        ON ADD NEW ADDRESS BTN CLICK                        */
  /* -------------------------------------------------------------------------- */
  const onClickAddNewAddress = () => {
    const newAddressObj = {
      userName: name,
      userMobile: mobile,
      userPincode: pincode,
      userLocality: locality,
      userArea: area,
      userCity: city,
      userState: state,
      userLandmark: landmark,
      userAlternateMobile: alternateMobile,
    };
    dispatch(addAddressFun(newAddressObj, handelShowForm));
  };

  /* -------------------------------------------------------------------------- */
  /*                         ON CLICK SAVE AND EDIT BTN                         */
  /* -------------------------------------------------------------------------- */
  const onClickEditAddress = () => {
    const newAddressObj = {
      userName: name,
      userMobile: mobile,
      userPincode: pincode,
      userLocality: locality,
      userArea: area,
      userCity: city,
      userState: state,
      userLandmark: landmark,
      userAlternateMobile: alternateMobile,
    };

    dispatch(
      editUserAddress(selectedAddress.id, newAddressObj, props.onClickSaveDeliver)
    );
  };

  /* -------------------------------------------------------------------------- */
  /*                             ON CANCLE BTN CLICK                            */
  /* -------------------------------------------------------------------------- */
  const onCancleBtnClick = () => {
    handelShowForm && handelShowForm();
    // props.onClickCancle && props.onClickCancle();
  };

  return (
    <div className=" EditDeliveryAddress-div ">
      <div className="EditDeliveryAddress-div__center">
        <p>{forEdit ? "EDIT ADDRESS" : "ADD NEW ADDRESS"}</p>

        <button className="EditDeliveryAddress-div__center__locationBtn">
          Use my current location
        </button>

        <form>
          <div>
            <TextField
              value={name}
              onChange={(e) => setName(e.target.value)}
              label="Name"
              id="standard-size-small"
              size="small"
              variant="filled"
            />
            <TextField
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              label="10-digit mobile number"
              id="standard-size-small"
              size="small"
              variant="filled"
            />
          </div>

          <div>
            <TextField
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              label="Pincode"
              id="standard-size-small"
              size="small"
              variant="filled"
            />
            <TextField
              value={locality}
              onChange={(e) => setLocality(e.target.value)}
              label="Locality"
              id="standard-size-small"
              size="small"
              variant="filled"
            />
          </div>

          <TextField
            value={area}
            onChange={(e) => setArea(e.target.value)}
            label="Address (Area and Street)"
            id="standard-size-small"
            size="small"
            variant="filled"
          />

          <div>
            <TextField
              value={city}
              onChange={(e) => setCity(e.target.value)}
              label="City/District/Town"
              id="standard-size-small"
              size="small"
              variant="filled"
            />
            <TextField
              value={state}
              onChange={(e) => setState(e.target.value)}
              label="State"
              id="standard-size-small"
              size="small"
              variant="filled"
            />
          </div>

          <div>
            <TextField
              value={landmark}
              onChange={(e) => setLandmark(e.target.value)}
              label="Landmark"
              id="standard-size-small"
              size="small"
              variant="filled"
            />
            <TextField
              value={alternateMobile}
              onChange={(e) => setAlternateMobile(e.target.value)}
              label="Alternate Phone"
              id="standard-size-small"
              size="small"
              variant="filled"
            />
          </div>
        </form>

        <div className="EditDeliveryAddress-div__center__btnGrp">
          {forEdit && (
            <button onClick={onClickEditAddress}>SAVE AND DELIVER HERE</button>
          )}

          {!forEdit && (
            <button onClick={onClickAddNewAddress}>ADD NEW ADDRESS</button>
          )}

          <button onClick={onCancleBtnClick}>CANCEL</button>
        </div>
      </div>
    </div>
  );
}

export default EditDeliveryAddress;
