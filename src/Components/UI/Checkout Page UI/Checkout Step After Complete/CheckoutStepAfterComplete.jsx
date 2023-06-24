import React from "react";
import "./CheckoutStepAfterComplete.css";
import { useDispatch } from "react-redux";
import {
  goToFirstStep,
  goToSecondStep,
} from "../../../../Store/Reducer/checkoutStepReducer";

function CheckoutStepAfterComplete(props) {
  const dispatch = useDispatch();
  // GO BACK ON CLICK CHANGE BTN
  const onChangeBtnClick = () => {
    if (props.step === "1") {
      dispatch(goToFirstStep());
    } else if (props.step === "2") {
      dispatch(goToSecondStep());
    }
  };

  return (
    <div className="CheckoutAccordionCard-div_bar   CheckoutAccordionCard-div_bar__shadow">
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
      <button onClick={onChangeBtnClick}>CHANGE</button>
    </div>
  );
}

export default CheckoutStepAfterComplete;
