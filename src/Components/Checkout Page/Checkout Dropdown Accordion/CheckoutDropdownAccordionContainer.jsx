import React from "react";
import "./CheckoutDropdownAccordionContainer.css";
import CheckoutAccordionCard from "../../UI/Checkout Page UI/CheckoutAccordionCard/CheckoutAccordionCard";
import DeliveryAddress from "../../UI/Checkout Page UI/Delivery Address/DeliveryAddress";
import EditDeliveryAddress from "../../UI/Checkout Page UI/Edit Delivery Address/EditDeliveryAddress";
import AddNewAddress from "../../UI/Checkout Page UI/Add New Address/AddNewAddress";
import CartProductsContainer from "../../Cart Page/Cart Products Container/CartProductsContainer";
import PaymentCard from "../../UI/Checkout Page UI/Payment Card/PaymentCard";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../../../Store/Reducer/checkoutStepReducer";

function CheckoutDropdownAccordionContainer(props) {
  const userAddress = useSelector((state) => state.userAddressSlice.address);
  const checkoutStep = useSelector((state) => state.checkoutStepSlice);
  const dispatch = useDispatch();

  // On  Click Continue Btn In Cart Accrodian
  const onClickContinueBtnHandeler = () => {
    dispatch(setCart());
  };

  // On Click Place Order Btn In Payment Accrodian
  const onClickPlaceOrderBtnHandeler = () => {};

  return (
    <div className=" CheckoutDropdownAccordionContainer-div ">
      <CheckoutAccordionCard>
        {checkoutStep.deliveryAddress && (
          <>
            {userAddress.map((addressData) => {
              return (
                <DeliveryAddress
                  forEdit={true}
                  key={addressData.id}
                  data={addressData}
                />
              );
            })}
            <AddNewAddress />
          </>
        )}
      </CheckoutAccordionCard>

      <CheckoutAccordionCard>
        {checkoutStep.cart && (
          <>
            <CartProductsContainer />
            <div className="Cartpage-div__checkoutBTN__div">
              <button onClick={onClickContinueBtnHandeler}>CONTINUE</button>
            </div>
          </>
        )}
      </CheckoutAccordionCard>

      <CheckoutAccordionCard>
        {checkoutStep.payment && (
          <>
            <PaymentCard />
            <div className="Cartpage-div__checkoutBTN__div">
              <button onClick={onClickPlaceOrderBtnHandeler}>
                PLACE ORDER
              </button>
            </div>
          </>
        )}
      </CheckoutAccordionCard>
    </div>
  );
}

export default CheckoutDropdownAccordionContainer;
