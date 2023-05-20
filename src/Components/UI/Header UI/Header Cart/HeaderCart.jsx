import React from "react";
import "./HeaderCart.css";

function HeaderCart(props) {
  return (
    <div className=" HeaderCart-div ">
      <div>
        <i className="bx bxs-cart-alt"></i>
        <div>
          <span>2</span>
        </div>
      </div>
      <p>Cart</p>
    </div>
  );
}

export default HeaderCart;
