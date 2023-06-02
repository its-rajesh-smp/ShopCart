import React from "react";
import "./OrderDetailsPage.css";
import YourOrderItem from "../../Components/Your Order Page/Your Order Item/YourOrderItem";
import { TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function OrderDetailsPage(props) {
  const allOrders = useSelector((state) => state.userOrdersSlice.orders);
  const param = useParams();
  const bigOrderId = param.bigOrderId;
  const smallOrderId = param.smallOrderId;

  return (
    <div className=" OrderDetailsPage-div remove__Header">
      {/* ADDRESS DIV */}
      <div className="OrderDetailsPage-div__deliveryCard">
        <div className="OrderDetailsPage-div__deliveryAddress">
          <h2>Delivery Address</h2>
          <p>Sourav Pathak</p>
          <p>Tilaboni More Tilaboni, Bankura District - 722160, West Bengal</p>
          <p>
            <span>Phone number</span> <span>6294152789</span>
          </p>
          <p>This order is also tracked by 6294543902</p>
        </div>

        {/* INVOICE DIV */}
        <div className="OrderDetailsPage-div__invoice">
          <h2>More actions</h2>
          <div>
            <p>📄</p>
            <p>Download Invoice</p>
            <button>Download</button>
          </div>
        </div>
      </div>

      {/* YOUR ORDER ITEM */}
      {/* <YourOrderItem /> */}

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
