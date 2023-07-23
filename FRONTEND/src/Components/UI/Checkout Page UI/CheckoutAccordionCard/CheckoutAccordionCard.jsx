import React, { memo } from "react";
import "./CheckoutAccordionCard.css";

function CheckoutAccordionCard(props) {
  return (
    <div className=" CheckoutAccordionCard-div ">
      <div className="CheckoutAccordionCard-div_bar ">
        <p className="CheckoutAccordionCard-div__number">{props.step}</p>
        <p>{props.for}</p>
      </div>

      {props.children}
    </div>
  );
}

export default CheckoutAccordionCard;
