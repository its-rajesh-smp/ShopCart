import React from "react";
import "./Cartpage.css";
import CartPageTopBar from "../../Components/Cart Page/Cart Page Top Bar/CartPageTopBar";
import CartPagePriceCard from "../../Components/Cart Page/Cart Page Price Card/CartPagePriceCard";
import CartProductsContainer from "../../Components/Cart Page/Cart Products Container/CartProductsContainer";

function Cartpage(props) {
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
        <CartPagePriceCard />
      </div>
    </div>
  );
}

export default Cartpage;
