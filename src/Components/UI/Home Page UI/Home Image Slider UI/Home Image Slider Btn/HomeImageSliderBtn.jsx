import React from "react";
import "./HomeImageSliderBtn.css";

function HomeImageSliderBtn(props) {
  return (
    <div
      style={props.icon === ">" ? { right: "5px" } : { left: "5px" }}
      className=" HomeImageSliderBtn-div "
    >
      <button
        onClick={props.onClick}
        style={
          props.icon === ">"
            ? {
                left: "0px",
                borderTopLeftRadius: "15px",
                borderBottomLeftRadius: "15px",
              }
            : {
                right: "0px",
                borderTopRightRadius: "15px",
                borderBottomRightRadius: "15px",
              }
        }
      >
        {props.icon}
      </button>
    </div>
  );
}

export default HomeImageSliderBtn;
