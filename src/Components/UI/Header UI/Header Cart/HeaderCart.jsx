import React from "react";
import "./HeaderCart.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function HeaderCart(props) {
  const cartTotalQuantity = useSelector(
    (state) => state.totalAmountSlice.amountDetails.totalQuantity
  );

  const navigate = useNavigate();
  const onClickCartNavigate = () => {
    navigate("/cart");
  };

  return (
    <div onClick={onClickCartNavigate} className=" HeaderCart-div ">
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
