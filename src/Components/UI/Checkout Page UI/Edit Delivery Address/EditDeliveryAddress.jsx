import React, { useState } from "react";
import "./EditDeliveryAddress.css";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { addAddress } from "../../../../Store/Actions/userAddressActions";

function EditDeliveryAddress(props) {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [pincode, setPincode] = useState("");
  const [locality, setLocality] = useState("");
  const [area, setArea] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [landmark, setLandmark] = useState("");
  const [alternateMobile, setAlternateMobile] = useState("");

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

  return (
    <div className=" EditDeliveryAddress-div ">
      <div className="EditDeliveryAddress-div__left">
        <input type="radio" />
      </div>

      <div className="EditDeliveryAddress-div__center">
        <p>EDIT ADDRESS</p>

        <button className="EditDeliveryAddress-div__center__locationBtn">
          Use my current location
        </button>

        <form>
          <div>
            <TextField
              onChange={(e) => setName(e.target.value)}
              label="Name"
              id="standard-size-small"
              size="small"
              variant="filled"
            />
            <TextField
              onChange={(e) => setMobile(e.target.value)}
              label="10-digit mobile number"
              id="standard-size-small"
              size="small"
              variant="filled"
            />
          </div>

          <div>
            <TextField
              onChange={(e) => setPincode(e.target.value)}
              label="Pincode"
              id="standard-size-small"
              size="small"
              variant="filled"
            />
            <TextField
              onChange={(e) => setLocality(e.target.value)}
              label="Locality"
              id="standard-size-small"
              size="small"
              variant="filled"
            />
          </div>

          <TextField
            onChange={(e) => setArea(e.target.value)}
            label="Address (Area and Street)"
            id="standard-size-small"
            size="small"
            variant="filled"
          />

          <div>
            <TextField
              onChange={(e) => setCity(e.target.value)}
              label="City/District/Town"
              id="standard-size-small"
              size="small"
              variant="filled"
            />
            <TextField
              onChange={(e) => setState(e.target.value)}
              label="State"
              id="standard-size-small"
              size="small"
              variant="filled"
            />
          </div>

          <div>
            <TextField
              onChange={(e) => setLandmark(e.target.value)}
              label="Landmark"
              id="standard-size-small"
              size="small"
              variant="filled"
            />
            <TextField
              onChange={(e) => setAlternateMobile(e.target.value)}
              label="Alternate Phone"
              id="standard-size-small"
              size="small"
              variant="filled"
            />
          </div>
        </form>

        <div className="EditDeliveryAddress-div__center__btnGrp">
          <button>SAVE AND DELIVER HERE</button>
          <button onClick={onClickAddNewAddress}>ADD NEW ADDRESS</button>
          <button onClick={props.onClick}>CANCEL</button>
        </div>
      </div>
    </div>
  );
}

export default EditDeliveryAddress;
