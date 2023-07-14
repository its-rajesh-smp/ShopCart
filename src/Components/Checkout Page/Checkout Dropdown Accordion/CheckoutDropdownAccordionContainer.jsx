import React from "react";
import "./CheckoutDropdownAccordionContainer.css";
import CheckoutAccordionCard from "../../UI/Checkout Page UI/CheckoutAccordionCard/CheckoutAccordionCard";
import DeliveryAddress from "../../UI/Checkout Page UI/Delivery Address/DeliveryAddress";
import AddNewAddress from "../../UI/Checkout Page UI/Add New Address/AddNewAddress";
import CartProductsContainer from "../../Cart Page/Cart Products Container/CartProductsContainer";
import PaymentCard from "../../UI/Checkout Page UI/Payment Card/PaymentCard";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../../../Store/Reducer/checkoutStepReducer";
import { placeUserOrder } from "../../../Store/Actions/userOrdersActions";
import CheckoutStepAfterComplete from "../../UI/Checkout Page UI/Checkout Step After Complete/CheckoutStepAfterComplete";

function CheckoutDropdownAccordionContainer({ handelOrderSuccess }) {
  const dispatch = useDispatch();


  // Getting User All Address
  const userAddressList = useSelector((state) => state.userAddressSlice);

  // Getting Checkout Steps
  const checkoutStep = useSelector((state) => state.checkoutStepSlice);

  // Getting Total Amounts
  const totalUserCart = useSelector(
    (state) => state.totalAmountSlice.amountDetails
  );

  // On  Click Continue Btn In Cart Accrodian
  const onClickContinueBtnHandeler = () => {
    dispatch(setCart());
  };

  /* -------------------------------------------------------------------------- */
  /*                          PLACE ORDER BTN HANDELER                          */
  /* -------------------------------------------------------------------------- */
  const onClickPlaceOrderBtnHandeler = () => {
    dispatch(placeUserOrder(handelOrderSuccess));
  };

  return (
    <div className=" CheckoutDropdownAccordionContainer-div ">

      {/* ADDRESS */}
      {!checkoutStep.showShadowDelivery ? (
        <CheckoutAccordionCard step="1" for="DELIVERY ADDRESS">
          {checkoutStep.deliveryAddress && (
            <>
              {userAddressList.address.map((addressData) => {
                return (
                  <DeliveryAddress
                    forEdit={true}
                    key={addressData.$id}
                    addressData={addressData}
                  />
                );
              })}
              <AddNewAddress />
            </>
          )}
        </CheckoutAccordionCard>
      ) : (
        <CheckoutStepAfterComplete
          show={`${userAddressList.selectedAddress.userName}, ${userAddressList.selectedAddress.userMobile}, ${userAddressList.selectedAddress.userPincode}`}
          step="1"
          for="DELIVERY ADDRESS"
        />
      )}



      {/* CART ITEMS */}
      {!checkoutStep.showShadowCart ? (
        <CheckoutAccordionCard step="2" for="CART ITEMS">
          {checkoutStep.cart && (
            <>
              <CartProductsContainer />
              <div className="Cartpage-div__checkoutBTN__div">
                <button onClick={onClickContinueBtnHandeler}>CONTINUE</button>
              </div>
            </>
          )}
        </CheckoutAccordionCard>
      ) : (
        <CheckoutStepAfterComplete
          show={`${totalUserCart.totalQuantity} Items`}
          step="2"
          for="CART ITEMS"
        />
      )}



      {/* PAYMENT OPTION */}
      <CheckoutAccordionCard step="3" for="PAYMENT METHOD">
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
