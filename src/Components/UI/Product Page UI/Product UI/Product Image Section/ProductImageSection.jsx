import React from "react";
import "./ProductImageSection.css";

function ProductImageSection(props) {
  return (
    <div className=" ProductImageSection-div ">
      <i className="bx bxs-heart"></i>
      <img src={props.data.thumbnail} alt="productImage" />

      {props.showBtn && (
        <div className="ProductImageSection-div__btnContainer">
          <button>+</button>
          <p>10</p>
          <button>-</button>
        </div>
      )}
    </div>
  );
}

export default ProductImageSection;
