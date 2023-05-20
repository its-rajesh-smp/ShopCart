import React from "react";
import "./HeaderDropdown.css";

function HeaderDropdown(props) {
  return (
    <div className=" HeaderDropdown-div ">
      <p className="forText">{props.for}</p>
      <i className="bx bx-chevron-down downIcon"></i>

      <HeaderDropdownContainer>{props.children}</HeaderDropdownContainer>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                               ITEM CONTAINER                               */
/* -------------------------------------------------------------------------- */
function HeaderDropdownContainer(props) {
  return (
    <div className="HeaderDropdownContainer__div">
      <div className="HeaderDropdownContainer__div__pointer"></div>
      {props.children}
    </div>
  );
}
export default HeaderDropdown;

/* -------------------------------------------------------------------------- */
/*                               ITEM COMPONENT                               */
/* -------------------------------------------------------------------------- */
export function HeaderDropdownItem(props) {
  return (
    <div className="HeaderDropdownItem__div">
      <i className="bx bxs-log-out"></i>
      <p>Logout</p>
    </div>
  );
}
