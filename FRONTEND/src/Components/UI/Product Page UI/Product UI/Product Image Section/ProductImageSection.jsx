import React, { useState } from "react";
import "./ProductImageSection.css";
import { useDispatch } from "react-redux";
import {
  decreamentCartQuantity,
  increamentCartQuantity,
} from "../../../../../Store/Actions/userCartActions";

function ProductImageSection(props) {
  const dispatch = useDispatch();

  // Increament Quantity
  const increamentQuantity = () => {
    dispatch(
      increamentCartQuantity(
        props.data.cartId,
        props.data.quantity,
        props.data.price
      )
    );
  };

  // Decreament Quantity
  const decreamentQuantity = () => {
    dispatch(
      decreamentCartQuantity(
        props.data.cartId,
        props.data.quantity,
        props.data.price
      )
    );
  };

  return (
    <div className=" ProductImageSection-div ">
      <i className="bx bxs-heart"></i>
      <img
        onClick={props.onClick}
        src={props.data.thumbnail}
        alt="productImage"
      />

      {props.showBtn && (
        <div className="ProductImageSection-div__btnContainer">
          <button onClick={increamentQuantity}>+</button>
          <p>{props.data.quantity}</p>
          <button onClick={decreamentQuantity}>-</button>
        </div>
      )}
    </div>
  );
}

export default ProductImageSection;
