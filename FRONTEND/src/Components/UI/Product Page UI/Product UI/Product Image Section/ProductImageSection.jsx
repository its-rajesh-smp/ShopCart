import React, { useState } from "react";
import "./ProductImageSection.css";
import { useDispatch } from "react-redux";
import {
  decreamentCartQuantity,
  increamentCartQuantity,
} from "../../../../../Store/Actions/userCartActions";

function ProductImageSection({ productDetails }) {
  const dispatch = useDispatch();


  // Increament Quantity
  const increamentQuantity = () => {
    dispatch(
      increamentCartQuantity(
        productDetails.cartId,
        productDetails.quantity,
        productDetails.price
      )
    );
  };

  // Decreament Quantity
  const decreamentQuantity = () => {
    dispatch(
      decreamentCartQuantity(
        productDetails.cartId,
        productDetails.quantity,
        productDetails.price
      )
    );
  };

  return (
    <div className=" ProductImageSection-div ">
      <i className="bx bxs-heart"></i>
      <img
        // onClick={props.onClick}
        src={JSON.parse(productDetails.images)[0]}
        alt="productImage"
      />

      {false && (
        <div className="ProductImageSection-div__btnContainer">
          <button onClick={increamentQuantity}>+</button>
          <p>{productDetails.quantity}</p>
          <button onClick={decreamentQuantity}>-</button>
        </div>
      )}
    </div>
  );
}

export default ProductImageSection;
