import React from "react";
import "./CartPagePriceCard.css";

function CartPagePriceCard(props) {
  return (
    <div className=" CartPagePriceCard-div ">
      <div className="CartPagePriceCard-div__container">
        <div className="priceDetails">
          <p>PRICE DETAILS</p>
        </div>
        <div>
          <div>
            <p>
              Price {"("}
              {props.data.totalQuantity} items{")"}
            </p>
            <p>₹{props.data.totalAmount}</p>
          </div>

          <div className="totalPrice">
            <p>Total Amount</p>
            <p>₹{props.data.totalAmount}</p>
          </div>

          <div className="totalSave">
            <p>You will save ₹11,171 on this order</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPagePriceCard;
