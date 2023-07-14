import React, { useState } from "react";
import "./ProductImageSection.css";
import { useDispatch } from "react-redux";
import {
  decreamentCartQuantity,
  increamentCartQuantity,
} from "../../../../../Store/Actions/userCartActions";

function ProductImageSection({ productDetails, incDecBtn }) {
  const dispatch = useDispatch();


  // Increament Quantity
  const increamentQuantity = (e) => {
    e.stopPropagation()
    dispatch(
      increamentCartQuantity(productDetails)
    );
  };

  // Decreament Quantity
  const decreamentQuantity = (e) => {
    e.stopPropagation()
    dispatch(
      decreamentCartQuantity(productDetails)
    );
  };

  return (
    <div className=" ProductImageSection-div ">
      <i className="bx bxs-heart"></i>
      <img
        src={productDetails.images[0]}
        alt="productImage"
      />

      {/* Cart Quantity Increament Decreament Buttons */}
      {incDecBtn && (
        <div className="ProductImageSection-div__btnContainer">
          <button onClick={increamentQuantity}>+</button>
          <p>{productDetails.cartQuantity}</p>
          <button onClick={decreamentQuantity}>-</button>
        </div>
      )}
    </div>
  );
}

export default ProductImageSection;
