import React, { useEffect, useState } from "react";
import "./OrderDetailsPage.css";
import YourOrderItem from "../../Components/Your Order Page/Your Order Item/YourOrderItem";
import { TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchOrderDetailsAct } from "../../Store/Actions/orderDetailsAction";
import DownloadPdfBtn from "../../Functions/GeneratePdf";

function OrderDetailsPage(props) {
  const param = useParams();
  const orderId = param.orderId;
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    dispatch(fetchOrderDetailsAct(orderId, setLoader));
  }, []);

  const orderdetails = useSelector(
    (state) => state.orderDetailsSlice.orderData
  );
  if (Object.keys(orderdetails).length === 0) {
    return;
  }

  const orderAddress = orderdetails.orderAddress;

  return (
    <div className=" OrderDetailsPage-div remove__Header">
      {/* ADDRESS DIV */}
      <div className="OrderDetailsPage-div__deliveryCard">
        <div className="OrderDetailsPage-div__deliveryAddress">
          <h2>Delivery Address</h2>
          <p>{orderAddress.name}</p>
          <p className="boldField">{orderAddress.landmark}</p>
          <p>
            <span>{orderAddress.city}</span> , <span>{orderAddress.area}</span>-{" "}
            <span className="boldField">{orderAddress.pincode}</span> ,{" "}
            <span>{orderAddress.state}</span>
          </p>
          <p>
            <span>Phone number :-</span>{" "}
            <span className="boldField">{orderAddress.mobile}</span>
            {" | "}
            <span>Alternative number :-</span>{" "}
            <span className="boldField">{orderAddress.alternateMobile}</span>
          </p>
          <p>This order is also tracked by {orderId}</p>
        </div>

        {/* INVOICE DIV */}
        <div className="OrderDetailsPage-div__invoice">
          <h2>More actions</h2>
          <div>
            <p>📄</p>
            <p>Download Invoice</p>
            <DownloadPdfBtn data={orderdetails} orderId={orderId} />
          </div>
        </div>
      </div>

      {/* YOUR ORDER ITEM */}
      {!loader && (
        <YourOrderItem
          path="FROM_ORDERDETAILS"
          data={orderdetails}
          key={orderId}
        />
      )}

      {/* REPORT A PROBLEM */}
      <div className="OrderDetailsPage-div__reportProblem">
        <h2>Issues with this order</h2>
        <div>
          <TextField
            label="Enter Your Issue"
            id="outlined-size-small"
            size="small"
          />
          <button>REPORT</button>
        </div>
      </div>
    </div>
  );
}

export default OrderDetailsPage;
