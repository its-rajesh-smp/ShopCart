import React from "react";
import "./HeaderCart.css";
import { useSelector } from "react-redux";

function HeaderCart(props) {
  const cartTotalQuantity = useSelector(
    (state) => state.totalAmountSlice.amountDetails.totalQuantity
  );

  return (
    <div className=" HeaderCart-div ">
      <div>
        <i className="bx bxs-cart-alt"></i>
        <div>
          <span>{cartTotalQuantity}</span>
        </div>
      </div>
      <p>Cart</p>
    </div>
  );
}

export default HeaderCart;
