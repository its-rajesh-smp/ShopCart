import React from "react";
import "./CheckoutDropdownAccordionContainer.css";
import CheckoutAccordionCard from "../../UI/Checkout Page UI/CheckoutAccordionCard/CheckoutAccordionCard";
import DeliveryAddress from "../../UI/Checkout Page UI/Delivery Address/DeliveryAddress";
import AddNewAddress from "../../UI/Checkout Page UI/Add New Address/AddNewAddress";
import CartProductsContainer from "../../Cart Page/Cart Products Container/CartProductsContainer";
import PaymentCard from "../../UI/Checkout Page UI/Payment Card/PaymentCard";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../../../Store/Reducer/checkoutStepReducer";
import { placeUserOrder } from "../../../Store/Actions/placeOrderAction";
import CheckoutStepAfterComplete from "../../UI/Checkout Page UI/Checkout Step After Complete/CheckoutStepAfterComplete";

function CheckoutDropdownAccordionContainer(props) {
  const userAddress = useSelector((state) => state.userAddressSlice);
  const checkoutStep = useSelector((state) => state.checkoutStepSlice);
  const totalUserCart = useSelector(
    (state) => state.totalAmountSlice.amountDetails
  );
  const dispatch = useDispatch();

  // On  Click Continue Btn In Cart Accrodian
  const onClickContinueBtnHandeler = () => {
    dispatch(setCart());
  };

  // On Click Place Order Btn In Payment Accrodian
  const onClickPlaceOrderBtnHandeler = () => {
    dispatch(placeUserOrder());
    props.onOrderPlace();
  };

  return (
    <div className=" CheckoutDropdownAccordionContainer-div ">
      {!checkoutStep.showShadowDelivery ? (
        <CheckoutAccordionCard step="1" for="DELIVERY ADDRESS">
          {checkoutStep.deliveryAddress && (
            <>
              {userAddress.address.map((addressData) => {
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
      ) : (
        <CheckoutStepAfterComplete
          show={`${userAddress.selectedAddress.name}, ${userAddress.selectedAddress.mobile}, ${userAddress.selectedAddress.pincode}`}
          step="1"
          for="DELIVERY ADDRESS"
        />
      )}

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
