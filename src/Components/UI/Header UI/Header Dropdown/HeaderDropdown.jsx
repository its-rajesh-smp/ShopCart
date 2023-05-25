import React, { useState } from "react";
import "./HeaderDropdown.css";

function HeaderDropdown(props) {
  const [showDropdown, setShowDropdown] = useState(false);

  // On Mouse In Open
  const onMouseInOpen = () => {
    setShowDropdown(true);
  };

  // On Mouse Out Close
  const onMouseOutClose = () => {
    setShowDropdown(false);
  };

  return (
    <div
      onMouseEnter={onMouseInOpen}
      onMouseLeave={onMouseOutClose}
      className=" HeaderDropdown-div "
    >
      <p className="forText">{props.for}</p>
      <i className="bx bx-chevron-down downIcon"></i>

      {showDropdown && (
        <HeaderDropdownContainer>{props.children}</HeaderDropdownContainer>
      )}
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
    <div onClick={props.onClick} className="HeaderDropdownItem__div">
      <i className="bx bxs-log-out"></i>
      <p>Logout</p>
    </div>
  );
}
