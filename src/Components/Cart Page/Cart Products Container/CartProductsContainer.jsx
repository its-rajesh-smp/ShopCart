import React, { memo } from "react";
import "./CartProductsContainer.css";
import Product from "../../Product Page/Product/Product";
import { useSelector } from "react-redux";

function CartProductsContainer(props) {
  const cartProductList = useSelector((state) => state.userCartSlice.cartArr);
  console.log(cartProductList);


  return (
    <div className=" CartProductsContainer-div ">
      {cartProductList.map((cartItem) => {
        return (
          <Product
            incDecBtn={true}
            key={cartItem.$id}
            showDetailsList={false}
            productDetails={cartItem}
          />
        );
      })}
    </div>
  );
}

export default CartProductsContainer;
