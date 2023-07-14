import React, { useState } from "react";
import "./EditDeliveryAddress.css";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import {
  addAddressFun,
  editUserAddressFun,
} from "../../../../Store/Actions/userAddressActions";

function EditDeliveryAddress({ handelShowForm, forEdit, handelDelivery, addressData }) {
  const dispatch = useDispatch();

  /* -------------------------------------------------------------------------- */
  /*                              States For Inputs                             */
  /* -------------------------------------------------------------------------- */
  const [name, setName] = useState(addressData ? addressData.userName : "");
  const [mobile, setMobile] = useState(addressData ? addressData.userMobile : "");
  const [pincode, setPincode] = useState(addressData ? addressData.userPincode : "");
  const [locality, setLocality] = useState(
    addressData ? addressData.userLocality : ""
  );
  const [area, setArea] = useState(addressData ? addressData.userArea : "");
  const [city, setCity] = useState(addressData ? addressData.userCity : "");
  const [state, setState] = useState(addressData ? addressData.userState : "");
  const [landmark, setLandmark] = useState(
    addressData ? addressData.userLandmark : ""
  );
  const [alternateMobile, setAlternateMobile] = useState(
    addressData ? addressData.userAlternateMobile : ""
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
  /*                         ON CLICK SAVE AND ORDER BTN                         */
  /* -------------------------------------------------------------------------- */
  const onClickSaveAndDelivery = () => {
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
      editUserAddressFun(addressData.$id, newAddressObj, handelShowForm)
    );
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
            <button onClick={onClickSaveAndDelivery}>SAVE AND DELIVER HERE</button>
          )}

          {!forEdit && (
            <button onClick={onClickAddNewAddress}>ADD NEW ADDRESS</button>
          )}

          <button onClick={handelShowForm}>CANCEL</button>
        </div>
      </div>
    </div>
  );
}

export default EditDeliveryAddress;
