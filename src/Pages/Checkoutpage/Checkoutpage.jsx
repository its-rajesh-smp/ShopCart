import React from "react";
import "./Checkoutpage.css";
import CartPagePriceCard from "../../Components/Cart Page/Cart Page Price Card/CartPagePriceCard";
import CheckoutDropdownAccordionContainer from "../../Components/Checkout Page/Checkout Dropdown Accordion/CheckoutDropdownAccordionContainer";

function Checkoutpage(props) {
  return (
    <div className=" Checkoutpage-div remove__Header">
      <CheckoutDropdownAccordionContainer />
      <CartPagePriceCard />
    </div>
  );
}

export default Checkoutpage;
