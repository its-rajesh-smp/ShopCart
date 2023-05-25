import React, { useState } from "react";
import "./ProductImageSection.css";
import { useDispatch } from "react-redux";
import {
  decreamentCartQuantity,
  increamentCartQuantity,
} from "../../../../../Store/Actions/userCartActions";

function ProductImageSection(props) {
  const [quantity, setQuantity] = useState(props.data.quantity);
  const dispatch = useDispatch();

  // Increament Quantity
  const increamentQuantity = () => {
    dispatch(
      increamentCartQuantity(
        props.data.cartId,
        quantity,
        props.data.price,
        setQuantity
      )
    );
  };

  // Decreament Quantity
  const decreamentQuantity = () => {
    dispatch(
      decreamentCartQuantity(
        props.data.cartId,
        quantity,
        props.data.price,
        setQuantity
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
          <p>{quantity}</p>
          <button onClick={decreamentQuantity}>-</button>
        </div>
      )}
    </div>
  );
}

export default ProductImageSection;
