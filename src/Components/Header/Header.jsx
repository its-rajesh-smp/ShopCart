import React from "react";
import "./Header.css";

// Media
import { ShowOnMobile } from "../../Style/Media";

// Components
import HeaderIcon from "../UI/Header UI/Header Icon/HeaderIcon";
import HeaderSearch from "../UI/Header UI/Header Search/HeaderSearch";
import HeaderDropdown from "../UI/Header UI/Header Dropdown/HeaderDropdown";
import HeaderCart from "../UI/Header UI/Header Cart/HeaderCart";
import HeaderHambargar from "../UI/Header UI/Header Hambargar/HeaderHambargar";
import { HeaderDropdownItem } from "../UI/Header UI/Header Dropdown/HeaderDropdown";

function Header(props) {
  return (
    <div className=" Header-div ">
      <ShowOnMobile>
        <HeaderHambargar />
      </ShowOnMobile>

      <HeaderIcon />

      <HeaderSearch />

      <button className="header__loginBTn">LOGIN</button>

      <HeaderDropdown for="My Account">
        <HeaderDropdownItem />
      </HeaderDropdown>

      <p className="header__becomeASeller">Become a Seller</p>

      <HeaderDropdown for="More" />

      <HeaderCart />
    </div>
  );
}

export default Header;
