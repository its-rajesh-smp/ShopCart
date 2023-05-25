import React from "react";
import "./SmallProductImageContainer.css";
import { useDispatch } from "react-redux";
import { addProductInUserCart } from "../../../../Store/Actions/userCartActions";

function SmallProductImageContainer(props) {
  const dispatch = useDispatch();
  // On Click Add to Cart Btn Product Add To Cart
  const onAddToCartBtnHandeler = () => {
    dispatch(addProductInUserCart(props.data));
  };
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
          <button onClick={onAddToCartBtnHandeler} className="addToCartBtn">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}

export default SmallProductImageContainer;
