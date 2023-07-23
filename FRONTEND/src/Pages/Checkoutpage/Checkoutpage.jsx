import React, { useEffect, useState } from "react";
import "./Checkoutpage.css";
import CartPagePriceCard from "../../Components/Cart Page/Cart Page Price Card/CartPagePriceCard";
import CheckoutDropdownAccordionContainer from "../../Components/Checkout Page/Checkout Dropdown Accordion/CheckoutDropdownAccordionContainer";
import { useDispatch } from "react-redux";
import { fetchUserAddress } from "../../Store/Actions/userAddressActions";
import OrderSuccessPage from "../OrderSuccessPage/OrderSuccessPage";

function Checkoutpage(props) {
  const dispatch = useDispatch();
  // Fetching User Address
  useEffect(() => {
    dispatch(fetchUserAddress());
  }, []);

  // On Click Place Order
  const [showPlaceOrder, setShowPlaceOrder] = useState(false);
  const onPlaceOrderBtnClick = () => {
    setShowPlaceOrder((p) => !p);
  };

  if (showPlaceOrder) {
    return <OrderSuccessPage afterFive={onPlaceOrderBtnClick} />;
  }

  return (
    <div className=" Checkoutpage-div remove__Header">
      <CheckoutDropdownAccordionContainer onOrderPlace={onPlaceOrderBtnClick} />
      <CartPagePriceCard />
    </div>
  );
}

export default Checkoutpage;
