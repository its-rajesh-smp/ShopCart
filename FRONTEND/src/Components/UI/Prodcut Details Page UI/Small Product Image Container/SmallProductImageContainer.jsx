import React, { useState } from "react";
import "./SmallProductImageContainer.css";
import { useDispatch } from "react-redux";
import { addProductInUserCart } from "../../../../Store/Actions/userCartActions";

function SmallProductImageContainer(props) {
  const dispatch = useDispatch();
  // On Click Add to Cart Btn Product Add To Cart
  const onAddToCartBtnHandeler = () => {
    dispatch(addProductInUserCart(props.data));
  };

  // Initially -1 so showing thumbnail
  const [mainImage, setMainImage] = useState(-1);

  // Change Main Image on Click Small Image
  const onClickSmallImageChangeMainImage = (index) => {
    setMainImage(index);
  };

  return (
    <div className=" SmallProductImageContainer-div ">
      <div className=" SmallProductImageContainer-div__contianer">
        {props.data.images.map((img, index) => {
          return (
            <img
              onClick={(e) => {
                onClickSmallImageChangeMainImage(e.target.id);
              }}
              key={Math.random()}
              id={index}
              src={img}
              alt=""
            />
          );
        })}
      </div>

      <div className=" SmallProductImageContainer-div__mainImgContainer">
        <img
          className="SmallProductImageContainer-div__mainImg"
          src={
            mainImage === -1
              ? props.data.thumbnail
              : props.data.images[mainImage]
          }
          alt=""
        />
        <div>
          <button className="buyNowBtn">BUY NOW</button>
          <button onClick={onAddToCartBtnHandeler} className="addToCartBtn">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}

export default SmallProductImageContainer;
