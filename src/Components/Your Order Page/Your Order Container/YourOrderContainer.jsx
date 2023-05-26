import React from "react";
import "./YourOrderContainer.css";
import YourOrderItem from "../Your Order Item/YourOrderItem";
import { useSelector } from "react-redux";

function YourOrderContainer(props) {
  const yourOrders = useSelector((state) => state.userOrdersSlice.orders);
  if (yourOrders.length === 0) {
    return;
  }
  //  Extrating And Forming Order Item From A Order
  const orderItemArr = yourOrders.map((order) => {
    return order.orderItems.map((orderItem) => {
      return (
        <YourOrderItem
          data={orderItem}
          orderId={order.orderId}
          orderAddress={order.orderAddress}
          key={orderItem.cartId}
        />
      );
    });
  });

  return (
    <div className=" YourOrderContainer-div ">
      <div className="YourOrderContainer-div__searchDiv">
        <input type="text" placeholder="Search your orders here" />
        <button>Search Orders</button>
      </div>

      <div className="YourOrderContainer-div__orderContainer">
        {orderItemArr}
      </div>
    </div>
  );
}

export default YourOrderContainer;
