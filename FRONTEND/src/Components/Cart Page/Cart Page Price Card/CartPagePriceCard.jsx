import React from "react";
import "./CartPagePriceCard.css";
import { useSelector } from "react-redux";

function CartPagePriceCard(props) {
  const itemTotal = useSelector(
    (state) => state.totalAmountSlice.amountDetails
  );

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
              {itemTotal.totalQuantity} items{")"}
            </p>
            <p>₹{itemTotal.totalAmount}</p>
          </div>

          <div className="totalPrice">
            <p>Total Amount</p>
            <p>₹{itemTotal.totalAmount}</p>
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
