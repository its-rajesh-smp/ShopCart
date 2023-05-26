import React, { useEffect } from "react";
import "./Checkoutpage.css";
import CartPagePriceCard from "../../Components/Cart Page/Cart Page Price Card/CartPagePriceCard";
import CheckoutDropdownAccordionContainer from "../../Components/Checkout Page/Checkout Dropdown Accordion/CheckoutDropdownAccordionContainer";
import { useDispatch } from "react-redux";
import { fetchUserAddress } from "../../Store/Actions/userAddressActions";

function Checkoutpage(props) {
  const dispatch = useDispatch();
  // Fetching User Address
  useEffect(() => {
    dispatch(fetchUserAddress());
  }, []);

  return (
    <div className=" Checkoutpage-div remove__Header">
      <CheckoutDropdownAccordionContainer />
      <CartPagePriceCard />
    </div>
  );
}

export default Checkoutpage;
