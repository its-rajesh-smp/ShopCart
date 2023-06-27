import React from "react";
import "./YourOrderContainer.css";
import YourOrderItem from "../Your Order Item/YourOrderItem";
import { useSelector } from "react-redux";

function YourOrderContainer(props) {
  const yourOrders = useSelector((state) => state.userOrdersSlice.orders);
  if (yourOrders.length === 0) {
    return;
  }

  return (
    <div className=" YourOrderContainer-div ">
      {/* <div className="YourOrderContainer-div__searchDiv">
        <input type="text" placeholder="Search your orders here" />
        <button>Search Orders</button>
      </div> */}

      <div className="YourOrderContainer-div__orderContainer">
        {yourOrders.map((order) => {
          return <YourOrderItem data={order} key={order.orderId} />;
        })}
      </div>
    </div>
  );
}

export default YourOrderContainer;
