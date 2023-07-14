import React, { useState } from "react";
import "./SmallProductImageContainer.css";
import { useDispatch, useSelector } from "react-redux";
import { addProductInUserCart } from "../../../../Store/Actions/userCartActions";

function SmallProductImageContainer({ productDetails }) {
  const dispatch = useDispatch();


  // Getting All Cart Products
  const allCartItems = useSelector(state => state.userCartSlice.cartArr)

  // Checking Is The Product is Already In Cart
  const isPresent = allCartItems.find((cartItem) => cartItem.$id === productDetails.$id)


  // On Click Add to Cart Btn Product Add To Cart
  const onAddToCartBtnHandeler = () => {
    if (!isPresent) {
      dispatch(addProductInUserCart(productDetails));
    }
  };


  // Initially -1 so showing thumbnail
  const [mainImage, setMainImage] = useState(0);


  // Change Main Image on Click Small Image
  const onClickSmallImageChangeMainImage = (index) => {
    setMainImage(index);
  };

  return (
    <div className=" SmallProductImageContainer-div ">
      <div className=" SmallProductImageContainer-div__contianer">
        {productDetails.images.map((img, index) => {
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
          src={productDetails.images[mainImage]}
          alt=""
        />
        <div>
          {/* <button className="buyNowBtn">BUY NOW</button> */}
          <button onClick={onAddToCartBtnHandeler} className="addToCartBtn">
            {isPresent ? "ALREADY IN CART" : "ADD TO CART"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SmallProductImageContainer;
