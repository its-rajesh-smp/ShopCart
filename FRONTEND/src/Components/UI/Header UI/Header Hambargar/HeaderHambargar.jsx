import React from "react";
import "./HeaderHambargar.css";

function HeaderHambargar(props) {
  return (
    <div className=" HeaderHambargar-div ">
      <i onClick={props.onClickHambargarBtn} className="bx bx-menu"></i>

      {props.showHambargar && (
        <div className="HeaderHambargar-div__menu">
          <div className="HeaderHambargar-div__menu__container">
            {props.children}
          </div>
        </div>
      )}
    </div>
  );
}

export default HeaderHambargar;
