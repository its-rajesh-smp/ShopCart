import React from "react";
import "./CheckoutDropdownAccordionContainer.css";
import CheckoutAccordionCard from "../../UI/Checkout Page UI/CheckoutAccordionCard/CheckoutAccordionCard";
import DeliveryAddress from "../../UI/Checkout Page UI/Delivery Address/DeliveryAddress";
import EditDeliveryAddress from "../../UI/Checkout Page UI/Edit Delivery Address/EditDeliveryAddress";
import AddNewAddress from "../../UI/Checkout Page UI/Add New Address/AddNewAddress";
import CartProductsContainer from "../../Cart Page/Cart Products Container/CartProductsContainer";
import PaymentCard from "../../UI/Checkout Page UI/Payment Card/PaymentCard";
import { useSelector } from "react-redux";

function CheckoutDropdownAccordionContainer(props) {
  const userAddress = useSelector((state) => state.userAddressSlice.address);

  return (
    <div className=" CheckoutDropdownAccordionContainer-div ">
      <CheckoutAccordionCard>
        {userAddress.map((addressData) => {
          return <DeliveryAddress key={addressData.id} data={addressData} />;
        })}
        <AddNewAddress />
      </CheckoutAccordionCard>

      <CheckoutAccordionCard>
        {/* <CartProductsContainer />
                <div className='Cartpage-div__checkoutBTN__div'><button>CONTINUE</button></div> */}
      </CheckoutAccordionCard>

      <CheckoutAccordionCard>
        {/* <PaymentCard />
                <div className='Cartpage-div__checkoutBTN__div'><button>PLACE ORDER</button></div> */}
      </CheckoutAccordionCard>
    </div>
  );
}

export default CheckoutDropdownAccordionContainer;
