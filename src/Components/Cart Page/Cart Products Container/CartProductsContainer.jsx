import React from "react";
import "./CartProductsContainer.css";
import Product from "../../Product Page/Product/Product";
import { useSelector } from "react-redux";

function CartProductsContainer(props) {
  const cartProductList = useSelector((state) => state.userCartSlice.cartArr);

  return (
    <div className=" CartProductsContainer-div ">
      {cartProductList.map((cartItem, index) => {
        return (
          <Product
            showDetailsList={false}
            showBtn={true}
            key={Math.random()}
            id={cartItem.id}
            data={cartItem}
          />
        );
      })}
    </div>
  );
}

export default CartProductsContainer;
