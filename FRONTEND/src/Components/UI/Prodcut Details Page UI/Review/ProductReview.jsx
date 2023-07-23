import React from "react";
import "./ProductReview.css";

function ProductReview(props) {
  return (
    <div className=" ProductReview-div ">
      <p className="ProductReview-div_name">{props.data.userName}</p>
      <div className="ProductReview-div_rating">
        <p>
          <span>{props.data.rating}</span>⭐
        </p>
        <p>
          Posted on <span>{props.data.date}</span>
        </p>
      </div>
      <div className="ProductReview-div_comment">
        <p>{props.data.review}</p>
      </div>
    </div>
  );
}

export default ProductReview;
