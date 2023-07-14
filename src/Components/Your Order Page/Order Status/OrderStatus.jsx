import React from "react";
import "./OrderStatus.css";
import randomNumber from "../../../Functions/randomNumber";

function OrderStatus(props) {
  const orderTime = new Date().toLocaleDateString();
  const deliveryTime = new Date().toLocaleDateString();
  const currentStatus = randomNumber(0, 7)

  const statusObj = {
    0: [true],
    1: [true, true],
    2: [true, true, true],
    3: [true, true, true, true, true],
    4: [true, true, true, true, true, true],
    5: [true, true, true, true, true, true, true],
    6: [true, true, true, true, true, true, true, true],
    7: [true, true, true, true, true, true, true, true, true],
  };
  const statusArr = statusObj[currentStatus];

  return (
    <div className=" OrderStatus-div ">
      <div className="OrderStatus-div__lineContainer">
        <div
          className={`${statusArr[0] ? "active_orderStatus" : "inActive_orderStatus"
            } point`}
        ></div>

        <div
          className={`${statusArr[1] ? "active_orderStatus" : "inActive_orderStatus"
            } centerLine`}
        ></div>

        <div
          className={`${statusArr[2] ? "active_orderStatus" : "inActive_orderStatus"
            } point`}
        ></div>

        <div
          className={`${statusArr[3] ? "active_orderStatus" : "inActive_orderStatus"
            } centerLine`}
        ></div>

        <div
          className={`${statusArr[4] ? "active_orderStatus" : "inActive_orderStatus"
            } point`}
        ></div>

        <div
          className={`${statusArr[5] ? "active_orderStatus" : "inActive_orderStatus"
            } centerLine`}
        ></div>

        <div
          className={`${statusArr[6] ? "active_orderStatus" : "inActive_orderStatus"
            } point`}
        ></div>

        <div
          className={`${statusArr[7] ? "active_orderStatus" : "inActive_orderStatus"
            } centerLine`}
        ></div>

        <div
          className={`${statusArr[8] ? "active_orderStatus" : "inActive_orderStatus"
            } point`}
        ></div>
      </div>
      <div className="OrderStatus-div__statusContainer">
        <p>{orderTime}</p>
        <p>Dispatched</p>
        <p>On The Way</p>
        <p>Near To You</p>
        <p>{deliveryTime}</p>
      </div>
    </div>
  );
}

export default OrderStatus;
