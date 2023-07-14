import React, { useState } from "react";
import "./AddNewAddress.css";
import EditDeliveryAddress from "../Edit Delivery Address/EditDeliveryAddress";

function AddNewAddress(props) {
  const [showForm, setShowForm] = useState(false);

  // Function To Show and Hide Edit Delivery Address Form
  const handelShowForm = () => {
    setShowForm((p) => !p);
  };

  return (
    <div className=" AddNewAddress-div ">
      {!showForm && (
        <div className="AddNewAddress-div__bar">
          <i className="bx bx-plus"></i>
          <p onClick={handelShowForm}>Add new Address</p>
        </div>
      )}

      {showForm && <EditDeliveryAddress handelShowForm={handelShowForm} />}
    </div>
  );
}

export default AddNewAddress;
