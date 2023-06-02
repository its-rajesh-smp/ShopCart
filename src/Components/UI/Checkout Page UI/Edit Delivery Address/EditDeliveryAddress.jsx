import React, { useState } from "react";
import "./EditDeliveryAddress.css";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import {
  addAddress,
  editUserAddress,
} from "../../../../Store/Actions/userAddressActions";

function EditDeliveryAddress(props) {
  const dispatch = useDispatch();

  const [name, setName] = useState(props.data ? props.data.name : "");
  const [mobile, setMobile] = useState(props.data ? props.data.mobile : "");
  const [pincode, setPincode] = useState(props.data ? props.data.pincode : "");
  const [locality, setLocality] = useState(
    props.data ? props.data.locality : ""
  );
  const [area, setArea] = useState(props.data ? props.data.area : "");
  const [city, setCity] = useState(props.data ? props.data.city : "");
  const [state, setState] = useState(props.data ? props.data.state : "");
  const [landmark, setLandmark] = useState(
    props.data ? props.data.landmark : ""
  );
  const [alternateMobile, setAlternateMobile] = useState(
    props.data ? props.data.alternateMobile : ""
  );

  // ON ADD NEW ADDRESS BTN CLICK
  const onClickAddNewAddress = () => {
    const newAddressObj = {
      name: name,
      mobile: mobile,
      pincode: pincode,
      locality: locality,
      area: area,
      city: city,
      state: state,
      landmark: landmark,
      alternateMobile: alternateMobile,
    };
    dispatch(addAddress(newAddressObj));
  };

  // ON CLICK SAVE AND EDIT BTN
  const onClickEditAddress = () => {
    const newAddressObj = {
      name: name,
      mobile: mobile,
      pincode: pincode,
      locality: locality,
      area: area,
      city: city,
      state: state,
      landmark: landmark,
      alternateMobile: alternateMobile,
    };
    dispatch(
      editUserAddress(props.data.id, newAddressObj, props.onClickSaveDeliver)
    );
  };

  return (
    <div className=" EditDeliveryAddress-div ">
      <div className="EditDeliveryAddress-div__center">
        <p>{props.forEdit ? "EDIT ADDRESS" : "ADD NEW ADDRESS"}</p>

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
          {props.forEdit && (
            <button onClick={onClickEditAddress}>SAVE AND DELIVER HERE</button>
          )}

          {!props.forEdit && (
            <button onClick={onClickAddNewAddress}>ADD NEW ADDRESS</button>
          )}

          <button onClick={props.onClickCancle}>CANCEL</button>
        </div>
      </div>
    </div>
  );
}

export default EditDeliveryAddress;
