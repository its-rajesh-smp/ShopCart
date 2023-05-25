import React from "react";
import "./SmallProductImageContainer.css";

function SmallProductImageContainer(props) {
  return (
    <div className=" SmallProductImageContainer-div ">
      <div className=" SmallProductImageContainer-div__contianer">
        {props.data.images.map((img) => {
          return <img key={Math.random()} src={img} alt="" />;
        })}
      </div>

      <div className=" SmallProductImageContainer-div__mainImgContainer">
        <img
          className="SmallProductImageContainer-div__mainImg"
          src={props.data.thumbnail}
          alt=""
        />
        <div>
          <button className="buyNowBtn">BUY NOW</button>
          <button className="addToCartBtn">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
}

export default SmallProductImageContainer;
