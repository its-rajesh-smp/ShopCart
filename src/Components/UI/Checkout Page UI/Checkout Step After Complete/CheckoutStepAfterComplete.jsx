import React from "react";
import "./CheckoutStepAfterComplete.css";

function CheckoutStepAfterComplete(props) {
  // GO BACK ON CLICK CHANGE BTN

  return (
    <div className="CheckoutAccordionCard-div_bar CheckoutAccordionCard-div_bar__shadow ">
      <p className="CheckoutAccordionCard-div__number">{props.step}</p>
      <div>
        <div className="CheckoutAccordionCard-div_bar_currentTick">
          <p>{props.for}</p>
          <i className="bx bx-check"></i>
        </div>
        <p className="CheckoutAccordionCard-div_bar__shadow__current">
          {props.show}
        </p>
      </div>
      <button>CHANGE</button>
    </div>
  );
}

export default CheckoutStepAfterComplete;
