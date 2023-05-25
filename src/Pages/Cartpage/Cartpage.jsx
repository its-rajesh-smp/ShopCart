import React from "react";
import "./Cartpage.css";
import CartPageTopBar from "../../Components/Cart Page/Cart Page Top Bar/CartPageTopBar";
import CartPagePriceCard from "../../Components/Cart Page/Cart Page Price Card/CartPagePriceCard";
import CartProductsContainer from "../../Components/Cart Page/Cart Products Container/CartProductsContainer";
import { useSelector } from "react-redux";

function Cartpage(props) {
  const itemTotal = useSelector(
    (state) => state.totalAmountSlice.amountDetails
  );

  if (itemTotal.totalQuantity === 0) {
    return <h1>NOTHING TO SHOW</h1>;
  }

  return (
    <div className=" Cartpage-div remove__Header ">
      <div>
        <CartPageTopBar />
        <CartProductsContainer />
        <div className="Cartpage-div__checkoutBTN__div">
          <button>PLACE ORDER</button>
        </div>
      </div>

      <div>
        <CartPagePriceCard data={itemTotal} />
      </div>
    </div>
  );
}

export default Cartpage;
